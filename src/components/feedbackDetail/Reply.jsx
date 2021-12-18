import React from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
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

const Delete = styled(TiDelete)`
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  color: #d73737;
  cursor: pointer;
  align-self: flex-start;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    width: 90%;
  }
`;

const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

const Reply = ({ reply, authUser }) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(['reply', reply], () => feedbackService.getReply(reply), {});

  const deleteReply = useMutation((replyToDel) => feedbackService.deleteReply(replyToDel), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedback');
    },
  });

  const handleDeleteReply = () => {
    deleteReply.mutate(reply);
  };

  if (isLoading) {
    return 'Loading';
  }
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
        <Content>
          <p>{data?.content}</p>
          {data?.user?.id === authUser?.id && <Delete href onClick={handleDeleteReply} />}
        </Content>
      </UserComment>
    </Container>
  );
};

export default Reply;

Reply.propTypes = {
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  reply: PropTypes.arrayOf(PropTypes.object).isRequired,
};
