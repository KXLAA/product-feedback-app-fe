import React from 'react';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';

const FeedbackList = () => (
  <HomePageGrid>
    <GridItemSide>
      <SideBar />
    </GridItemSide>
    <GridItemMain>
      <Main />
    </GridItemMain>
  </HomePageGrid>
);

export default FeedbackList;
