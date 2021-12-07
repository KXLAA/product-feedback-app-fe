import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import Feedback from './Feedback';
import MainLayout from '../components/common/Layout';

export default function Pages() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackList />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
