/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import PropTypes from 'prop-types';
import device from '../common/MediaQueries';

const Container = styled.div`
  background: #ffff;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  width: 100%;
  margin-bottom: 48px;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const UserContainer = styled.div`
  display: flex;
  color: #3a4374;
  align-items: center;
  gap: 8px;

  h3 {
    padding-right: 16px;

    @media ${device.mobile} {
      padding-right: 0px;
    }
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

  @media ${device.mobile} {
    text-align: center;
    padding-top: 8px;
  }

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
        <p>
          You have upvoted {serverUser?.liked.length}{' '}
          {serverUser?.liked.length === 1 ? 'suggestion' : 'suggestions'}
        </p>
      </Info>
    </Container>
  </>
);

export default Header;

Header.propTypes = {
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Header.defaultProps = {
  serverUser: undefined,
};
