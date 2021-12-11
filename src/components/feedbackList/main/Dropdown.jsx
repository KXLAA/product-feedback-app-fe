/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
import '@reach/listbox/styles.css';

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const Dropdown = ({ setFilterFb, feedback, filterFb }) => {
  const [value, setValue] = useState('Most Upvotes');
  console.log(value);

  if (value === 'Most Upvotes') {
    const sort = feedback.sort((a, b) => a.upvotes - b.upvotes);
    setFilterFb(sort.reverse());
  }
  if (value === 'Least Upvotes') {
    const sort = feedback.sort((a, b) => a.upvotes - b.upvotes);
    setFilterFb(sort);
  }
  if (value === 'Most Comments') {
    const sort = feedback.sort((a, b) => a.comments.length - b.comments.length);
    setFilterFb(sort);
  }
  if (value === 'Least Comments') {
    const sort = feedback.sort((a, b) => a.comments.length - b.comments.length);
    setFilterFb(sort.reverse());
  }

  return (
    <Container>
      <span id="my-label">Sort by :</span>
      <ListboxInput value={value} onChange={setValue}>
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
