/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { React } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Header from './Header';
import MobileHeader from './mobile/MobileHeader';
import Filter from './Filter';
import RoadMap from './RoadMap';
import Login from './Login';
import LoggedIn from './LoggedIn';
import device from '../../common/MediaQueries';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
`;

const SideBar = ({
  handleLogOut,
  authUser,
  feedback,
  setFilter,
  filter,
  setSort,
  sort,
  toggleAddPage,
}) => {
  const isDesktop = useMediaQuery({ minWidth: 940 });

  return (
    <>
      <MediaQuery minWidth={630}>
        <Container className="fade-in">
          <MediaQuery minWidth={940}>
            {authUser ? <LoggedIn authUser={authUser} handleLogOut={handleLogOut} /> : <Login />}
          </MediaQuery>

          <User>
            <MediaQuery maxWidth={940}>
              {authUser ? <LoggedIn authUser={authUser} handleLogOut={handleLogOut} /> : <Login />}
            </MediaQuery>
            <Header />
          </User>

          <Filter setFilter={setFilter} filter={filter} />
          <RoadMap feedback={feedback} />
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={630}>
        <MobileHeader
          setSort={setSort}
          sort={sort}
          toggleAddPage={toggleAddPage}
          feedback={feedback}
          setFilter={setFilter}
          filter={filter}
          authUser={authUser}
          handleLogOut={handleLogOut}
        />
      </MediaQuery>
    </>
  );
};

export default SideBar;
