/* eslint-disable react/prop-types */
import { React } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({
  feedback,
  setFeedback,
  toggleAddPage,
  serverUser,
  setSort,
  sort,
  setNotify,
  setShowAlert,
}) => (
  <Container>
    <MediaQuery minWidth={630}>
      <Header setSort={setSort} feedback={feedback} toggleAddPage={toggleAddPage} sort={sort} />
    </MediaQuery>

    {feedback?.length === 0 ? (
      <Empty />
    ) : (
      <>
        {feedback?.map((feed) => (
          <Feedback
            feedbackList={feedback}
            feedback={feed}
            key={feed.id}
            setFeedback={setFeedback}
            serverUser={serverUser}
            setShowAlert={setShowAlert}
            setNotify={setNotify}
          />
        ))}
      </>
    )}
  </Container>
);

export default Main;
