import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import Filter from './Filter';
import RoadMap from './RoadMap';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SideBar = () => (
  <Container>
    <Header />
    <Filter />
    <RoadMap />
  </Container>
);

export default SideBar;
