/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';

export default function FeedbackList({ feedback, handleLogOut }) {
  return (
    <MainLayout>
      <HomePageGrid>
        <GridItemSide>
          <SideBar handleLogOut={handleLogOut} />
        </GridItemSide>
        <GridItemMain>
          <Main feedback={feedback} />
        </GridItemMain>
      </HomePageGrid>
    </MainLayout>
  );
}
