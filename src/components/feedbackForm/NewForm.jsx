/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Header,
  Form,
  InputContainer,
  Input,
  Textarea,
  ButtonContainer,
} from './Common';
import { Button } from '../common/ui/Button';

import NewDropdown from './NewDropDown';

const Cancel = styled(Button)`
  background-color: #3a4374;
`;

const NewForm = ({ onChange, newFeedback, handleNewFeedback }) => {
  console.log(newFeedback);
  return (
    <Container>
      <Header />
      <Form onSubmit={handleNewFeedback}>
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a">
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
          <Input name="title" value={newFeedback.title} onChange={onChange} />
        </InputContainer>
        <InputContainer>
          <div>
            <h4>Category</h4>
            <p>Choose a category for your feedback</p>
          </div>
          <NewDropdown />
        </InputContainer>
        <InputContainer>
          <div>
            <h4>Feedback Detail</h4>
            <p>Include any specific comments on what should be improved, added, etc.</p>
          </div>
          <Textarea name="detail" value={newFeedback.detail} onChange={onChange} />
        </InputContainer>
        <ButtonContainer>
          <Button>Add Feedback</Button>
          <Cancel>Cancel</Cancel>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default NewForm;
