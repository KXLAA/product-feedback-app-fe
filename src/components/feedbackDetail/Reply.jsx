import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 32px;
  padding-left: 32px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      color: #3a4374;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #647196;
    }
  }
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
`;

const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

const Reply = () => (
  <Container>
    <Image src="https://avatars.dicebear.com/api/human/339.svg" alt="user" />
    <UserComment>
      <Header>
        <div>
          <h4>James Skinner</h4>
          <p>@hummingbird1</p>
        </div>
      </Header>
      <Content>
        Also, please allow styles to be applied based on system preferences. I would love to be able
        to browse Frontend Mentor in the evening after my device’s dark mode turns on without the
        bright background it currently has.
      </Content>
    </UserComment>
  </Container>
);

export default Reply;
