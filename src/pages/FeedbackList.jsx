import React from 'react';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import SideBar from '../components/feedbackList/SideBar';

const FeedbackList = () => (
  <HomePageGrid>
    <GridItemSide>
      <SideBar />
    </GridItemSide>
  </HomePageGrid>
);

export default FeedbackList;
