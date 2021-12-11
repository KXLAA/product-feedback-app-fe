/* eslint-disable react/prop-types */
import React from 'react';
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
