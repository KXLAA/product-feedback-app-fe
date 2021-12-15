/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from '../Common';
import LiveItem from './LiveItem';

const Live = ({ live, serverUser }) => (
  <>
    <Header>
      <h3>Live ({live?.length})</h3>
      <p>Released features</p>
    </Header>
    {live?.map((liveItem) => (
      <LiveItem key={liveItem.id} live={liveItem} serverUser={serverUser} />
    ))}
  </>
);

export default Live;
