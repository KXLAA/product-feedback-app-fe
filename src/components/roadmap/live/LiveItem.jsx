/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
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
