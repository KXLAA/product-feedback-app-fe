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

const Dropdown = () => {
  const [value, setValue] = React.useState('bojangles');
  console.log(value);

  return (
    <Container>
      <span id="my-label">Sort by :</span>
      <ListboxInput value={value} onChange={setValue}>
        <MenuList arrow />
        <ListboxPopover>
          <ListboxList>
            <ListboxOption value="bojangles"> Most Upvotes </ListboxOption>
            <ListboxOption value="churchs">Least Upvotes</ListboxOption>
            <ListboxOption value="kfc">Most Comments</ListboxOption>
            <ListboxOption value="popeyes">Least Comments</ListboxOption>
          </ListboxList>
        </ListboxPopover>
      </ListboxInput>
    </Container>
  );
};

export default Dropdown;
