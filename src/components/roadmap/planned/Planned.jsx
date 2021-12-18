import React from 'react';
import PropTypes from 'prop-types';
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

Planned.propTypes = {
  planned: PropTypes.arrayOf(PropTypes.object).isRequired,
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

Planned.defaultProps = {
  serverUser: undefined,
};
