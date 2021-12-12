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

const SideBar = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedUser');
  const newUser = JSON.parse(loggedUserJSON);
  console.log(newUser);

  return (
    <Container>
      {newUser ? <LoggedIn newUser={newUser} /> : <Login />}
      <Header />
      <Filter />
      <RoadMap />
    </Container>
  );
};

export default SideBar;
