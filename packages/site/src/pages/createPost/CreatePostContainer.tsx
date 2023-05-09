import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';

import { useUsername } from "../../hooks/useUsername";

import CreatePost from './CreatePost';

export interface CardPostFormValues {
  username: string;
  title: string;
  content: string;
}

interface MainScreenProps {
  onRefresh: () => void;
  label?: string;
}

function CreatePostContainer({ onRefresh, label }: MainScreenProps) {
  const { username } = useUsername();
  const { addToast } = useToasts();
  const form = useForm();

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

    fetch("https://dev.codeleap.co.uk/careers/", {
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

  return (
    <CreatePost
      onSavePost={handleSavePost}
      isLoading={false}
      form={form}
      label={label}
    />
  )
}

export default CreatePostContainer;