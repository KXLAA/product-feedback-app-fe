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
  const [empty, setIsEmpty] = useState(true);

  return (
    <Container>
      <Header />
      {empty ? <Empty /> : <Feedback />}
    </Container>
  );
};

export default Main;
