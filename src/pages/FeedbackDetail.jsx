/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MainLayout from '../components/common/Layout';
import Feedback from '../components/feedbackDetail/Feedback';
import Header from '../components/feedbackDetail/Header';
import Comments from '../components/feedbackDetail/Comments';
import CommentForm from '../components/feedbackDetail/CommentForm';
import feedbackService from '../services/feedback';
import EditFeedback from '../components/editFeedback/EditFeedback';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Layout = styled(MainLayout)`
  max-width: 760px;
  width: 100%;
  padding: 94px 15px;
  margin: 0 auto;
`;

export default function FeedbackDetail({ authUser }) {
  const params = useParams();
  const feedbackId = params.id;
  const { data, isLoading } = useQuery(
    ['feedback', feedbackId],
    () => feedbackService.getOne(feedbackId),
    {
      enabled: Boolean(feedbackId),
    }
  );
  const [showEditPage, setShowEditPage] = useState(false);

  return (
    <>
      {showEditPage ? (
        <EditFeedback
          showEditPage={showEditPage}
          setShowEditPage={setShowEditPage}
          feedback={data}
        />
      ) : (
        <Layout>
          <Container>
            <Header
              showEditPage={showEditPage}
              setShowEditPage={setShowEditPage}
              authUser={authUser}
              feedback={data}
            />
            <Feedback feedback={data} isLoading={isLoading} />
            <Comments comments={data?.comments} />
            <CommentForm feedback={data} />
          </Container>
        </Layout>
      )}
    </>
  );
}
