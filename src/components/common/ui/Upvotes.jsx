/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GoChevronUp } from 'react-icons/go';
import { useMutation, useQueryClient } from 'react-query';
import feedbackService from '../../../services/feedback';

const Button = styled.div`
  width: 40px;
  height: 53px;
  display: inline;
  transition: all 0.3s ease;
  background: #f2f4fe;
  border-radius: 10px;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: #3a4374;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;

  &:hover {
    background: #cfd7ff;
    transform: translateX(0rem) translateY(-0.125rem);
  }

  &:active {
    background: #4661e6;
    color: #ffffff;
    transform: translateX(0rem) translateY(-0.125rem);
  }
`;

const Arrow = styled(GoChevronUp)`
  font-size: 16px;
  margin-bottom: 2px;
`;

const Upvotes = ({ feedback }) => {
  const queryClient = useQueryClient();
  const upVote = useMutation((vote) => feedbackService.update(vote), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedbackList');
      queryClient.invalidateQueries('feedback');
    },
  });

  const voteObj = {
    id: feedback?.id,
    upvotes: feedback?.upvotes + 1,
  };

  const handleUpvote = (event) => {
    event.preventDefault();
    upVote.mutate(voteObj);
  };

  return (
    <Button onClick={handleUpvote}>
      <Arrow />
      {feedback?.upvotes}
    </Button>
  );
};

export default Upvotes;

// Upvotes.propTypes = {
//   number: PropTypes.number.isRequired,
// };
