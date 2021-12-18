/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
import PropTypes from 'prop-types';
import '@reach/listbox/styles.css';

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MenuList = styled(ListboxButton)`
  border: none;
`;

const PopOver = styled(ListboxPopover)`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 32px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border: none;

  > [data-reach-listbox-list] {
    width: 255px;
    outline: none;
    border: none;

    > [data-reach-listbox-option] {
      border-bottom: 1px rgba(58, 67, 116, 0.15) solid;
      padding: 8px;
    }
  }
`;

const Dropdown = ({ setSort, sort }) => {
  const [value, setValue] = useState(sort.value);

  const handleChange = (value) => {
    setValue(value);
    if (value === 'Least Upvotes') {
      setSort({ query: '&sort=leastUpvotes', value: 'Least Upvotes' });
    }
    if (value === 'Most Upvotes') {
      setSort({ query: '&sort=mostUpvotes', value: 'Most Upvotes' });
    }
    if (value === 'Most Comments') {
      setSort({ query: '&sort=mostComments', value: 'Most Comments' });
    }
    if (value === 'Least Comments') {
      setSort({ query: '&sort=leastComments', value: 'Least Comments' });
    }
  };

  return (
    <Container>
      <span id="my-label">Sort by :</span>
      <ListboxInput value={value} onChange={handleChange}>
        <MenuList arrow />
        <PopOver>
          <ListboxList>
            <ListboxOption value="Most Upvotes"> Most Upvotes </ListboxOption>
            <ListboxOption value="Least Upvotes">Least Upvotes</ListboxOption>
            <ListboxOption value="Most Comments">Most Comments</ListboxOption>
            <ListboxOption value="Least Comments">Least Comments</ListboxOption>
          </ListboxList>
        </PopOver>
      </ListboxInput>
    </Container>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  sort: PropTypes.shape({
    query: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  setSort: PropTypes.func.isRequired,
};
