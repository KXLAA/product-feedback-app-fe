/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 2s ease-in-out;
`;

const AlertCard = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  top: 20px;
  color: #d73737;
  background-color: #ffffff;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  border-radius: 10px;
`;

const Cancel = styled(MdCancel)`
  cursor: pointer;
`;

const Alerts = ({ notify, showAlert, setShowAlert }) => (
  <>
    {showAlert && (
      <Container className="alert-animation">
        <AlertCard>
          <p>{notify}</p>
          <Cancel onClick={() => setShowAlert(!showAlert)} />
        </AlertCard>
      </Container>
    )}
  </>
);

export default Alerts;
