/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';
import NewFeedback from '../components/newFeedback/NewFeedback';
import { Layout } from '../components/feedbackForm/Common';

export default function FeedbackList({
  feedback,
  setFeedback,
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
        <Layout>
          <NewFeedback toggleAddPage={toggleAddPage} feedback={feedback} authUser={authUser} />
        </Layout>
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
              />
            </GridItemSide>
            <GridItemMain>
              <Main
                setSort={setSort}
                sort={sort}
                feedback={feedback}
                setFeedback={setFeedback}
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
