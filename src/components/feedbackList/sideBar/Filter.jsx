/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../common/MediaQueries';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex: 1;
    max-width: 250px;
  }
`;
const Button = styled.div`
  display: inline-block;
  height: fit-content;
  padding: 6px 16px;
  color: ${(props) => props.color || '#4661e6'};
  background: ${(props) => props.bg || '#f2f4fe'};
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    background: #cfd7ff;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active {
    color: #ffffff;
    background: #4661e6;
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

const Filter = ({ setFilter, filter }) => (
  <Container>
    <Button
      bg={filter === '' && '#4661e6'}
      color={filter === '' && '#ffffff'}
      onClick={() => setFilter('')}
    >
      All
    </Button>
    <Button
      bg={filter === 'ui' && '#4661e6'}
      color={filter === 'ui' && '#ffffff'}
      onClick={() => setFilter('ui')}
    >
      UI
    </Button>
    <Button
      bg={filter === 'ux' && '#4661e6'}
      color={filter === 'ux' && '#ffffff'}
      onClick={() => setFilter('ux')}
    >
      UX
    </Button>
    <Button
      bg={filter === 'enhancement' && '#4661e6'}
      color={filter === 'enhancement' && '#ffffff'}
      onClick={() => setFilter('enhancement')}
    >
      Enhancement
    </Button>
    <Button
      bg={filter === 'bug' && '#4661e6'}
      color={filter === 'bug' && '#ffffff'}
      onClick={() => setFilter('bug')}
    >
      Bug
    </Button>
    <Button
      bg={filter === 'feature' && '#4661e6'}
      color={filter === 'feature' && '#ffffff'}
      onClick={() => setFilter('feature')}
    >
      Feature
    </Button>
  </Container>
);

export default Filter;

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
