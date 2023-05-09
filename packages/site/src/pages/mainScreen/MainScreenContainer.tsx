import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { LoginState } from '../../../redux/store';

import MainScreen from './MainScreen';

export interface CardPostFormValues {
  username: string;
  title: string;
  content: string;
}

interface MainScreenProps {
  onRefresh: () => void;
  label?: string;
}

interface IRepository {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

function MainScreenContainer({ onRefresh, label }: MainScreenProps) {
  const user = useSelector((state: LoginState) => state.user);

  const [posts, setPosts] = useState<IRepository[]>([]);

  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);
  const [offSet, setOffSet] = useState(0);

  const { addToast } = useToasts();
  const form = useForm();
  const modalRef = useRef<{
    closeModal: () => void;
  }>();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (!hasNextPage) return;

    try {
      const getPostsURL = `https://dev.codeleap.co.uk/careers/?offset=${offSet}`;
      axios.get(getPostsURL).then(({ data: { results, count } }) => {
        if (results) {
          if (count === posts.length + results.length) {
            setHasNextPage(false);
          }

          setPosts(posts => [...posts, ...results]);
          setPage(page => page + 1);
          setOffSet(offSet => offSet + 10);       
        }
      });
    } catch(e) {
      console.log(e);
    }
    
  };

  const loadMoreData = () => {
    if (page > 1) {
      getData();
    }
};

  const handleSuccess = () => {
    modalRef.current.closeModal();
    form.reset();
    addToast('successfully.', {
      appearance: 'success',
      autoDismiss: true,
    });
    // onRefresh();
  };

  const handleFail = (error: Error) => {
    console.log(error);
    form.setError('title', {
      type: 'manual',
      message: 'An error occurred. Try again.',
    });
  };

  const handleSavePost = (values: CardPostFormValues) => {
    const { title, content } = values;

    try {
      fetch("https://dev.codeleap.co.uk/careers/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify({
          username: user?.username,
          title: title,
          content: content
        })
      })
      .then( (response) => { 
        console.log("Post criado");
        handleSuccess();
      });
    } catch(e){
      console.log(e);
      handleFail(e);
    }
  }

  const handlePostDelete = (id: number) => {
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => addToast('Post deleted successfully.', {
      appearance: 'success',
      autoDismiss: true,
    }))
    handleSuccess();
  }

  const handlePostEdit = ({ id, title, content }) => {
    fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
        content: content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  .then((response) => {
    response.json()
    handleSuccess();
  })
  .then((json) => console.log(json));
  }

  return (
    <MainScreen 
      posts={posts}
      onSavePost={handleSavePost}
      onPostDelete={handlePostDelete}
      onPostEdit={handlePostEdit}
      loadMoreData={loadMoreData}
      hasNextPage={hasNextPage}
      modalRef={modalRef}
      isLoading={false}
      form={form}
      editForm={form}
      label={label} 
    />
  )
}

export default MainScreenContainer;