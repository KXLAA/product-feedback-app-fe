/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Common';
import LiveItem from './LiveItem';

const Live = ({ live, serverUser, setNotify, setShowAlert }) => (
  <>
    <Header>
      <h3>Live ({live?.length})</h3>
      <p>Released features</p>
    </Header>
    {live?.map((liveItem) => (
      <LiveItem
        key={liveItem.id}
        live={liveItem}
        serverUser={serverUser}
        setNotify={setNotify}
        setShowAlert={setShowAlert}
      />
    ))}
  </>
);

export default Live;

Live.propTypes = {
  live: PropTypes.arrayOf(PropTypes.object).isRequired,
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  setNotify: PropTypes.func.isRequired,
  setShowAlert: PropTypes.func.isRequired,
};

Live.defaultProps = {
  serverUser: undefined,
};
