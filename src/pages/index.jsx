import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import FeedbackDetail from './FeedbackDetail';
import Login from './Login';
import SignUp from './SignUp';
import Roadmap from './Roadmap';
import NewFeedback from './NewFeedback';
import EditFeedback from './EditFeedback';

export default function Pages() {
  const [authUser, setAuthUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackList />} />
        <Route path="/auth/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route path="/auth/sign-up" element={<SignUp setAuthUser={setAuthUser} />} />
        <Route path="/feedback-list/:id" element={<FeedbackDetail />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}
