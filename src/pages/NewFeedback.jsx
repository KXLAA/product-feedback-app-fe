import React, { useState, useEffect } from 'react';
import NewForm from '../components/feedbackForm/NewForm';
import { Layout } from '../components/feedbackForm/Common';
import feedbackService from '../services/feedback';

export default function NewFeedback() {
  const [newFeedback, setNewFeedback] = useState({
    title: '',
    category: '',
    detail: '',
  });

  console.log(newFeedback);

  const createFeedback = async (event) => {
    event.preventDefault();

    const feedbackObject = {
      title: newFeedback.title,
      category: newFeedback.category,
      detail: newFeedback.detail,
    };

    await feedbackService.create(feedbackObject);
    setNewFeedback({ title: '', category: '', detail: '' });
  };

  const handleChange = ({ target }) => {
    setNewFeedback((prevInputData) => ({ ...prevInputData, [target.name]: target.value }));
    console.log(newFeedback);
  };

  return (
    <Layout>
      <NewForm
        handleChange={handleChange}
        newFeedback={newFeedback}
        createFeedback={createFeedback}
      />
    </Layout>
  );
}
