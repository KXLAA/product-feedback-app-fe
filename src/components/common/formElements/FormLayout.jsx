/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from '../MediaQueries';

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 540px;
  width: 100%;
  margin: 24px;
  position: relative;
`;
