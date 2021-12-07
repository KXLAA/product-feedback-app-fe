import React from 'react';
import styled from 'styled-components';
import FilterBtn from '../../common/ui/FilterBtn';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Filter = () => (
  <Container>
    <FilterBtn text="All" />
    <FilterBtn text="UI" />
    <FilterBtn text="UI" />
    <FilterBtn text="Enhancement" />
    <FilterBtn text="Bug" />
    <FilterBtn text="Feature" />
  </Container>
);

export default Filter;
