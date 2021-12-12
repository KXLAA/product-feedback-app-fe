/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 19px;
  display: flex;
  gap: 16px;

  img {
    border-radius: 100%;
    width: 40px;
  }
`;

const UserDetails = styled.div``;

const LoggedIn = ({ newUser, handleLogOut }) => (
  <Container>
    <img src={newUser.avatar} alt="avatar" />
    <UserDetails>
      <h3>Welcome</h3>
      <h4>{newUser.name}</h4>
      <p onClick={handleLogOut}>log Out</p>
    </UserDetails>
  </Container>
);

export default LoggedIn;
