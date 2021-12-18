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
  border-top: solid #f49f85 6px;
`;

const PlannedItem = ({ planned, serverUser, setNotify, setShowAlert }) => (
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
      <Upvotes
        feedback={planned}
        serverUser={serverUser}
        setNotify={setNotify}
        setShowAlert={setShowAlert}
      />
      <Comment>
        <CommentIcon />
        <p>{planned?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default PlannedItem;

PlannedItem.propTypes = {
  planned: PropTypes.shape({
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

PlannedItem.defaultProps = {
  serverUser: undefined,
};
