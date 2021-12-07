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
  }
`;

const UserDetails = styled.div``;

const LoggedIn = () => (
  <Container>
    <img src="https://i.pravatar.cc/50" alt="avatar" />
    <UserDetails>
      <h3>Welcome</h3>
      <h4>Test User</h4>
    </UserDetails>
  </Container>
);

export default LoggedIn;
