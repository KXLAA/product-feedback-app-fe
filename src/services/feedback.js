import axios from 'axios';

const baseUrl = '/api/feedback-list';
const commentUrl = '/api/comments';
const replyUrl = '/api/replies';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getFeedback = async (filter, sort) => {
  const response = await axios.get(`${baseUrl}?category=${filter}${sort}`);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async ({ id, ...newObject }) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

const deleteFeedback = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const createComment = async ({ id, ...newObject }) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${commentUrl}/${id}`, newObject, config);
  return response.data;
};

const deleteComment = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${commentUrl}/${id}`, config);
  return response.data;
};

const createReply = async ({ id, ...newObject }) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${replyUrl}/${id}`, newObject, config);
  return response.data;
};

const getReply = async (id) => {
  const response = await axios.get(`${replyUrl}/${id}`);
  return response.data;
};

const getReplies = async () => {
  const response = await axios.get(replyUrl);
  return response.data;
};

const deleteReply = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${replyUrl}/${id}`, config);
  return response.data;
};

export default {
  getOne,
  setToken,
  create,
  update,
  deleteFeedback,
  createComment,
  deleteComment,
  createReply,
  getReplies,
  deleteReply,
  getReply,
  getFeedback,
};
