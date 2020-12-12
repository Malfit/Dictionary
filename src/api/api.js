import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = {
  
};

export default api;