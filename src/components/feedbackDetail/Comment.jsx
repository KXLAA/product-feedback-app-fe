/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { RiReplyFill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import userService from '../../services/user';
import { ButtonOne } from '../common/ui/Button';
import feedbackService from '../../services/feedback';
import Reply from './Reply';
import device from '../common/MediaQueries';

const Container = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 32px;
  border-bottom: solid rgba(140, 146, 179, 0.25) 1px;

  @media ${device.mobile} {
    gap: 18px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserContainer = styled.div`
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

    @media ${device.mobile} {
      font-size: 13px;
      line-height: 19px;
    }
  }
`;

const CtaContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${device.mobile} {
    gap: 18px;
  }
`;

const Delete = styled(TiDelete)`
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  color: #d73737;
  cursor: pointer;
`;

const ReplyBtn = styled(RiReplyFill)`
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  color: #4661e6;
  cursor: pointer;
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 19px;
  }
`;

const UserComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media ${device.mobile} {
    gap: 10px;
  }
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

  @media ${device.mobile} {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

const Btn = styled(ButtonOne)`
  width: 23%;
  height: fit-content;
  text-align: center;

  @media ${device.mobile} {
    width: 50%;
    align-self: flex-end;
  }
`;

const Comment = ({ comment, authUser }) => {
  const [showFrom, setShowForm] = useState(false);
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

  const deleteComment = useMutation((commentToDel) => feedbackService.deleteComment(commentToDel), {
    onSuccess: () => {
      queryClient.invalidateQueries('feedback');
    },
  });

  const handleOnChange = (event) => {
    const { value } = event.target;
    setContent(value);
  };

  const replyObj = {
    id: comment?.id,
    content: content,
  };

  const handleCreateReply = (event) => {
    event.preventDefault();
    createReply.mutate(replyObj);
    setShowForm(!showFrom);
    setContent('');
  };

  const handleDeleteComment = () => {
    deleteComment.mutate(comment?.id);
  };

  if (isLoading) {
    return 'Loading';
  }

  return (
    <>
      <Container className="fade-in">
        <Image src={data?.avatar} alt="user" />
        <UserComment>
          <Header>
            <UserContainer>
              <h4>{data?.name}</h4>
              <p>@{data?.username}</p>
            </UserContainer>

            <CtaContainer>
              {authUser && <ReplyBtn href onClick={() => setShowForm(!showFrom)} />}

              {comment?.user === authUser?.id && <Delete href onClick={handleDeleteComment} />}
            </CtaContainer>
          </Header>
          <Content>{comment?.content}</Content>

          {showFrom && (
            <Form onSubmit={handleCreateReply} className="fade-in">
              <Textarea
                placeholder="Type your reply here"
                maxLength="250"
                value={content}
                onChange={handleOnChange}
                disabled={!authUser}
              />
              <Btn>Post Reply</Btn>
            </Form>
          )}
        </UserComment>
      </Container>
      {oneReply?.map((reply) => (
        <Reply reply={reply} key={reply.id} authUser={authUser} />
      ))}
    </>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    feedback: PropTypes.string,
    content: PropTypes.string,
    replies: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  authUser: PropTypes.shape({
    token: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};
