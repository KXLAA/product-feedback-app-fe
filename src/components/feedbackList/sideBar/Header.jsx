import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  height: 137px;
  display: flex;
  position: relative;
  align-items: flex-end;
`;

const HeaderImg = styled.img`
  position: absolute;
  border-radius: 10px;
  z-index: -1;
`;

const HeaderTxt = styled.div`
  width: 100%;
  padding: 24px;

  h2 {
    color: #ffffff;
  }

  p {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

const Header = () => (
  <Container>
    <HeaderImg src="/background-header.png" alt="header-background" />
    <HeaderTxt>
      <h2>Frontend Mentor</h2>
      <p>Feedback Board</p>
    </HeaderTxt>
  </Container>
);

export default Header;
