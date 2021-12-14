/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Button } from '../common/ui/Button';

const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Alert = styled.div`
  display: flex;
  color: #4661e6;
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
    color: #647196;
  }
`;

const HeaderBtn = styled(Button)`
  background-color: #4661e6;
`;

const Header = ({ showEditPage, setShowEditPage, authUser, feedback }) => {
  console.log(feedback, authUser);

  return (
    <Container>
      <Alert>
        <Link to="/">
          <Back>
            <BiChevronLeft />
            <p>Go Back</p>
          </Back>
        </Link>
      </Alert>
      {feedback.user === authUser?.id && (
        <HeaderBtn onClick={() => setShowEditPage(!showEditPage)}>Edit Feedback</HeaderBtn>
      )}
    </Container>
  );
};

export default Header;
