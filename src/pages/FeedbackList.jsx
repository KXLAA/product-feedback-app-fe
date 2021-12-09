import React from 'react';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';

export default function FeedbackList() {
  return (
    <MainLayout>
      <HomePageGrid>
        <GridItemSide>
          <SideBar />
        </GridItemSide>
        <GridItemMain>
          <Main />
        </GridItemMain>
      </HomePageGrid>
    </MainLayout>
  );
}
