/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MainLayout from '../components/common/Layout';
import { PageGrid, ItemContainer } from '../components/roadmap/Layout';
import Planned from '../components/roadmap/planned/Planned';
import InProgress from '../components/roadmap/inProgress/InProgress';
import Live from '../components/roadmap/live/Live';
import Header from '../components/roadmap/Header';
import NewFeedback from '../components/newFeedback/NewFeedback';
import { Layout } from '../components/feedbackForm/Common';

export default function Roadmap({ feedback }) {
  console.log(feedback);
  const planned = feedback.filter((feed) => feed?.status === 'planned');
  const live = feedback.filter((feed) => feed?.status === 'live');
  const inProgress = feedback.filter((feed) => feed?.status === 'in-progress');
  const [showEditPage, setShowEditPage] = useState(false);

  const toggleEdit = () => {
    setShowEditPage(!showEditPage);
  };

  return (
    <>
      {showEditPage ? (
        <Layout>
          <NewFeedback />
        </Layout>
      ) : (
        <MainLayout>
          <Header toggleEdit={toggleEdit} />
          <PageGrid>
            <ItemContainer>
              <Planned planned={planned} />
            </ItemContainer>

            <ItemContainer>
              <InProgress inProgress={inProgress} />
            </ItemContainer>

            <ItemContainer>
              <Live live={live} />
            </ItemContainer>
          </PageGrid>
        </MainLayout>
      )}
    </>
  );
}
