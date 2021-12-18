/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    border-radius: 100%;
    width: 40px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 12px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  p {
    font-size: 12px;
    cursor: pointer;
    font-weight: 700;
  }
`;

const LoggedIn = ({ authUser, handleLogOut }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <UserDetails>
          <img src={authUser?.avatar} alt="avatar" />
          <h4>{authUser?.name}</h4>
          <p>@{authUser?.username}</p>

          <Links>
            <p onClick={handleLogOut}>Log Out</p>
            <p onClick={() => navigate('/your-upvotes')}>Your Upvotes</p>
          </Links>
        </UserDetails>
      </Container>
    </>
  );
};

export default LoggedIn;

LoggedIn.propTypes = {
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  handleLogOut: PropTypes.func.isRequired,
};

LoggedIn.defaultProps = {
  authUser: undefined,
};
