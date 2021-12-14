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
import EditFeedback from './EditFeedback';

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

export default function FeedbackDetail({ setFeedback, feedback }) {
  const [data, setData] = useState({});
  const [showEditPage, setShowEditPage] = useState(false);

  const params = useParams();

  const getOne = async () => {
    const feedbackDetail = await feedbackService.getOne(params.id);
    setData(feedbackDetail);
  };

  useEffect(() => {
    getOne();
  }, []);

  console.log(data);

  const handleEditFeedback = async (event) => {
    event.preventDefault();

    const feedbackObject = {
      title: data.title,
      category: data.category,
      description: data.description,
      status: data.status,
    };

    const createdFeedback = await feedbackService.edit(params.id, feedbackObject);
    setFeedback(feedback.concat(createdFeedback));
  };

  const handleNewFeedbackChange = ({ target }) => {
    setData((prevInputData) => ({ ...prevInputData, [target.name]: target.value }));
  };

  return (
    <>
      {showEditPage ? (
        <EditFeedback
          showEditPage={showEditPage}
          setShowEditPage={setShowEditPage}
          data={data}
          handleChange={handleNewFeedbackChange}
          setData={setData}
          handleEditFeedback={handleEditFeedback}
        />
      ) : (
        <Layout>
          <Container>
            <Header showEditPage={showEditPage} setShowEditPage={setShowEditPage} />
            <Feedback feedback={data} />
            <Comments comments={data.comments} />
            <CommentForm />
          </Container>
        </Layout>
      )}
    </>
  );
}
