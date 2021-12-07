import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/common/Layout';
import { Button } from '../components/common/ui/Button';

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

const WideBtn = styled(Button)`
  width: 100%;
  text-align: center;
  padding: 24px;
  font-size: 16px;
  margin-top: 24px;
`;

function SignUp() {
  return (
    <Background>
      <MainLayout>
        <Form>
          <Label htmlFor="full-name">Full Name</Label>
          <Input type="text" name="full-name" placeholder="Apple Smith" id="full-name" />

          <Label htmlFor="user-name">User Name </Label>
          <Input type="text" name="user-name" placeholder="AppleSmithy" id="user-name" />

          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" placeholder="hello@example.com" id="email" />

          <Label htmlFor="password">Password</Label>
          <Input name="Password" type="password" id="password" />
          <WideBtn> Sign Up </WideBtn>
        </Form>
      </MainLayout>
    </Background>
  );
}

export default SignUp;
