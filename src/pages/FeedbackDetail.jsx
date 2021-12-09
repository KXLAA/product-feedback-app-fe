import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/common/Layout';
import Feedback from '../components/feedbackList/main/Feedback';
import Header from '../components/feedbackDetail/Header';
import Comments from '../components/feedbackDetail/Comments';
import CommentForm from '../components/feedbackDetail/CommentForm';

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

export default function FeedbackDetail() {
  return (
    <Layout>
      <Container>
        <Header />
        <Feedback />
        <Comments />
        <CommentForm />
      </Container>
    </Layout>
  );
}
