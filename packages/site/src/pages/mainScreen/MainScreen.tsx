import React, { Ref } from 'react';

import { useRouter } from 'next/router';

import { useUsername } from "../../hooks/useUsername";

import { Container, Row, Col } from 'react-grid-system';
import { UseFormReturn } from 'react-hook-form';
import { FaSpinner, FaEdit, FaTrash } from 'react-icons/fa';
import { Card, Button, FormControl, Input, PostCard, Modal } from '@site/uikit';

import { Layout } from '~/app/components';

import * as Styled from './styles';

export interface CardPostFormValues {
  title: string;
  content: string;
}

interface Posts {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface CardProps {
  onSavePost: (values: CardPostFormValues) => void;
  onPostDelete: (id: number) => void;
  onPostEdit: (data: {}) => void;
  isLoading?: boolean;
  form: UseFormReturn;
  label?: string;
  modalRef?: Ref<Modal>;
  posts?: Posts[];
}

function MainScreen({ 
  onSavePost, 
  onPostDelete,
  onPostEdit,
  posts = [],
  isLoading, 
  form, 
  modalRef,
  label, 
  }: CardProps) {
  const router = useRouter();
  const { username } = useUsername();

  function handlePostHour(date) {
    const now = new Date(); 
    const past = new Date(`${date}`); 
    const diff = Math.abs(now.getTime() - past.getTime()); 
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(((diff/1000)/60)/60);
    const minutes = Math.floor((diff/1000)/60);

    if(days <  1440) {
      if(minutes > 60) {
        return `${hours} hours ago`;
      } else {
        return `${minutes} minutes ago`;
      }
    } else {
      return `${days} day(s) ago`;
    }
  }
  return (
    <Layout>
      <Container>
       <Row>
        <Col sm={12} md={12}>
          <Card>
            <Styled.StyledHeading size="title">
              What's on your mind ?
            </Styled.StyledHeading>
            <form onSubmit={form.handleSubmit(onSavePost)}>
              <FormControl
                label="Title"
                error={form.formState.errors?.title?.message}
              >
                <Input
                  name="title"
                  placeholder="Hello World"
                  {...form.register('title', {
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
                error={form.formState.errors?.title?.message}
              >
                <Input
                  name="content"
                  placeholder="Content here"
                  {...form.register('content', {
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
        {posts?.results?.map((post) => (
          <Col sm={12} md={12}>
            <Styled.PostCard>
              <Styled.WrapperHead>
                <Styled.Title>
                  {post.title}
                </Styled.Title>
                {username?.username == post.username && (<Styled.WrapperButtons>
                  <Modal
                    label={<FaTrash />}
                    title="Are you sure you want to delete this item?"
                    width={600}
                    appElement="#__next"
                    ref={modalRef}
                  >
                    <Styled.ButtonContainer>
                      <Styled.CancelButton isLoading={isLoading}>
                        Cancel
                      </Styled.CancelButton>
                      <Styled.DeleteButton isLoading={isLoading} onClick={() => onPostDelete(post.id)}>
                        Delete
                      </Styled.DeleteButton>
                    </Styled.ButtonContainer>
                  </Modal>
                  <Modal
                    label={<FaEdit />}
                    title="Edit item"
                    width={600}
                    appElement="#__next"
                    ref={modalRef}
                  >
                    <form onSubmit={form.handleSubmit(onPostEdit)}>
                      <FormControl
                        error={form.formState.errors?.id?.message}
                      >
                        <Input
                          value={post.id}
                          type="hidden"
                          {...form.register('id', {
                            required: true,
                            minLength: {
                              value: 5,
                              message: 'id is required',
                            },
                          })}
                        />
                      </FormControl>
                      <FormControl
                        label="Title"
                        error={form.formState.errors?.title?.message}
                      >
                        <Input
                          lable="Title"
                          placeholder="Hello world"
                          {...form.register('title', {
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
                        error={form.formState.errors?.content?.message}
                      >
                        <Input
                          content="content"
                          placeholder="Content here"
                          {...form.register('content', {
                            required: true,
                            minLength: {
                              value: 5,
                              message: 'content is required',
                            },
                          })}
                        />
                      </FormControl>
                      <Styled.ButtonContainer>
                        <Styled.CancelButton isLoading={isLoading} type="submit">
                          Cancel
                        </Styled.CancelButton>
                        <Styled.SaveButton isLoading={isLoading} type="submit">
                          Save
                        </Styled.SaveButton>
                      </Styled.ButtonContainer>
                    </form>
                  </Modal>
                </Styled.WrapperButtons>
              )}
              </Styled.WrapperHead>
          

              <Styled.WrapperCardInfo>
                <Styled.Info>
                  <Styled.Username>@{post.username}</Styled.Username>
                  <Styled.HourPost>{handlePostHour(post.created_datetime)}</Styled.HourPost>
                </Styled.Info>
              
                <Styled.Content>{post.content}</Styled.Content>

              </Styled.WrapperCardInfo>
            </Styled.PostCard>
          </Col>
        ))}
       </Row>
      </Container>
    </Layout>
  );
}

export default MainScreen;