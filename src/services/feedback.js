import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/feedback-list';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, getOne };
