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
  border-top: solid #ad1fea 6px;
`;
const InProgressItem = ({ progress }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#AD1FEA" />
        <p>In Progress</p>
      </div>
    </RoadMapTxt>
    <Content>
      <h3>{progress?.title}</h3>
      <p>{progress?.description}</p>
    </Content>
    <FilterContainer>
      <FilterBtn text={progress?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes feedback={progress} />
      <Comment>
        <CommentIcon />
        <p>{progress?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default InProgressItem;
