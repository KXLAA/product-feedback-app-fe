import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

Upvotes.propTypes = {
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    liked: PropTypes.arrayOf(PropTypes.string),
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Upvotes.defaultProps = {
  serverUser: undefined,
};
