/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  InputContainer,
  Input,
  Textarea,
  ButtonContainer,
} from '../common/formElements/Inputs';
import { Container, Layout } from '../common/formElements/FormLayout';
import { ButtonThree, ButtonError, ButtonOne } from '../common/ui/Button';
import feedbackService from '../../services/feedback';
import Header from './Header';
import { UpdateStatus, Category } from '../common/formElements/DropDowns';
import device from '../common/MediaQueries';

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

const EditFeedback = ({ showEditPage, setShowEditPage, feedback }) => {
  const [fields, setFields] = useState({ ...feedback });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateFeedback = useMutation((update) => feedbackService.update(update), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedbackList');
      queryClient.invalidateQueries('feedback');
      setShowEditPage(!showEditPage);
    },
  });

  const deleteFeedback = useMutation((deleted) => feedbackService.deleteFeedback(deleted), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedbackList');
      queryClient.invalidateQueries('feedback');
      navigate('/');
    },
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleUpdateFeedback = (event) => {
    event.preventDefault();
    updateFeedback.mutate(fields);
  };

  const handleDeleteFeedback = (event) => {
    event.preventDefault();
    deleteFeedback.mutate(feedback.id);
  };

  return (
    <Layout>
      <Container className="form-animation">
        <Header showEditPage={showEditPage} setShowEditPage={setShowEditPage} />
        <Form onSubmit={handleUpdateFeedback}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1978)" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial_0_1978"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)"
              >
                <stop stopColor="#E84D70" />
                <stop offset="0.530886" stopColor="#A337F6" />
                <stop offset="1" stopColor="#28A7ED" />
              </radialGradient>
            </defs>
          </svg>
          <h1>Create New Feedback</h1>
          <InputContainer>
            <div>
              <h4>Feedback Title</h4>
              <p>Add a short, descriptive headline</p>
            </div>
            <Input value={fields.title} name="title" onChange={handleOnChange} />
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
              <h4>Update Status</h4>
              <p>Change feedback state</p>
            </div>
            <UpdateStatus setFields={setFields} fields={fields} />
          </InputContainer>

          <InputContainer>
            <div>
              <h4>Feedback Detail</h4>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <Textarea value={fields.description} onChange={handleOnChange} name="description" />
          </InputContainer>

          <Buttons>
            <ButtonError onClick={handleDeleteFeedback}>Delete</ButtonError>

            <ButtonContainer>
              <ButtonThree>Cancel</ButtonThree>
              <ButtonOne style={{ order: -1 }}>Save Changes</ButtonOne>
            </ButtonContainer>
          </Buttons>
        </Form>
      </Container>
    </Layout>
  );
};

export default EditFeedback;

EditFeedback.propTypes = {
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
  showEditPage: PropTypes.bool.isRequired,
  setShowEditPage: PropTypes.func.isRequired,
};
