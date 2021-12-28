/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import FeedbackList from './FeedbackList';
import FeedbackDetail from './FeedbackDetail';
import Login from './Login';
import SignUp from './SignUp';
import Roadmap from './Roadmap';
import feedbackService from '../services/feedback';
import loginService from '../services/login';
import userService from '../services/user';
import Upvotes from './Upvotes';
import Alerts from '../components/common/Alerts';
import NotFound from './NotFound';
import Error from './Error';

const randomNumber = Math.floor(Math.random() * 2000 + 1);

export default function Pages() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [notify, setNotify] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const [logIn, setLogIn] = useState({
    username: 'velvetround',
    password: 'velvetround',
  });

  const [newUser, setNewUser] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
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
      navigate('/');
      setLogIn({ username: '', password: '' });
    } catch (error) {
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
      avatar: `https://avatars.dicebear.com/api/human/${randomNumber}.svg`,
    };

    try {
      const createdUser = await userService.createUser(newUserObj);
      setLogIn({ username: createdUser.username, password: newUserObj.password });
      navigate('/auth/login');
      setNewUser({ username: '', name: '', password: '', email: '' });
    } catch (error) {
      setNotify('oops username already exists');
    }
  };

  const handleSignUpChange = ({ target }) => {
    setNewUser((prevUser) => ({ ...prevUser, [target.name]: target.value }));
  };

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState({ query: '&sort=mostUpvotes', value: 'Most Upvotes' });

  const { data, isLoading, isError } = useQuery(['feedbackList', filter, sort.query], () =>
    feedbackService.getFeedback(filter, sort.query)
  );

  const getUser = useQuery(
    ['feedbackList', 'user', authUser?.id],
    () => userService.getUser(authUser?.id),
    {
      enabled: !!authUser,
    }
  );

  const [showAddPage, setShowAddPage] = useState(false);

  const toggleAddPage = () => {
    setShowAddPage(!showAddPage);
  };

  useEffect(() => {
    const timer = setTimeout(() => setNotify(null), 5000);
    return () => clearTimeout(timer);
  }, [notify]);

  if (isError) {
    return <Error />;
  }
  return (
    <>
      {notify && <Alerts notify={notify} showAlert={showAlert} setShowAlert={setShowAlert} />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <FeedbackList
              isLoading={isLoading}
              feedback={data}
              setFilter={setFilter}
              filter={filter}
              setSort={setSort}
              sort={sort}
              handleLogOut={handleLogOut}
              authUser={authUser}
              serverUser={getUser?.data}
              setShowAlert={setShowAlert}
              setNotify={setNotify}
              toggleAddPage={toggleAddPage}
              showAddPage={showAddPage}
            />
          }
        />
        <Route
          path="/auth/login"
          element={
            <Login
              handleLogin={handleLogin}
              onChange={handleLogInChange}
              logIn={logIn}
              notify={notify}
              setShowAlert={setShowAlert}
              setNotify={setNotify}
            />
          }
        />
        <Route
          path="/auth/sign-up"
          element={
            <SignUp handleSignUp={handleSignUp} onChange={handleSignUpChange} newUser={newUser} />
          }
        />
        <Route
          path="/feedback-list/:id"
          element={
            <FeedbackDetail
              authUser={authUser}
              serverUser={getUser?.data}
              setNotify={setNotify}
              setShowAlert={setShowAlert}
            />
          }
        />

        <Route
          path="/roadmap"
          element={
            <Roadmap
              feedback={data}
              serverUser={getUser?.data}
              setNotify={setNotify}
              setShowAlert={setShowAlert}
              toggleAddPage={toggleAddPage}
              showAddPage={showAddPage}
            />
          }
        />

        <Route path="/your-upvotes" element={<Upvotes serverUser={getUser?.data} />} />
      </Routes>
    </>
  );
}
