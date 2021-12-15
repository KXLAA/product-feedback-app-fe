/* eslint-disable react/prop-types */
import React from 'react';
import PlannedItem from './PlannedItem';
import { Header } from '../Common';

const Planned = ({ planned, serverUser }) => (
  <>
    <Header>
      <h3>Planned ({planned?.length})</h3>
      <p>Ideas prioritized for research</p>
    </Header>
    {planned?.map((plan) => (
      <PlannedItem key={plan.id} planned={plan} serverUser={serverUser} />
    ))}
  </>
);

export default Planned;
