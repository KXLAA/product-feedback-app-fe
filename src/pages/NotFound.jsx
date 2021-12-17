import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonThree } from '../components/common/ui/Button';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorBtn = styled(ButtonThree)`
  font-size: 24px;
  padding: 16px 24px;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyTxt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 24px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
    padding-bottom: 15px;
  }

  p {
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    font-weight: 400;
    color: #647196;
    width: 410px;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <EmptyContainer>
        <EmptyTxt>
          <h1>💩 404 💩</h1>
          <p>Looks like this page does not exist.</p>
          <p>Maybe Head back home ?</p>
        </EmptyTxt>
        <Link to="/">
          <ErrorBtn>Back Home</ErrorBtn>
        </Link>
      </EmptyContainer>
    </Container>
  );
}
