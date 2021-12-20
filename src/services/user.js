import axios from 'axios';

const baseUrl = '/api/users';

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createUser = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const editUser = async ({ id, ...newObject }) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getUser, createUser, editUser };
