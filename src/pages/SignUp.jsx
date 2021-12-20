/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import MainLayout from '../components/common/Layout';
import device from '../components/common/MediaQueries';
import { ButtonOne } from '../components/common/ui/Button';

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

  @media ${device.mobile} {
    padding-top: 52px;
    padding-left: 24px;
    padding-right: 24px;
  }
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
  max-width: 464px;
  width: 100%;
  padding: 48px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: rgba(59, 130, 246, 0.1);
`;

const Error = styled.div`
  text-align: left;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #d73737;
  }
`;

const Label = styled.label`
  font-weight: 700;
`;

const WideBtn = styled(ButtonOne)`
  width: 100%;
  padding: 24px;
  margin-top: 24px;
`;

const GoBack = styled(TiDelete)`
  position: absolute;
  color: #ffffff;
  font-size: 48px;
  left: 10px;
  top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  @media ${device.mobile} {
    padding-bottom: 24px;
  }

  &:hover {
    color: #d73737;
  }
`;

const SignIn = styled.p`
  text-align: center;

  a {
    text-decoration-line: underline;
    color: #ad1fea;
    font-weight: 700;
  }
`;

export default function SignUp({ handleSignUp, onChange, newUser }) {
  const [validation, setValidation] = useState(null);

  const handleValidation = () => {
    if (newUser.password.length < 5) {
      setValidation('Password must be at least 5 Characters');
    }
  };

  return (
    <Background>
      <Link to="/">
        <GoBack />
      </Link>

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
            onBlur={handleValidation}
          />
          {validation && (
            <Error>
              <p>{validation}</p>
            </Error>
          )}

          <WideBtn> Sign Up </WideBtn>
          <SignIn>
            Have an Account ? <Link to="/auth/login">Sign In</Link> here{' '}
          </SignIn>
        </Form>
      </MainLayout>
    </Background>
  );
}

SignUp.propTypes = {
  newUser: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  handleSignUp: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
