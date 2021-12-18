/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../components/common/Layout';
import userService from '../services/user';
import loginService from '../services/login';
import feedbackService from '../services/feedback';

const Background = styled.div`
  min-height: 100vh;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
    line-height: 104px;
    text-align: center;
    letter-spacing: -0.25px;
    color: #ffffff;
    width: 564px;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 464px;
  padding: 48px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: rgba(59, 130, 246, 0.1);
`;

const Label = styled.label`
  font-weight: 700;
`;

const WideBtn = styled.button`
  width: 100%;
  text-align: center;
  padding: 24px;
  font-size: 16px;
  margin-top: 24px;
  background: #ad1fea;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    color: #ffffff;
    background: #c75af6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export default function SignUp({ handleSignUp, onChange, newUser }) {
  const navigate = useNavigate();

  return (
    <Background>
      <MainLayout className="fade-in">
        <Form onSubmit={handleSignUp}>
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Apple Smith"
            id="name"
            value={newUser.name}
            onChange={onChange}
            required
          />

          <Label htmlFor="user-name">User Name </Label>
          <Input
            type="text"
            name="username"
            placeholder="AppleSmithy"
            id="username"
            value={newUser.username}
            onChange={onChange}
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="hello@example.com"
            id="email"
            value={newUser.email}
            onChange={onChange}
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={newUser.password}
            onChange={onChange}
            required
            minlength="5"
          />

          <WideBtn> Sign Up </WideBtn>
        </Form>
      </MainLayout>
    </Background>
  );
}
