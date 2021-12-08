import React from 'react';
import InProgressItem from './InProgressItem';
import { Header } from '../Common';

function InProgress() {
  return (
    <>
      <Header>
        <h3>In-Progress (3)</h3>
        <p>Currently being developed</p>
      </Header>
      <InProgressItem />
      <InProgressItem />
    </>
  );
}

export default InProgress;
