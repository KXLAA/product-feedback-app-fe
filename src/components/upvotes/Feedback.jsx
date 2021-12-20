/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import MediaQuery from 'react-responsive';
import Upvotes from '../common/ui/Upvotes';
import Tags from '../common/ui/Tags';
import feedbackService from '../../services/feedback';
import device from '../common/MediaQueries';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

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

const Feedback = ({ liked, serverUser }) => {
  const { data } = useQuery(['upvoted', liked], () => feedbackService.getOne(liked), {
    enabled: Boolean(liked),
  });

  return (
    <>
      <MediaQuery minWidth={630}>
        <Container>
          <DetailsContainer>
            <Upvotes feedback={data} serverUser={serverUser} />
            <div>
              <Title>
                <Link to={`/feedback-list/${liked}`}>{data?.title}</Link>
              </Title>

              <Description>{data?.description}</Description>
              <Tags text={data?.category} />
            </div>
          </DetailsContainer>

          <CommentContainer>
            <Comment />
            <p>{data?.comments.length}</p>
          </CommentContainer>
        </Container>
      </MediaQuery>

      <MediaQuery maxWidth={630}>
        <Container className="item-animation">
          <DetailsContainer>
            <div>
              <Title>
                <Link to={`/feedback-list/${liked}`}>{data?.title}</Link>
              </Title>

              <Description>{data?.description}</Description>
              <Tags text={data?.category} />
            </div>
          </DetailsContainer>

          <MobileCont>
            <Upvotes feedback={data} serverUser={serverUser} />
            <CommentContainer>
              <Comment />
              <p>{data?.comments.length}</p>
            </CommentContainer>
          </MobileCont>
        </Container>
      </MediaQuery>
    </>
  );
};

export default Feedback;

Feedback.propTypes = {
  liked: PropTypes.arrayOf(PropTypes.object).isRequired,
  serverUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Feedback.defaultProps = {
  serverUser: undefined,
};
