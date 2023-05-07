import React, { BaseHTMLAttributes, ReactNode, Ref } from 'react';
import { FaSpinner, FaEdit, FaTrash } from 'react-icons/fa';

import { UseFormReturn } from 'react-hook-form';

import Button from '~/Button';
import Modal from '~/Modal';
import FormControl from '~/FormControl';
import Input from '~/Input';

import * as Styled from './styles';

export interface PostFormValues {
  title: string;
  content: string;
}

export interface PostCardProps {
  /**
   * Title
  */
  title: string;
 /**
  * Username
  */
  username: string;
 /**
  * Hour of post 
  */
  hourPost: string;
  /**
  * Content of post 
  */
  content: string;
  /**
   * Icon Button
   */
  icon: ReactNode;
  /**
   * onEdit
   */
  onEdit: () => void;
  /**
   * onRemove
   */
  onRemove: () => void;
  onSavePost: (values: PostFormValues) => void;
  form: UseFormReturn;
  modalRef: Ref<typeof Modal>;
  isLoading?: boolean;
}

const PostCard = ({
  title,
  username,
  hourPost,
  content,
  icon,
  onEdit,
  onRemove,
  form,
  modalRef,
  isLoading = false,
  onSavePost,
  ...rest
}: PostCardProps) => {
  return (
    <Styled.PostCard title={title} {...rest}>
      <Styled.WrapperHead>
        <Styled.Title>
          {title}
        </Styled.Title>
        <Styled.WrapperButtons>
    
        </Styled.WrapperButtons>
        
      </Styled.WrapperHead>

      <Styled.WrapperCardInfo>
        <Styled.Info>
          <Styled.Username>{username}</Styled.Username>
          <Styled.HourPost>{hourPost}</Styled.HourPost>
        </Styled.Info>
      
        <Styled.Content>{content}</Styled.Content>

       
      </Styled.WrapperCardInfo>
    </Styled.PostCard>
  );
};

export default PostCard;
