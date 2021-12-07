import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/ui/Button';

const Container = styled.div`
  height: 650px;
  width: 825px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyContainer = styled.div`
  text-align: center;

  img {
    width: 150px;
    margin: 0 auto;
    padding-bottom: 48px;
  }
`;

const EmptyTxt = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
    padding-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    font-weight: 400;
    color: #647196;
    width: 410px;
  }
`;

const Empty = () => (
  <Container>
    <EmptyContainer>
      <img src="illustration-empty.svg" alt="empty" />
      <EmptyTxt>
        <h1>There is no feedback yet.</h1>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas
          to improve our app.
        </p>
      </EmptyTxt>
      <Button>+ Add Feedback</Button>
    </EmptyContainer>
  </Container>
);

export default Empty;
