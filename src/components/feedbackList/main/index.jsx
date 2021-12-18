/* eslint-disable react/prop-types */
import { React } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({ feedback, toggleAddPage, serverUser, setSort, sort, setNotify, setShowAlert }) => (
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

Main.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  toggleAddPage: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    query: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

Main.defaultProps = {
  authUser: undefined,
};
