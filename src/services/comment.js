import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/comments';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const createComment = async ({ id, ...newObject }) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

const createReply = async ({ id, ...newObject }) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

export default { setToken, createComment, createReply };
