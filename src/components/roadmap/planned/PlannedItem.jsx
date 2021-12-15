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
  border-top: solid #f49f85 6px;
`;

const PlannedItem = ({ planned, serverUser }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#F49F85" />
        <p>Planned</p>
      </div>
    </RoadMapTxt>
    <Content>
      <Link to={`/feedback-list/${planned?.id}`}>
        <h3>{planned?.title}</h3>
      </Link>

      <p>{planned?.description}</p>
    </Content>
    <FilterContainer>
      <Tags text={planned?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes feedback={planned} serverUser={serverUser} />
      <Comment>
        <CommentIcon />
        <p>{planned?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default PlannedItem;
