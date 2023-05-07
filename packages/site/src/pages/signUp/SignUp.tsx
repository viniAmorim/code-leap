import React, { BaseHTMLAttributes, Ref } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Modal, FormControl, Button, Input } from '@site/uikit';

import * as Styled from './styles';

export interface SignUpFormValues {
  username: string;
}

interface SignUpProps {
  onSaveUsername: (values: SignUpFormValues) => void;
  isLoading?: boolean;
  form: UseFormReturn;
  modalRef: Ref<Modal>;
  label?: string;
}

function SignUp({
  onSaveUsername,
  isLoading = false,
  form,
  modalRef,
 }: SignUpProps) {
  return (
    <Modal
      label="Modal"
      title="Welcome to CodeLeap network!"
      width={600}
      appElement="#__next"
      ref={modalRef}
    >
      <form onSubmit={form.handleSubmit(onSaveUsername)}>
        <FormControl
          label="Please enter your username"
          error={form.formState.errors?.username?.message}
        >
          <Input
            name="username"
            placeholder="John Doe"
            {...form.register('username', {
              required: true,
              minLength: {
                value: 5,
                message: 'Username is required',
              },
            })}
          />
        </FormControl>
        <Styled.ButtonContainer>
          <Button isLoading={isLoading} type="submit">
            ENTER
          </Button>
        </Styled.ButtonContainer>
      </form>
    </Modal>
  )
}

export default SignUp;