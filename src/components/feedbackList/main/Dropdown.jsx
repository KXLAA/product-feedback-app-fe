import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
import '@reach/listbox/styles.css';

import React from 'react';
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

const Dropdown = () => {
  const [value, setValue] = React.useState('Most Upvotes');

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