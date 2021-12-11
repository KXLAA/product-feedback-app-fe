/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Feedback from './Feedback';
import Empty from './Empty';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Main = ({ feedback }) => {
  const [empty, setIsEmpty] = useState(false);

  console.log(feedback);

  return (
    <Container>
      <Header />
      {empty ? (
        <Empty />
      ) : (
        <>
          {feedback.map((feed) => (
            <Feedback feedback={feed} key={feed.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Main;
