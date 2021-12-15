/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import FilterBtn from '../../common/ui/FilterBtn';
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

const LiveItem = ({ live }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#62BCFA" />
        <p>Live</p>
      </div>
    </RoadMapTxt>
    <Content>
      <h3>{live?.title}</h3>
      <p>{live?.description}</p>
    </Content>
    <FilterContainer>
      <FilterBtn text={live?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes feedback={live} />
      <Comment>
        <CommentIcon />
        <p>{live?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default LiveItem;
