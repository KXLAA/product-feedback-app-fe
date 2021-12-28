import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

import React from 'react';

const Container = styled.section`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <Container>
      <Loader type="Puff" color="#7c91f9" height={100} width={100} timeout={3000} />
    </Container>
  );
}
