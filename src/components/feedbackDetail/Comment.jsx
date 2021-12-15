/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import userService from '../../services/user';
import { Button } from '../common/ui/Button';
import feedbackService from '../../services/feedback';
import Reply from './Reply';

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
    cursor: pointer;
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
  width: 100%;
`;

const Image = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

const Textarea = styled.textarea`
  width: 90%;
  resize: none;
  border: none;
  overflow: auto;
  outline: none;
  background: #f7f8fd;
  border-radius: 5px;
  height: 80px;
  padding: 24px;
  font-size: 15px;
  line-height: 22px;
  color: #8c92b3;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
`;

const Btn = styled(Button)`
  width: 23%;
  height: fit-content;
  text-align: center;
`;

const Comment = ({ comment, feedback }) => {
  const [showFrom, setShowForm] = useState(false);
  const [characterCount, setCharacterCount] = useState(250);
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(
    ['user', comment.user],
    () => userService.getUser(comment.user),
    {
      enabled: Boolean(comment.user),
    }
  );

  const oneReply = comment?.replies?.map((reply) => reply);

  const createReply = useMutation((reply) => feedbackService.createReply(reply), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedback');
    },
  });

  const handleOnChange = (event) => {
    const { value } = event.target;
    setContent(value);
    setCharacterCount(250 - value.length);
  };

  const replyObj = {
    id: comment?.id,
    content: content,
  };

  const handleCreateReply = (event) => {
    event.preventDefault();
    createReply.mutate(replyObj);
    setContent('');
  };

  return (
    <>
      <Container>
        <Image src={data?.avatar} alt="user" />
        <UserComment>
          <Header>
            <div>
              <h4>{data?.name}</h4>
              <p>@{data?.username}</p>
            </div>
            <a href onClick={() => setShowForm(!showFrom)}>
              Reply
            </a>
          </Header>
          <Content>{comment?.content}</Content>

          {showFrom && (
            <Form onSubmit={handleCreateReply}>
              <Textarea
                placeholder="Type your reply here"
                maxLength="250"
                value={content}
                onChange={handleOnChange}
              />
              <Btn>Post Reply</Btn>
            </Form>
          )}
        </UserComment>
      </Container>
      {oneReply?.map((reply) => (
        <Reply reply={reply} key={reply.id} comment={comment} />
      ))}
    </>
  );
};

export default Comment;
