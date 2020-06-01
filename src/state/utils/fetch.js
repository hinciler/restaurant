import axios from 'axios';
import React from 'react';
import {store} from '../store';
export const path = 'mobile/';

const axiosInstance = axios.create({
  timeout: 0,
});
axiosInstance.defaults.headers['Content-Type'] = 'application/json';
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = store.getState().settings.baseUrl + '/api/graphql';
  if (store.getState().pinCode.token) {
    config.headers.Authorization = `Bearer ${store.getState().pinCode.token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
