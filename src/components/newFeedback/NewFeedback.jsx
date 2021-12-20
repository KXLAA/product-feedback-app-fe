/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import {
  Form,
  InputContainer,
  Input,
  Textarea,
  ButtonContainer,
} from '../common/formElements/Inputs';
import { Container, Layout } from '../common/formElements/FormLayout';
import { ButtonOne, ButtonThree } from '../common/ui/Button';
import Header from './Header';
import { Category } from '../common/formElements/DropDowns';
import feedbackService from '../../services/feedback';

const Error = styled.div`
  text-align: center;
  color: #d73737;
  font-weight: bold;

  a {
    text-decoration: underline;
  }
`;

const NewFeedback = ({ toggleAddPage, feedback, authUser }) => {
  const [fields, setFields] = useState({ ...feedback });
  const queryClient = useQueryClient();

  const addFeedback = useMutation((newFeedback) => feedbackService.create(newFeedback), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedbackList');
      queryClient.invalidateQueries('feedback');
      toggleAddPage();
    },
  });

  const handleAddFeedback = (event) => {
    event.preventDefault();
    addFeedback.mutate(fields);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <Layout>
      <Container className="form-animation">
        <Header toggleAddPage={toggleAddPage} />
        <Form onSubmit={handleAddFeedback}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient
                cx="103.9%"
                cy="-10.387%"
                fx="103.9%"
                fy="-10.387%"
                r="166.816%"
                id="a"
              >
                <stop stopColor="#E84D70" offset="0%" />
                <stop stopColor="#A337F6" offset="53.089%" />
                <stop stopColor="#28A7ED" offset="100%" />
              </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
              />
            </g>
          </svg>
          <h1>Create New Feedback</h1>
          <InputContainer>
            <div>
              <h4>Feedback Title</h4>
              <p>Add a short, descriptive headline</p>
            </div>
            <Input value={fields.title} name="title" onChange={handleOnChange} required />
          </InputContainer>
          <InputContainer>
            <div>
              <h4>Category</h4>
              <p>Choose a category for your feedback</p>
            </div>
            <Category setFields={setFields} fields={fields} />
          </InputContainer>
          <InputContainer>
            <div>
              <h4>Feedback Detail</h4>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <Textarea
              value={fields.description}
              onChange={handleOnChange}
              name="description"
              required
            />
          </InputContainer>
          <ButtonContainer>
            <ButtonOne disabled={!authUser}>Add Feedback</ButtonOne>
            <ButtonThree onClick={toggleAddPage}>Cancel</ButtonThree>
          </ButtonContainer>
          {!authUser && (
            <Error>
              Please <Link to="/auth/login">Sign in</Link> or{' '}
              <Link to="/auth/sign-up">Sign up </Link>
              to create new feedback.
            </Error>
          )}
        </Form>
      </Container>
    </Layout>
  );
};

export default NewFeedback;

NewFeedback.propTypes = {
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
  }),
  toggleAddPage: PropTypes.func.isRequired,
};

NewFeedback.defaultProps = {
  authUser: undefined,
};
