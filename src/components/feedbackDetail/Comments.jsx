/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Reply from './Reply';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.h3`
  color: #3a4374;
`;

const Textarea = styled.textarea`
  width: 80%;
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

const ReplyFormContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Comments = ({ comments }) => (
  <Container>
    <Header>
      {comments?.length} {comments?.length === 1 ? 'Comment' : 'Comments'}
    </Header>
    {comments?.map((comment) => (
      <Comment comment={comment} key={comment.id} />
    ))}

    <Reply />
  </Container>
);

export default Comments;
