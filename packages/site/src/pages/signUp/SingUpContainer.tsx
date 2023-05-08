import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications'; 
import { useRouter } from 'next/router';

import { useDispatch } from "react-redux";


import SignUp from './SignUp';

export interface SignUpFormValues {
  username: string;
}

interface SingUpProps {
  onRefresh: () => void;
  label?: string;
}

function SingUpContainer({ onRefresh, label }: SingUpProps) {
  const dispatch = useDispatch();

  const router = useRouter();
  const { addToast } = useToasts();
  const form = useForm();
  const modalRef = useRef<{
    closeModal: () => void;
  }>();

  const handleSingUpSuccess = () => {
    modalRef.current.closeModal();
    form.reset();
    addToast('User created successfully.', {
      appearance: 'success',
      autoDismiss: true,
    });
    onRefresh();
  };

  const handleFail = (error: Error) => {
    console.log(error);
    form.setError('username', {
      type: 'manual',
      message: 'An error occurred. Try again.',
    });
  };

  const handleSignUp = (values: SignUpFormValues) => {
    const { username } = values;
    dispatch({ type: 'login', user: { username } })
    router.push('/main-screen');
  }

  return (
    <SignUp
      onSaveUsername={handleSignUp}
      form={form}
      isLoading={false}
      modalRef={modalRef}
      label={label}
    />
  );
}

export default SingUpContainer;
