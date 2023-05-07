import React, { Ref } from 'react';

import { useRouter } from 'next/router';

import { useUsername } from "../../hooks/useUsername";

import { Container, Row, Col } from 'react-grid-system';
import { UseFormReturn } from 'react-hook-form';
import { Card, Button, FormControl, Input, PostCard, Modal } from '@site/uikit';

import { Layout } from '~/app/components';

import * as Styled from './styles';

export interface CreatePostFormValues {
  title: string;
  content: string;
}

export interface CardProps {
  onSavePost: (values: CreatePostFormValues) => void;
  isLoading?: boolean;
  form: UseFormReturn;
  label?: string;
  modalRef?: Ref<Modal>;
}

function CreatePost({ 
  onSavePost, 
  isLoading, 
  form, 
  modalRef,
  label, 
  }: CardProps) {
  const router = useRouter();
  const { username } = useUsername();

  return (
    <Container>
    <Row>
      <Col sm={12} md={12}>
        <Card>
          <Styled.StyledHeading size="title">
            What's on your mind ?
          </Styled.StyledHeading>
          <form onSubmit={form?.handleSubmit(onSavePost)}>
            <FormControl
              label="Title"
              error={form?.formState.errors?.title?.message}
            >
              <Input
                name="title"
                placeholder="Hello World"
                {...form?.register('title', {
                required: true,
                minLength: {
                    value: 5,
                    message: 'title is required',
                },
              })}
              />
            </FormControl>
            <FormControl
              label="Content"
              error={form?.formState.errors?.title?.message}
            >
              <Input
                name="content"
                placeholder="Content here"
                {...form?.register('content', {
                required: true,
                minLength: {
                  value: 5,
                    message: 'content is required',
                  },
                })}
              />
            </FormControl>
            <Styled.ButtonContainer>
              <Button isLoading={isLoading} type="submit">
                CREATE
              </Button>
            </Styled.ButtonContainer>
          </form>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default CreatePost;