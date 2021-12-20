/* eslint-disable import/no-named-as-default */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MainLayout from '../components/common/Layout';
import Feedback from '../components/feedbackList/main/Feedback';
import Header from '../components/feedbackDetail/Header';
import Comments from '../components/feedbackDetail/Comments';
import CommentForm from '../components/feedbackDetail/CommentForm';
import feedbackService from '../services/feedback';
import EditFeedback from '../components/editFeedback/EditFeedback';
import Loading from '../components/common/Loading';
import device from '../components/common/MediaQueries';

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

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export default function FeedbackDetail({ authUser, serverUser, setShowAlert, setNotify }) {
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

  if (isLoading) {
    return <Loading />;
  }

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
          <Container className="form-animation">
            <Header
              showEditPage={showEditPage}
              setShowEditPage={setShowEditPage}
              authUser={authUser}
              feedback={data}
            />
            <Feedback
              feedback={data}
              serverUser={serverUser}
              setShowAlert={setShowAlert}
              setNotify={setNotify}
            />
            <Comments comments={data?.comments} feedback={data} authUser={authUser} />
            <CommentForm feedback={data} authUser={authUser} />
          </Container>
        </Layout>
      )}
    </>
  );
}
