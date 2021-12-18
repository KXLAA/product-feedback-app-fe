import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Comment from './Comment';

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

const Comments = ({ comments, feedback, authUser }) => (
  <Container>
    <Header>
      {comments?.length} {comments?.length === 1 ? 'Comment' : 'Comments'}
    </Header>
    {comments?.map((comment) => (
      <Comment comment={comment} key={comment.id} feedback={feedback} authUser={authUser} />
    ))}
  </Container>
);

export default Comments;

Comments.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    upvotes: PropTypes.number,
    status: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
