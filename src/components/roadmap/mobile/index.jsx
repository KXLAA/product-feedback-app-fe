/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useTabsContext } from '@reach/tabs';
import PropTypes from 'prop-types';
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

function CustomTab({ index, ...props }) {
  const { selectedIndex, focusedIndex } = useTabsContext();
  return (
    <Tab
      style={{
        borderBottom: `4px solid ${
          selectedIndex === index ? '#AD1FEA' : focusedIndex === index ? '#8C92B3' : '#8C92B3'
        }`,
      }}
      {...props}
    />
  );
}

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
        <CustomTab index={0}>Planned ({planned?.length})</CustomTab>
        <CustomTab index={1}>In-Progress ({inProgress?.length})</CustomTab>
        <CustomTab index={2}>Live ({live?.length})</CustomTab>
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

RodmapMobile.propTypes = {
  planned: PropTypes.arrayOf(PropTypes.object).isRequired,
  live: PropTypes.arrayOf(PropTypes.object).isRequired,
  inProgress: PropTypes.arrayOf(PropTypes.object).isRequired,
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
};

RodmapMobile.defaultProps = {
  serverUser: undefined,
};
