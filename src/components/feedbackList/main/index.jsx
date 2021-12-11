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

const Main = ({ feedback, filterFb, setFilterFb }) => {
  const [empty, setIsEmpty] = useState(false);

  console.log(filterFb);

  return (
    <Container>
      <Header feedback={feedback} setFilterFb={setFilterFb} filterFb={filterFb} />
      {feedback.length === 0 ? (
        <Empty />
      ) : (
        <>
          {filterFb?.map((feed) => (
            <Feedback feedback={feed} key={feed.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Main;
