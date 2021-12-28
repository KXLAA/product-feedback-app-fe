/* eslint-disable react/prop-types */
import { React } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';
import Loading from '../../common/Loading';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({
  feedback,
  toggleAddPage,
  serverUser,
  setSort,
  sort,
  setNotify,
  setShowAlert,
  isLoading,
}) => (
  <Container>
    <MediaQuery minWidth={630}>
      <Header setSort={setSort} feedback={feedback} toggleAddPage={toggleAddPage} sort={sort} />
    </MediaQuery>

    {feedback?.length === 0 ? (
      <Empty toggleAddPage={toggleAddPage} />
    ) : (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          feedback?.map((feed) => (
            <Feedback
              feedbackList={feedback}
              feedback={feed}
              key={feed.id}
              serverUser={serverUser}
              setShowAlert={setShowAlert}
              setNotify={setNotify}
            />
          ))
        )}
      </>
    )}
  </Container>
);

export default Main;

Main.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object),
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
  feedback: undefined,
};
