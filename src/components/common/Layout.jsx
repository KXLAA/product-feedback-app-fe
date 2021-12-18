/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from './MediaQueries';

const MainLayout = styled.main`
  max-width: 1160px;
  width: 100%;
  padding: 94px 25px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 56px 25px;
  }

  @media ${device.mobile} {
    padding: 0px 0;
    padding-bottom: 52px;
  }
`;

export default MainLayout;
