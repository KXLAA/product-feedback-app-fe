/* eslint-disable react/prop-types */
import React from 'react';
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
