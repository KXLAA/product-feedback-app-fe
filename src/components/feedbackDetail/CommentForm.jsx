/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { ButtonOne } from '../common/ui/Button';
import feedbackService from '../../services/feedback';
import device from '../common/MediaQueries';

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
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
`;

const Error = styled.div`
  color: #d73737;
  font-weight: bold;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 19px;
    padding-left: 8px;
  }

  a {
    text-decoration: underline;
  }
`;

const CommentForm = ({ feedback, authUser }) => {
  const [characterCount, setCharacterCount] = useState(250);
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const createComment = useMutation((update) => feedbackService.createComment(update), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedback');
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
        {authUser ? (
          <p>{characterCount} Characters left</p>
        ) : (
          <Error>
            Please <Link to="/auth/login">Sign in</Link> or <Link to="/auth/sign-up">Sign up </Link>
            to comment.
          </Error>
        )}

        <ButtonOne disabled={!authUser}>Post Comment</ButtonOne>
      </Cta>
    </Form>
  );
};

export default CommentForm;

CommentForm.propTypes = {
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
};
