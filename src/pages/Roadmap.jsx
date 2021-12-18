/* eslint-disable react/prop-types */
import React from 'react';
import MainLayout from '../components/common/Layout';
import { PageGrid, ItemContainer } from '../components/roadmap/Layout';
import Planned from '../components/roadmap/planned/Planned';
import InProgress from '../components/roadmap/inProgress/InProgress';
import Live from '../components/roadmap/live/Live';
import Header from '../components/roadmap/Header';
import NewFeedback from '../components/newFeedback/NewFeedback';
import { Layout } from '../components/feedbackForm/Common';

export default function Roadmap({
  feedback,
  serverUser,
  setNotify,
  setShowAlert,
  toggleAddPage,
  showAddPage,
}) {
  const planned = feedback.filter((feed) => feed?.status === 'planned');
  const live = feedback.filter((feed) => feed?.status === 'live');
  const inProgress = feedback.filter((feed) => feed?.status === 'in-progress');

  return (
    <>
      {showAddPage ? (
        <Layout>
          <NewFeedback toggleAddPage={toggleAddPage} />
        </Layout>
      ) : (
        <MainLayout className="form-animation">
          <Header toggleAddPage={toggleAddPage} />
          <PageGrid>
            <ItemContainer>
              <Planned
                planned={planned}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>

            <ItemContainer>
              <InProgress
                inProgress={inProgress}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>

            <ItemContainer>
              <Live
                live={live}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>
          </PageGrid>
        </MainLayout>
      )}
    </>
  );
}
