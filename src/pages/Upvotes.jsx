/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Feedback from '../components/upvotes/Feedback';
import Header from '../components/upvotes/Header';
import MainLayout from '../components/common/Layout';

const Layout = styled(MainLayout)`
  max-width: 760px;
  width: 100%;
  padding: 94px 15px;
  margin: 0 auto;
`;

function Upvotes({ serverUser }) {
  console.log(serverUser);
  return (
    <Layout>
      <Header serverUser={serverUser} />
      {serverUser?.liked.map((like) => (
        <Feedback key={like} liked={like} serverUser={serverUser} />
      ))}
    </Layout>
  );
}

export default Upvotes;
