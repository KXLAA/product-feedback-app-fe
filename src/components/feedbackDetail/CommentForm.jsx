/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { Button } from '../common/ui/Button';
import feedbackService from '../../services/feedback';

const Form = styled.form`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px;
`;

const Header = styled.h3`
  color: #3a4374;
  padding-bottom: 24px;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  background: #f7f8fd;
  border-radius: 5px;
  height: 80px;
  padding: 24px;
  font-size: 15px;
  line-height: 22px;
  color: #8c92b3;
  margin-bottom: 24px;
`;

const Cta = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
  }
`;

const CommentForm = ({ feedback, authUser }) => {
  const [characterCount, setCharacterCount] = useState(250);
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const createComment = useMutation((update) => feedbackService.createComment(update), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedback', feedback.id);
    },
  });

  const handleOnChange = (event) => {
    const { value } = event.target;
    setContent(value);
    setCharacterCount(250 - value.length);
  };

  const commentObj = {
    id: feedback?.id,
    content: content,
  };

  const handleCreateComment = (event) => {
    event.preventDefault();
    createComment.mutate(commentObj);
    setContent('');
  };

  return (
    <Form onSubmit={handleCreateComment}>
      <Header>Add Comment</Header>
      <Textarea
        placeholder="Type your comment here"
        maxLength="250"
        value={content}
        onChange={handleOnChange}
        disabled={!authUser}
      />
      <Cta>
        <p>{characterCount} Characters left</p>
        <Button>Post Comment</Button>
      </Cta>
    </Form>
  );
};

export default CommentForm;
