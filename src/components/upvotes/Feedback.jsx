/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Upvotes from '../common/ui/Upvotes';
import Tags from '../common/ui/Tags';
import feedbackService from '../../services/feedback';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 24px;

  h3 {
    color: #3a4374;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    padding-bottom: 16px;
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

const Feedback = ({ liked, serverUser }) => {
  const { data } = useQuery(['upvoted', liked], () => feedbackService.getOne(liked), {
    enabled: Boolean(liked),
  });

  console.log(data);

  return (
    <Container>
      <DetailsContainer>
        <Upvotes feedback={data} serverUser={serverUser} />
        <div>
          <h3>
            <Link to={`/feedback-list/${liked}`}>{data?.title}</Link>
          </h3>

          <p>{data?.description}</p>
          <Tags text={data?.category} />
        </div>
      </DetailsContainer>

      <CommentContainer>
        <Comment />
        <p>{data?.comments.length}</p>
      </CommentContainer>
    </Container>
  );
};

export default Feedback;
