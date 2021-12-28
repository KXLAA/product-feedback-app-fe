/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { format } from 'fecha';
import Upvotes from '../../common/ui/Upvotes';
import Tags from '../../common/ui/Tags';
import device from '../../common/MediaQueries';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0) translateY(-0.1rem);
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Title = styled.h3`
  color: #3a4374;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 4px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #647196;
  padding-bottom: 16px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
  }
`;

const Comment = styled(FaComment)`
  cursor: pointer;
  color: #cdd2ee;
`;

const MobileCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  img {
    width: 40px;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }

  h4 {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3a4374;
  }

  p {
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #647196;
  }
`;

const Feedback = ({ feedback, serverUser, setNotify, setShowAlert }) => (
  <>
    <MediaQuery minWidth={630}>
      <Container className="item-animation">
        <DetailsContainer>
          <Upvotes
            feedback={feedback}
            serverUser={serverUser}
            setShowAlert={setShowAlert}
            setNotify={setNotify}
          />

          <Link to={`/feedback-list/${feedback.id}`}>
            <div>
              <User>
                <img src={feedback.user.avatar} alt={feedback.user.name} />

                <div>
                  <h4>{feedback.user.name}</h4>
                  <p>{format(new Date(feedback.createdAt), 'dddd MMM Do, YYYY')}</p>
                </div>
              </User>

              <Title>{feedback.title}</Title>

              <Description>{feedback.description}</Description>
              <Tags text={feedback?.category} />
            </div>
          </Link>
        </DetailsContainer>

        <CommentContainer>
          <Comment />
          <p>{feedback?.comments?.length}</p>
        </CommentContainer>
      </Container>
    </MediaQuery>

    <MediaQuery maxWidth={630}>
      <Container className="item-animation">
        <DetailsContainer>
          <div>
            <User>
              <img src={feedback.user.avatar} alt={feedback.user.name} />

              <div>
                <h4>{feedback?.user.name}</h4>
                <p>{format(new Date(feedback.createdAt), 'dddd MMM Do, YYYY')}</p>
              </div>
            </User>
            <Title>
              <Link to={`/feedback-list/${feedback.id}`}>{feedback.title}</Link>
            </Title>

            <Description>{feedback.description}</Description>
            <Tags text={feedback?.category} />
          </div>
        </DetailsContainer>

        <MobileCont>
          <Upvotes
            feedback={feedback}
            serverUser={serverUser}
            setShowAlert={setShowAlert}
            setNotify={setNotify}
          />
          <CommentContainer>
            <Comment />
            <p>{feedback.comments.length}</p>
          </CommentContainer>
        </MobileCont>
      </Container>
    </MediaQuery>
  </>
);

export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.shape({
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
      avatar: PropTypes.string,
    }),
  }).isRequired,
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
  setShowAlert: PropTypes.func.isRequired,
  setNotify: PropTypes.func.isRequired,
};

Feedback.defaultProps = {
  serverUser: undefined,
};
