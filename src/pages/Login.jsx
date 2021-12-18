/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import MainLayout from '../components/common/Layout';

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
  border: none;
  outline: none;

  &:hover {
    color: #ffffff;
    background: #c75af6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

const SignUp = styled.p`
  text-align: center;

  a {
    text-decoration-line: underline;
    color: #ad1fea;
    font-weight: 700;
  }
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

const GoBack = styled(TiDelete)`
  position: absolute;
  color: #ffffff;
  font-size: 48px;
  left: 10px;
  top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #d73737;
  }
`;

export default function Login({ onChange, logIn, handleLogin, notify, setNotify }) {
  console.log(notify);

  const borderRed = notify === 'Wrong credentials' ? 'solid 1.5px red' : 'none';

  return (
    <Background>
      <Link to="/">
        <GoBack />
      </Link>
      <MainLayout className="fade-in">
        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">User Name</Label>
          <Input
            type="text"
            placeholder="Korty65"
            value={logIn.username}
            name="username"
            onChange={onChange}
            required
            style={{ border: `${borderRed}` }}
          />

          <Label htmlFor="email">Password</Label>
          <Input
            name="password"
            type="password"
            value={logIn.password}
            onChange={onChange}
            required="true"
            style={{ border: `${borderRed}` }}
          />
          {/* {notify === 'Can’t be empty' && (
            <Error>
              <p>{notify}</p>
            </Error>
          )} */}

          <WideBtn> Login </WideBtn>
          {notify === 'Wrong credentials' && (
            <Error>
              <p>Wrong credentials</p>
            </Error>
          )}

          <SignUp>
            Dont have an account ? <Link to="/auth/sign-up">Sign up</Link> here{' '}
          </SignUp>
        </Form>
      </MainLayout>
    </Background>
  );
}
