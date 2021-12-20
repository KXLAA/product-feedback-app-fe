/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonOne } from '../../common/ui/Button';
import device from '../../common/MediaQueries';

const Container = styled.div`
  height: 650px;
  max-width: 825px;
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
  padding-bottom: 48px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #3a4374;
    padding-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    font-weight: 400;
    color: #647196;
    max-width: 410px;
    width: 100%;
  }
`;

const Empty = ({ toggleAddPage }) => (
  <Container>
    <EmptyContainer>
      <img src="illustration-empty.svg" alt="empty" />
      <EmptyTxt>
        <h1>There is no feedback yet.</h1>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas
          to improve our app.
        </p>
      </EmptyTxt>
      <ButtonOne onClick={toggleAddPage}>+ Add Feedback</ButtonOne>
    </EmptyContainer>
  </Container>
);

export default Empty;

Empty.propTypes = {
  toggleAddPage: PropTypes.func.isRequired,
};
