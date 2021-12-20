import React from 'react';
import styled from 'styled-components';
import { BiChevronLeft } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonTwo } from '../common/ui/Button';

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

const Header = ({ showEditPage, setShowEditPage, authUser, feedback }) => (
  <Container>
    <Alert>
      <Link to="/">
        <Back>
          <BiChevronLeft />
          <p>Go Back</p>
        </Back>
      </Link>
    </Alert>
    {feedback?.user?.id === authUser?.id && (
      <ButtonTwo onClick={() => setShowEditPage(!showEditPage)}>Edit Feedback</ButtonTwo>
    )}
  </Container>
);

export default Header;

Header.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    upvotes: PropTypes.number,
    status: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  showEditPage: PropTypes.bool.isRequired,
  setShowEditPage: PropTypes.func.isRequired,
};
