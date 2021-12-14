/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Upvotes from '../../common/ui/Upvotes';
import FilterBtn from '../../common/ui/FilterBtn';
import feedbackService from '../../../services/feedback';
import userService from '../../../services/user';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

const Feedback = ({ feedback, feedbackList, setFeedback }) => {
  const handleUpvote = async (event) => {
    event.preventDefault();

    const feedbackObject = {
      upvotes: feedback.upvotes + 1,
    };
    const updatedFeedback = await feedbackService.edit(feedback.id, feedbackObject);
    // setFeedback(feedbackList.concat(updatedFeedback));
    setFeedback((prevFeed) => [...prevFeed, updatedFeedback]);
  };

  return (
    <Container>
      <DetailsContainer>
        <Upvotes number={feedback.upvotes} onClick={handleUpvote} />
        <div>
          <h3>
            <Link to={`/feedback-list/${feedback.id}`}>{feedback.title}</Link>
          </h3>

          <p>{feedback.description}</p>
          <FilterBtn text={capitalize(feedback?.category)} />
        </div>
      </DetailsContainer>

      <CommentContainer>
        <Comment />
        <p>{feedback.comments.length}</p>
      </CommentContainer>
    </Container>
  );
};

export default Feedback;
