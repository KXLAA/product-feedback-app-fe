import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HomePageGrid, GridItemSide, GridItemMain } from '../components/feedbackList/Layout';
import Main from '../components/feedbackList/main';
import SideBar from '../components/feedbackList/sideBar/index';
import MainLayout from '../components/common/Layout';
import feedbackService from '../services/feedback';

export default function FeedbackList() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const feedbackList = await feedbackService.getAll();
      setFeedback(feedbackList);
    };
    getAll();
  }, []);

  console.log(feedback);

  return (
    <MainLayout>
      <HomePageGrid>
        <GridItemSide>
          <SideBar />
        </GridItemSide>
        <GridItemMain>
          <Main feedback={feedback} />
        </GridItemMain>
      </HomePageGrid>
    </MainLayout>
  );
}
