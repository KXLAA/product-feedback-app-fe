import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../common/ui/Button';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
`;

const WideBtn = styled(Button)`
  width: 100%;
  text-align: center;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
`;

const Login = () => (
  <Container>
    <WideBtn as={Link} to="/auth/login">
      Log In
    </WideBtn>
  </Container>
);

export default Login;
