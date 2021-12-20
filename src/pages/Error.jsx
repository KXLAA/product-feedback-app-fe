/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device from '../components/common/MediaQueries';
import { ButtonOne } from '../components/common/ui/Button';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyContainer = styled.div`
  text-align: center;

  @media ${device.tablet} {
    padding: 24px;
  }

  img {
    width: 150px;
    margin: 0 auto;
    padding-bottom: 48px;
  }
`;

const EmptyTxt = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
    max-width: 300px;
    width: 100%;
  }
`;

function Error({ error }) {
  console.log(error);
  return (
    <Container>
      <EmptyContainer>
        <img src="illustration-empty.svg" alt="empty" />
        <EmptyTxt>
          <h1>Oooops, Something Went Wrong, Maybe try again ?</h1>
        </EmptyTxt>
        <Link to="/">
          <ButtonOne>Back Home</ButtonOne>
        </Link>
      </EmptyContainer>
    </Container>
  );
}

export default Error;

Error.propTypes = {
  error: PropTypes.shape({
    Error: PropTypes.string,
  }).isRequired,
};
