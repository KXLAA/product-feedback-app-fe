/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
const Button = styled.div`
  display: inline-block;
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
      bg={filter === 'all' && '#4661e6'}
      color={filter === 'all' && '#ffffff'}
      onClick={() => setFilter('all')}
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
