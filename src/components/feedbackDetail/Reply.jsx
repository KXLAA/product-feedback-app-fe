/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import feedbackService from '../../services/feedback';

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

const Reply = ({ reply, comment }) => {
  console.log(comment);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['reply', reply], () => feedbackService.getReply(reply), {
    enabled: !!reply,
  });

  return (
    <Container>
      <Image src={data?.user?.avatar} alt={data?.user?.name} />
      <UserComment>
        <Header>
          <div>
            <h4>{data?.user?.name}</h4>
            <p>{data?.user?.username}</p>
          </div>
        </Header>
        <Content>{data?.content}</Content>
      </UserComment>
    </Container>
  );
};

export default Reply;
