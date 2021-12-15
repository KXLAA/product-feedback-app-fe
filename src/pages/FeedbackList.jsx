/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';
import NewFeedback from '../components/newFeedback/NewFeedback';
import { Layout } from '../components/feedbackForm/Common';

export default function FeedbackList({ feedback, setFeedback, handleLogOut, authUser }) {
  const [showAddPage, setShowAddPage] = useState(false);

  const toggleAddPage = () => {
    setShowAddPage(!showAddPage);
  };

  return (
    <>
      {showAddPage ? (
        <Layout>
          <NewFeedback toggleAddPage={toggleAddPage} feedback={feedback} />
        </Layout>
      ) : (
        <MainLayout>
          <HomePageGrid>
            <GridItemSide>
              <SideBar handleLogOut={handleLogOut} authUser={authUser} />
            </GridItemSide>
            <GridItemMain>
              <Main feedback={feedback} setFeedback={setFeedback} toggleAddPage={toggleAddPage} />
            </GridItemMain>
          </HomePageGrid>
        </MainLayout>
      )}
    </>
  );
}
