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

const Main = () => {
  const [empty, setIsEmpty] = useState(false);

  return (
    <Container>
      <Header />
      {empty ? (
        <Empty />
      ) : (
        <>
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
          <Feedback />
        </>
      )}
    </Container>
  );
};

export default Main;
