/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';

export default function FeedbackList({ feedback, setFeedback, handleLogOut, authUser }) {
  return (
    <MainLayout>
      <HomePageGrid>
        <GridItemSide>
          <SideBar handleLogOut={handleLogOut} authUser={authUser} />
        </GridItemSide>
        <GridItemMain>
          <Main feedback={feedback} setFeedback={setFeedback} />
        </GridItemMain>
      </HomePageGrid>
    </MainLayout>
  );
}
