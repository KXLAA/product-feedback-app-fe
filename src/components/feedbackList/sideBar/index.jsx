/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { React, useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import RoadMap from './RoadMap';
import Login from './Login';
import LoggedIn from './LoggedIn';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SideBar = ({ handleLogOut, authUser, feedback, setFilter, filter }) => {
  console.log('sideBar', feedback);

  return (
    <Container>
      {authUser ? <LoggedIn authUser={authUser} handleLogOut={handleLogOut} /> : <Login />}
      <Header />
      <Filter setFilter={setFilter} filter={filter} />
      <RoadMap feedback={feedback} />
    </Container>
  );
};

export default SideBar;
