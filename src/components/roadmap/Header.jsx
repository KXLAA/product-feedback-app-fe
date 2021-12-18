/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ButtonOne } from '../common/ui/Button';

const Container = styled.div`
  background: #373f68;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const Alert = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  gap: 8px;

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
    color: #ffffff;
  }
`;

const Header = ({ toggleAddPage }) => (
  <Container>
    <Alert>
      <Link to="/">
        <Back>
          <BiChevronLeft />
          <p>Go Back</p>
        </Back>
      </Link>

      <h3>Roadmap</h3>
    </Alert>
    <ButtonOne onClick={toggleAddPage}>+ Add Feedback</ButtonOne>
  </Container>
);

export default Header;

Header.propTypes = {
  toggleAddPage: PropTypes.func.isRequired,
};
