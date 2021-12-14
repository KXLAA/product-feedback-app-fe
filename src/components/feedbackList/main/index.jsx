/* eslint-disable react/prop-types */
import { React } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';
import feedbackService from '../../../services/feedback';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({ feedback, setFeedback, toggleAddPage }) => {
  const { data, isLoading, isError, error } = useQuery('feedbackList', feedbackService.getAll);

  if (isLoading) {
    return 'Loading Feedback';
  }
  return (
    <Container>
      <Header feedback={feedback} toggleAddPage={toggleAddPage} />
      {feedback?.length === 0 ? (
        <Empty />
      ) : (
        <>
          {data?.map((feed) => (
            <Feedback feedbackList={data} feedback={feed} key={feed.id} setFeedback={setFeedback} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Main;
