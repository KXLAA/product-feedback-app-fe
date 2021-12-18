/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GoKebabHorizontal } from 'react-icons/go';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  display: flex;
  gap: 16px;

  img {
    border-radius: 100%;
    width: 40px;
  }
`;

const Kebab = styled(GoKebabHorizontal)`
  color: black;
  font-size: 24px;
`;

const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  p {
    font-size: 12px;
  }
`;

const MenuBtn = styled(MenuButton)`
  background: none;
  align-items: center;
  border: none;
  width: 100%;
  cursor: pointer;
  display: flex;
  gap: 8px;
  text-align: left;
  transition: all 0.3s ease;
  padding: 14px;
  border-radius: 10px;
  &:hover {
    background: #eeeeee;
  }
`;

const MenuLi = styled(MenuList)`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 24px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border: none;
  width: 230px;
  > [data-reach-menu-item][data-selected] {
    color: #ad1fea;
    font-weight: 400;
    background: none;
  }

  > [data-reach-menu-items] {
    width: 100%;
  }
`;

const LoggedIn = ({ authUser, handleLogOut }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Menu>
        <MenuBtn>
          <img src={authUser.avatar} alt="avatar" />
          <UserDetails>
            <div>
              <h4>{authUser.name}</h4>
              <p>@{authUser.username}</p>
            </div>
            <Kebab />
          </UserDetails>
        </MenuBtn>
        <MenuLi>
          <MenuItem onSelect={handleLogOut}>Log Out</MenuItem>
          <MenuItem onSelect={() => navigate('/your-upvotes')}>Your Upvotes</MenuItem>
        </MenuLi>
      </Menu>
    </Container>
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
