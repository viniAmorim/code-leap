import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

import { useUsername } from "../../hooks/useUsername";

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
  const { username } = useUsername();
  const [posts, setPosts] = useState<IRepository[]>([]);
  const { addToast } = useToasts();
  const form = useForm();

  useEffect(() => {
    fetch("https://dev.codeleap.co.uk/careers/")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostSuccess = () => {
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

    fetch("http://dev.codeleap.co.uk/careers/", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        username: username?.username,
        title: title,
        content: content
      })
    })
    .then( (response) => { 
      console.log("Post criado");
      handlePostSuccess();
    });

    console.log(username);
    console.log(title);
    console.log(content);
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
    console.log(id);
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
    handlePostSuccess();
  })
  .then((json) => console.log(json));
  }


  return (
    <MainScreen 
      posts={posts}
      onSavePost={handleSavePost}
      onPostDelete={handlePostDelete}
      onPostEdit={handlePostEdit}
      isLoading={false}
      form={form}
      editForm={form}
      label={label}
    />
  )
}

export default MainScreenContainer;