/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonOne } from '../../common/ui/Button';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
`;

const WideBtn = styled(ButtonOne)`
  width: 100%;
  text-align: center;
`;

const Login = () => (
  <Container>
    <WideBtn as={Link} to="/auth/login">
      Log In
    </WideBtn>
  </Container>
);

export default Login;
