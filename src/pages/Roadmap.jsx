import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import MainLayout from '../components/common/Layout';
import { PageGrid, ItemContainer } from '../components/roadmap/Layout';
import Planned from '../components/roadmap/planned/Planned';
import InProgress from '../components/roadmap/inProgress/InProgress';
import Live from '../components/roadmap/live/Live';
import Header from '../components/roadmap/Header';
import NewFeedback from '../components/newFeedback/NewFeedback';
import RodmapMobile from '../components/roadmap/mobile';

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
        <>
          <NewFeedback toggleAddPage={toggleAddPage} />
        </>
      ) : (
        <MediaQuery minWidth={630}>
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
        </MediaQuery>
      )}

      <MediaQuery maxWidth={630}>
        <RodmapMobile
          toggleAddPage={toggleAddPage}
          planned={planned}
          inProgress={inProgress}
          live={live}
          serverUser={serverUser}
          setNotify={setNotify}
          setShowAlert={setShowAlert}
        />
      </MediaQuery>
    </>
  );
}

Roadmap.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  setNotify: PropTypes.func.isRequired,
  setShowAlert: PropTypes.func.isRequired,
  toggleAddPage: PropTypes.func.isRequired,
  showAddPage: PropTypes.bool.isRequired,
};

Roadmap.defaultProps = {
  serverUser: undefined,
};
