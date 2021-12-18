/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tags from '../../common/ui/Tags';
import Upvotes from '../../common/ui/Upvotes';
import {
  Container,
  BulletPoint,
  RoadMapTxt,
  Content,
  FilterContainer,
  Actions,
  Comment,
  CommentIcon,
} from '../Common';

const Card = styled(Container)`
  border-top: solid #62bcfa 6px;
`;

const LiveItem = ({ live, serverUser, setNotify, setShowAlert }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#62BCFA" />
        <p>Live</p>
      </div>
    </RoadMapTxt>
    <Content>
      <Link to={`/feedback-list/${live?.id}`}>
        <h3>{live?.title}</h3>
      </Link>
      <p>{live?.description}</p>
    </Content>
    <FilterContainer>
      <Tags text={live?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes
        feedback={live}
        serverUser={serverUser}
        setNotify={setNotify}
        setShowAlert={setShowAlert}
      />
      <Comment>
        <CommentIcon />
        <p>{live?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default LiveItem;

LiveItem.propTypes = {
  live: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    upvotes: PropTypes.number,
    status: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
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

LiveItem.defaultProps = {
  serverUser: undefined,
};
