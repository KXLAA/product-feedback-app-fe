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

const Main = ({ feedback, setFeedback }) => (
  <Container>
    <Header feedback={feedback} />
    {feedback.length === 0 ? (
      <Empty />
    ) : (
      <>
        {feedback?.map((feed) => (
          <Feedback
            feedbackList={feedback}
            feedback={feed}
            key={feed.id}
            setFeedback={setFeedback}
          />
        ))}
      </>
    )}
  </Container>
);

export default Main;
