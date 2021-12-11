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

const MenuList = styled(ListboxButton)`
  width: 456px;
  padding: 13px 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #3a4374;
  background: #f7f8fd;
  border-radius: 5px;
  border: none;
`;

const PopOver = styled(ListboxPopover)`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 16px;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border: none;

  > [data-reach-listbox-list] {
    width: 100%;
    outline: none;
    border: none;

    > [data-reach-listbox-option] {
      border-bottom: 1px rgba(58, 67, 116, 0.15) solid;
      padding: 8px;
      padding-left: 24px;
    }

    > [data-reach-listbox-option][data-current-selected] {
      color: #ad1fea;
      font-weight: 400;
    }

    > [data-reach-listbox-option][data-current-nav] {
      color: #ad1fea;
      background: #ffffff;
    }
  }
`;

const UpdateDropDown = () => {
  const [value, setValue] = React.useState('Suggestion');

  return (
    <>
      <ListboxInput value={value} onChange={setValue}>
        <MenuList arrow />
        <PopOver>
          <ListboxList>
            <ListboxOption value="Suggestion"> Suggestion </ListboxOption>
            <ListboxOption value="Planned">Planned</ListboxOption>
            <ListboxOption value="In-Progress">In-Progress</ListboxOption>
            <ListboxOption value="Live">Live</ListboxOption>
          </ListboxList>
        </PopOver>
      </ListboxInput>
    </>
  );
};

export default UpdateDropDown;