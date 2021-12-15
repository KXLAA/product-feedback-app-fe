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
`;
const capitalize = (string) => (string && string.charAt(0).toUpperCase() + string.slice(1)) || '';

const Tags = ({ text }) => (
  <Button>{text?.length === 2 ? text?.toUpperCase() : capitalize(text)}</Button>
);

Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
