import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import Upvotes from '../../common/ui/Upvotes';
import FilterBtn from '../../common/ui/FilterBtn';

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

const Feedback = () => (
  <Container>
    <DetailsContainer>
      <Upvotes number="80" />
      <div>
        <h3>Add tags for solutions</h3>
        <p>Easier to search for solutions based on a specific stack.</p>
        <FilterBtn text="Enhancement" />
      </div>
    </DetailsContainer>

    <CommentContainer>
      <Comment />
      <p>2</p>
    </CommentContainer>
  </Container>
);

export default Feedback;
