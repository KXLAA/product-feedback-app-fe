import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: #f2f4ff;
  border-radius: 10px;
  color: #4661e6;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

const FilterBtn = ({ text }) => <Button>{text}</Button>;

FilterBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FilterBtn;
