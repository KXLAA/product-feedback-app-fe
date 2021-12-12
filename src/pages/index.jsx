/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import FeedbackDetail from './FeedbackDetail';
import Login from './Login';
import SignUp from './SignUp';
import Roadmap from './Roadmap';
import NewFeedback from './NewFeedback';
import EditFeedback from './EditFeedback';
import feedbackService from '../services/feedback';
import loginService from '../services/login';
import userService from '../services/user';

export default function Pages() {
  const [authUser, setAuthUser] = useState(null);
  const [notify, setNotify] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [newFeedback, setNewFeedback] = useState({
    title: '',
    category: '',
    detail: '',
  });
  const [logIn, setLogIn] = useState({
    username: '',
    password: '',
  });

  const [newUser, setNewUser] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    const getAll = async () => {
      const feedbackList = await feedbackService.getAll();
      setFeedback(feedbackList);
    };
    getAll();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setAuthUser(user);
      feedbackService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: logIn.username,
        password: logIn.password,
      });
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
      feedbackService.setToken(user.token);
      setAuthUser(user);
      setLogIn({ username: '', password: '' });
    } catch (exception) {
      setNotify('Wrong credentials');
    }
  };

  const handleLogInChange = ({ target }) => {
    setLogIn((prevLogin) => ({
      ...prevLogin,
      [target.name]: target.value,
    }));
  };

  const handleLogOut = () => {
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUserObj = {
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    };
    const createdUser = await userService.createUser(newUserObj);
    try {
      const user = await loginService.login({
        username: createdUser.username,
        password: createdUser.password,
      });
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
      feedbackService.setToken(user.token);
      setAuthUser(user);
    } catch (exception) {
      setNotify('Wrong credentials');
    }
    setNewUser({ username: '', name: '', password: '', email: '' });
  };

  const handleSignUpChange = ({ target }) => {
    setNewUser((prevUser) => ({ ...prevUser, [target.name]: target.value }));
  };

  const handleNewFeedback = async (event) => {
    event.preventDefault();

    const feedbackObject = {
      title: newFeedback.title,
      category: newFeedback.category,
      detail: newFeedback.detail,
    };

    const createdFeedback = await feedbackService.create(feedbackObject);
    setFeedback(feedback.concat(createdFeedback));
    setNewFeedback({ title: '', category: '', detail: '' });
  };

  const handleNewFeedbackChange = ({ target }) => {
    setNewFeedback((prevInputData) => ({ ...prevInputData, [target.name]: target.value }));
    console.log(newFeedback);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<FeedbackList feedback={feedback} handleLogOut={handleLogOut} />}
        />
        <Route
          path="/auth/login"
          element={
            <Login
              handleLogin={handleLogin}
              onChange={handleLogInChange}
              logIn={logIn}
              mm={logIn}
            />
          }
        />
        <Route
          path="/auth/sign-up"
          element={
            <SignUp
              handleSignUp={handleSignUp}
              onChange={handleSignUpChange}
              newUser={newUser}
              mm={logIn}
            />
          }
        />
        <Route path="/feedback-list/:id" element={<FeedbackDetail />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route
          path="/new-feedback"
          element={
            <NewFeedback
              handleNewFeedback={handleNewFeedback}
              onChange={handleNewFeedbackChange}
              newFeedback={newFeedback}
              mm={logIn}
            />
          }
        />
        <Route path="/edit-feedback" element={<EditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}
