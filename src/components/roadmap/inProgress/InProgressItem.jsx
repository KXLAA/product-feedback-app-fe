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
const InProgressItem = () => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#AD1FEA" />
        <p>Planned</p>
      </div>
    </RoadMapTxt>
    <Content>
      <h3>More comprehensive reports</h3>
      <p>It would be great to see a more detailed breakdown of solutions.</p>
    </Content>
    <FilterContainer>
      <FilterBtn text="Feature" />
    </FilterContainer>

    <Actions>
      <Upvotes number="80" />
      <Comment>
        <CommentIcon />
        <p>2</p>
      </Comment>
    </Actions>
  </Card>
);

export default InProgressItem;