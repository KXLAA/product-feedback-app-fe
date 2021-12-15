/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
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
  border-top: solid #f49f85 6px;
`;

const PlannedItem = ({ planned }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#F49F85" />
        <p>Planned</p>
      </div>
    </RoadMapTxt>
    <Content>
      <h3>{planned?.title}</h3>
      <p>{planned?.description}</p>
    </Content>
    <FilterContainer>
      <FilterBtn text={planned?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes feedback={planned} />
      <Comment>
        <CommentIcon />
        <p>{planned?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default PlannedItem;
