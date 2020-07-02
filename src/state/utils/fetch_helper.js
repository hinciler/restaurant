import axios from 'axios';
import React from 'react';
import {store} from '../store';
const axiosInstance = axios.create({
  timeout: 0,
});
axiosInstance.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded';

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = `${store.getState().settings.baseUrl}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
export default axiosInstance;
