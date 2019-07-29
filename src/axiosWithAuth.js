import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      // 'Content-Type': 'application/json'
      Authorization: token,
    },
    baseURL: 'http://labstech2rentstaging.herokuapp.com',
  });
};

export default axiosWithAuth;
