/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from '../common/MediaQueries';

export const HomePageGrid = styled.section`
  display: grid;
  grid-template-columns: 255px 1fr;
  grid-template-areas: 'side main';
  align-items: start;
  gap: 32px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const GridItemSide = styled.div`
  grid-area: side;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const GridItemMain = styled.div`
  grid-area: main;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
