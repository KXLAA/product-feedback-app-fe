/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';
import NewFeedback from '../components/newFeedback/NewFeedback';

export default function FeedbackList({
  feedback,
  handleLogOut,
  authUser,
  serverUser,
  setFilter,
  filter,
  setSort,
  sort,
  setNotify,
  setShowAlert,
  toggleAddPage,
  showAddPage,
}) {
  return (
    <>
      {showAddPage ? (
        <NewFeedback toggleAddPage={toggleAddPage} feedback={feedback} authUser={authUser} />
      ) : (
        <MainLayout>
          <HomePageGrid>
            <GridItemSide>
              <SideBar
                handleLogOut={handleLogOut}
                authUser={authUser}
                feedback={feedback}
                setFilter={setFilter}
                filter={filter}
                setSort={setSort}
                sort={sort}
                toggleAddPage={toggleAddPage}
              />
            </GridItemSide>
            <GridItemMain>
              <Main
                setSort={setSort}
                sort={sort}
                feedback={feedback}
                toggleAddPage={toggleAddPage}
                serverUser={serverUser}
                setShowAlert={setShowAlert}
                setNotify={setNotify}
              />
            </GridItemMain>
          </HomePageGrid>
        </MainLayout>
      )}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  setFilter: PropTypes.func.isRequired,
  setNotify: PropTypes.func.isRequired,
  setShowAlert: PropTypes.func.isRequired,
  toggleAddPage: PropTypes.func.isRequired,
  showAddPage: PropTypes.bool.isRequired,
  setSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    query: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

FeedbackList.defaultProps = {
  authUser: undefined,
  serverUser: undefined,
};
