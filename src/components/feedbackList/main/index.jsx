/* eslint-disable react/prop-types */
import { React } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({ feedback }) => (
  <Container>
    <Header feedback={feedback} />
    {feedback.length === 0 ? (
      <Empty />
    ) : (
      <>
        {feedback?.map((feed) => (
          <Feedback feedback={feed} key={feed.id} />
        ))}
      </>
    )}
  </Container>
);

export default Main;
