/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';

const Container = styled.div`
  background: #ffff;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  width: 100%;
  margin-bottom: 48px;
  justify-content: space-between;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  color: #3a4374;
  align-items: center;
  gap: 8px;

  h3 {
    padding-right: 16px;
  }

  img {
    border-radius: 100%;
    width: 60px;
    margin: 0 auto;
  }
`;

const Alert = styled.div`
  display: flex;
  color: #4661e6;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  h3 {
    padding-right: 16px;
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
  }
`;

const Info = styled.div`
  text-align: right;

  p {
    font-weight: 700;
    width: 150px;
    font-size: 16px;
    line-height: 20px;
    color: #647196;
  }
`;

const Header = ({ serverUser }) => (
  <>
    <Alert>
      <Link to="/">
        <Back>
          <BiChevronLeft />
          <p>Go Back</p>
        </Back>
      </Link>
    </Alert>
    <Container>
      <UserContainer>
        <img src={serverUser?.avatar} alt="avatar" />
        <div>
          <h4>{serverUser?.name}</h4>
          <p>@{serverUser?.username}</p>
        </div>
      </UserContainer>
      <Info>
        <p>You have upvoted {serverUser?.liked.length} suggestions</p>
      </Info>
    </Container>
  </>
);

export default Header;
