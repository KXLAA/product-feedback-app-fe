import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  margin-top: auto;
  color: black;
  padding: 16px 24px;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    font-weight: 700;
    &:hover {
      color: #d82259;
    }
  }
`;

function Footer() {
  return (
    <Container className="fade-in">
      <a target="_blank" href="https://kxlaa.com/" rel="noreferrer">
        Coded by KXLAA 🤙
      </a>
      <a target="_blank" href="https://github.com/KXLAA/product-feedback-app-fe" rel="noreferrer">
        View Code
      </a>
    </Container>
  );
}

export default Footer;
