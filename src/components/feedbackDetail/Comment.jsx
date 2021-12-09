import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: solid rgba(140, 146, 179, 0.25) 1px;
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

  a {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661e6;
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

const Comment = () => (
  <Container>
    <Image src="https://avatars.dicebear.com/api/human/77.svg" alt="user" />
    <UserComment>
      <Header>
        <div>
          <h4>Elijah Moss</h4>
          <p>@hexagon.bestagon</p>
        </div>
        <a href="/">Reply</a>
      </Header>
      <Content>
        Also, please allow styles to be applied based on system preferences. I would love to be able
        to browse Frontend Mentor in the evening after my device’s dark mode turns on without the
        bright background it currently has.
      </Content>
    </UserComment>
  </Container>
);

export default Comment;
