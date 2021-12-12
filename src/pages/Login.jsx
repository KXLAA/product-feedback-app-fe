/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainLayout from '../components/common/Layout';
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

const SignUp = styled.p`
  text-align: center;

  a {
    text-decoration-line: underline;
    color: #ad1fea;
    font-weight: 700;
  }
`;

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [notify, setNotify] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const newUser = JSON.parse(loggedUserJSON);
      setUser(newUser);
      feedbackService.setToken(newUser.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const newUser = await loginService.login({
        username: username,
        password: password,
      });
      window.localStorage.setItem('loggedUser', JSON.stringify(newUser));
      feedbackService.setToken(newUser.token);
      setUser(newUser);
      setUsername('');
      setPassword('');
    } catch (exception) {
      setNotify('Wrong credentials');
    }
  };
  console.log(user);
  return (
    <Background>
      <MainLayout>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">User Name</Label>
          <Input
            type="text"
            placeholder="Korty65"
            id="email"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />

          <Label htmlFor="email">Password</Label>
          <Input
            name="Password"
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <WideBtn> Login </WideBtn>

          <SignUp>
            Not signed in ? <Link to="/auth/sign-up">Sign up</Link> here{' '}
          </SignUp>
        </Form>
      </MainLayout>
    </Background>
  );
}
