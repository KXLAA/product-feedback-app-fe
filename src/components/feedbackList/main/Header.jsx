/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { ButtonOne } from '../../common/ui/Button';
import device from '../../common/MediaQueries';

const Container = styled.div`
  background: #373f68;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SuggestionCount = styled.div`
  display: flex;
  color: #ffffff;
  gap: 16px;

  h3 {
    padding-right: 16px;
    @media ${device.tablet} {
      display: none;
    }
  }
`;

const Icon = styled(HiOutlineLightBulb)`
  font-size: 24px;
  @media ${device.tablet} {
    display: none;
  }
`;

const Header = ({ feedback, toggleAddPage, setSort, sort }) => (
  <Container>
    <SuggestionCount>
      <Icon />
      <h3>{feedback?.length} Suggestions</h3>
      <Dropdown feedback={feedback} setSort={setSort} sort={sort} />
    </SuggestionCount>

    <ButtonOne onClick={toggleAddPage}>+ Add Feedback</ButtonOne>
  </Container>
);

export default Header;

Header.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  toggleAddPage: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    query: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

Header.defaultProps = {
  authUser: undefined,
};
