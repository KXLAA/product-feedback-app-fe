import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/users';

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createUser = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export default { getUser, createUser };
