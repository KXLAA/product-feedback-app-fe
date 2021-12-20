import styled from 'styled-components';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import Dropdown from '../../main/Dropdown';
import { ButtonOne } from '../../../common/ui/Button';
import Filter from '../Filter';
import RoadMap from '../RoadMap';
import Login from '../Login';
import LoggedIn from './LoggedIn';

const Container = styled.header`
  position: relative;
  display: flex;
  padding: 16px 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  align-items: center;
  z-index: 2;
`;

const HeaderTxt = styled.div`
  width: 100%;

  h2 {
    color: #ffffff;
  }

  p {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Menu = styled(BiMenu)`
  font-size: 44px;
  color: #ffffff;
  cursor: pointer;
`;

const Close = styled(IoCloseSharp)`
  font-size: 44px;
  color: #ffffff;
  cursor: pointer;
`;

const Cta = styled.div`
  background: #373f68;
  color: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 19px;
`;

const MobileMenu = styled.div`
  position: absolute;
  background: #f7f8fd;
  height: 100vh;
  right: 0;
  padding: 24px;
  top: 80px;
  width: 280px;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const Spacer = styled.div`
  height: 24px;
  width: 100;
`;

const MobileHeader = ({
  setSort,
  sort,
  toggleAddPage,
  feedback,
  filter,
  setFilter,
  authUser,
  handleLogOut,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Container>
        <HeaderTxt>
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </HeaderTxt>
        {openMenu ? (
          <Close className="fade-in" onClick={() => setOpenMenu(!openMenu)} />
        ) : (
          <Menu className="fade-in" onClick={() => setOpenMenu(!openMenu)} />
        )}
      </Container>
      {openMenu && <Background className="fade-in" onClick={() => setOpenMenu(false)} />}

      <Cta>
        <Dropdown feedback={feedback} setSort={setSort} sort={sort} />
        <ButtonOne onClick={toggleAddPage}>+ Add Feedback</ButtonOne>
      </Cta>

      {openMenu && (
        <MobileMenu className="slide-in">
          {authUser ? <LoggedIn authUser={authUser} handleLogOut={handleLogOut} /> : <Login />}
          <Spacer />
          <Filter setFilter={setFilter} filter={filter} />
          <Spacer />
          <RoadMap feedback={feedback} />
        </MobileMenu>
      )}
    </>
  );
};

export default MobileHeader;

MobileHeader.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  toggleAddPage: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  sort: PropTypes.shape({
    query: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

MobileHeader.defaultProps = {
  authUser: undefined,
};
