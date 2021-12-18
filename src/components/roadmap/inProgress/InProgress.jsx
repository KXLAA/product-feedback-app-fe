/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InProgressItem from './InProgressItem';
import { Header } from '../Common';

function InProgress({ inProgress, serverUser, setNotify, setShowAlert }) {
  return (
    <>
      <Header>
        <h3>In-Progress ({inProgress?.length})</h3>
        <p>Currently being developed</p>
      </Header>
      {inProgress?.map((progress) => (
        <InProgressItem
          key={progress.id}
          progress={progress}
          serverUser={serverUser}
          setNotify={setNotify}
          setShowAlert={setShowAlert}
        />
      ))}
    </>
  );
}

export default InProgress;

InProgress.propTypes = {
  inProgress: PropTypes.arrayOf(PropTypes.object).isRequired,
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

InProgress.defaultProps = {
  serverUser: undefined,
};
