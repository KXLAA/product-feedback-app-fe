import styled from 'styled-components';

export const HomePageGrid = styled.section`
  display: grid;
  grid-template-columns: 255px 1fr;
  grid-template-areas: 'side main';
  align-items: start;
  gap: 32px;
`;

export const GridItemSide = styled.div`
  grid-area: side;
`;

export const GridItemMain = styled.div`
  grid-area: main;
`;
