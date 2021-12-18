import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  border-top: solid #ad1fea 6px;
`;
const InProgressItem = ({ progress, serverUser, setNotify, setShowAlert }) => (
  <Card>
    <RoadMapTxt>
      <div>
        <BulletPoint color="#AD1FEA" />
        <p>In Progress</p>
      </div>
    </RoadMapTxt>
    <Content>
      <Link to={`/feedback-list/${progress?.id}`}>
        <h3>{progress?.title}</h3>
      </Link>
      <p>{progress?.description}</p>
    </Content>
    <FilterContainer>
      <Tags text={progress?.category} />
    </FilterContainer>

    <Actions>
      <Upvotes
        feedback={progress}
        serverUser={serverUser}
        setNotify={setNotify}
        setShowAlert={setShowAlert}
      />
      <Comment>
        <CommentIcon />
        <p>{progress?.comments?.length}</p>
      </Comment>
    </Actions>
  </Card>
);

export default InProgressItem;

InProgressItem.propTypes = {
  progress: PropTypes.shape({
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

InProgressItem.defaultProps = {
  serverUser: undefined,
};
