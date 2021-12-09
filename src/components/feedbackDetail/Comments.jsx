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

const Comments = () => (
  <Container>
    <Header>4 Comments</Header>
    <Comment />
    <Reply />
    <Comment />
    <Comment />
  </Container>
);

export default Comments;
