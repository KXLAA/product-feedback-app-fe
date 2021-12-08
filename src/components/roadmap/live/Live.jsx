import React from 'react';
import { Header } from '../Common';
import LiveItem from './LiveItem';

const Live = () => (
  <>
    <Header>
      <h3>Live (1)</h3>
      <p>Released features</p>
    </Header>
    <LiveItem />
    <LiveItem />
  </>
);

export default Live;
