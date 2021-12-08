import React from 'react';
import PlannedItem from './PlannedItem';
import { Header } from '../Common';

const Planned = () => (
  <>
    <Header>
      <h3>Planned (2)</h3>
      <p>Ideas prioritized for research</p>
    </Header>
    <PlannedItem />
    <PlannedItem />
    <PlannedItem />
  </>
);

export default Planned;
