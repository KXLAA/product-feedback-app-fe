/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import NewForm from '../components/feedbackForm/NewForm';
import { Layout } from '../components/feedbackForm/Common';
import feedbackService from '../services/feedback';

export default function NewFeedback({ handleNewFeedback, onChange, newFeedback }) {
  return (
    <Layout>
      <NewForm
        handleNewFeedback={handleNewFeedback}
        onChange={onChange}
        newFeedback={newFeedback}
      />
    </Layout>
  );
}
