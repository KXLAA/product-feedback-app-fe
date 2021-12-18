/* eslint-disable react/prop-types */
import React from 'react';
import PlannedItem from './PlannedItem';
import { Header } from '../Common';

const Planned = ({ planned, serverUser, setNotify, setShowAlert }) => (
  <>
    <Header>
      <h3>Planned ({planned?.length})</h3>
      <p>Ideas prioritized for research</p>
    </Header>
    {planned?.map((plan) => (
      <PlannedItem
        key={plan.id}
        planned={plan}
        serverUser={serverUser}
        setNotify={setNotify}
        setShowAlert={setShowAlert}
      />
    ))}
  </>
);

export default Planned;
