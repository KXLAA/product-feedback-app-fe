import styled from 'styled-components';

export const PageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  gap: 32px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
