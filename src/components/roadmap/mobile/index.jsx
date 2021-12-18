/* eslint-disable react/prop-types */
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import styled from 'styled-components';
import Header from './Header';
import { ItemContainer } from '../Layout';
import Planned from '../planned/Planned';
import InProgress from '../inProgress/InProgress';
import Live from '../live/Live';

const Heading = styled(TabList)`
  font-weight: 700;
  color: #3a4374;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  background: #f7f8fd;

  > [data-reach-tab] {
    padding: 0px;
  }
`;

const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

const RodmapMobile = ({
  toggleAddPage,
  planned,
  live,
  inProgress,
  serverUser,
  setNotify,
  setShowAlert,
}) => (
  <>
    <Header toggleAddPage={toggleAddPage} />

    <Tabs>
      <Heading>
        <Tab>Planned ({planned?.length})</Tab>
        <Tab>In-Progress ({inProgress?.length})</Tab>
        <Tab>Live ({live?.length})</Tab>
      </Heading>

      <TabPanels>
        <Container>
          <TabPanel>
            <ItemContainer>
              <Planned
                planned={planned}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>
          </TabPanel>
          <TabPanel>
            <ItemContainer>
              <InProgress
                inProgress={inProgress}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>
          </TabPanel>
          <TabPanel>
            <ItemContainer>
              <Live
                live={live}
                serverUser={serverUser}
                setNotify={setNotify}
                setShowAlert={setShowAlert}
              />
            </ItemContainer>
          </TabPanel>
        </Container>
      </TabPanels>
    </Tabs>
  </>
);

export default RodmapMobile;
