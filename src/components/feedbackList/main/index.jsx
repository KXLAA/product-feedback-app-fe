import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Feedback from './Feedback';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = () => (
  <Container>
    <Header />
    <Feedback />
    <Feedback />
    <Feedback />
    <Feedback />
    <Feedback />
    <Feedback />
  </Container>
);

export default Main;
