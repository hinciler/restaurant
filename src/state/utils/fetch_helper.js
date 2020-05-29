import axios from 'axios';
import React from 'react';

const host = 'http://78.159.99.84:9000/';

const axiosInstance = axios.create({
  baseURL: `${host}`,
  timeout: 0,
});
axiosInstance.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded';
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
export default axiosInstance;
