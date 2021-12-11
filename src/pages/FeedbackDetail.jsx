/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainLayout from '../components/common/Layout';
import Feedback from '../components/feedbackDetail/Feedback';
import Header from '../components/feedbackDetail/Header';
import Comments from '../components/feedbackDetail/Comments';
import CommentForm from '../components/feedbackDetail/CommentForm';
import feedbackService from '../services/feedback';
import userService from '../services/user';

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
  const [data, setData] = useState([]);

  const params = useParams();

  const getOne = async () => {
    const feedback = await feedbackService.getOne(params.id);
    setData(feedback);
  };

  useEffect(() => {
    getOne();
  }, []);

  console.log(data);
  return (
    <Layout>
      <Container>
        <Header />
        <Feedback feedback={data} />
        <Comments comments={data.comments} />
        <CommentForm />
      </Container>
    </Layout>
  );
}
