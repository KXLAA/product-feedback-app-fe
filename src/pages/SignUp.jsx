import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../components/common/Layout';
import { Button } from '../components/common/ui/Button';
import userService from '../services/user';

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

  &:hover {
    color: #ffffff;
    background: #c75af6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export default function SignUp() {
  const [user, setUser] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
  });
  const [createdUser, setCreatedUser] = useState({});

  const createUser = async (event) => {
    event.preventDefault();

    const newUserObj = {
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
    };

    const newUser = await userService.createUser(newUserObj);
    setCreatedUser(newUser);
    console.log(createdUser);
    setUser({ username: '', name: '', password: '', email: '' });
  };

  const handleChange = ({ target }) => {
    setUser((prevUser) => ({ ...prevUser, [target.name]: target.value }));
  };

  return (
    <Background>
      <MainLayout>
        <Form onSubmit={createUser}>
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Apple Smith"
            id="name"
            value={user.name}
            onChange={handleChange}
          />

          <Label htmlFor="user-name">User Name </Label>
          <Input
            type="text"
            name="username"
            placeholder="AppleSmithy"
            id="username"
            value={user.username}
            onChange={handleChange}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="hello@example.com"
            id="email"
            value={user.email}
            onChange={handleChange}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <WideBtn> Sign Up </WideBtn>
        </Form>
      </MainLayout>
    </Background>
  );
}
