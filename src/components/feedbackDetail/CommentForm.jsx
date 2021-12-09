import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../common/ui/Button';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px 32px;
`;

const Header = styled.h3`
  color: #3a4374;
  padding-bottom: 24px;
`;

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  background: #f7f8fd;
  border-radius: 5px;
  height: 80px;
  padding: 24px;
  font-size: 15px;
  line-height: 22px;
  color: #8c92b3;
  margin-bottom: 24px;
`;

const Cta = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
  }
`;

const CommentForm = () => {
  const [characterCount, setCharacterCount] = useState(250);

  return (
    <Container>
      <Header>Add Comment</Header>
      <Textarea
        placeholder="Type your comment here"
        maxLength="250"
        onChange={(e) => setCharacterCount(250 - e.target.value.length)}
      />
      <Cta>
        <p>{characterCount} Characters left</p>
        <Button>Post Comment</Button>
      </Cta>
    </Container>
  );
};

export default CommentForm;
