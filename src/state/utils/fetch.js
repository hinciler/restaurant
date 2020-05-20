import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAADhzUjmTFcn1FEpX5kPa4joCtbx41zMUjFJKVn5VF4iVgAAAAAOgAAAAAIAACAAAAAGhkLQ6cRBCRDcsFKaEVBweZ4rylcdwr8kQiwDZkdiTuAAAAAkd1BEcDWdy5w8sy-pqBgZ2mDamaozoLkdZ6HJnJP7RXxWOXztuDXu55GGxNxBNjsrr1AQCb9TZoaMcQ4oBLsC7cOMsuqoQ2t8Ivj1md0gTzTqOQ71LRQboYuYr2VQNg76n2HxM8HZWRguTBI9uH1p3yYsCig_oXReJJkgyY80lLvLzoURZea_JnwWJ4_tVBslARZ9ruRz0Erz_J8lzE0s57I1nwfijGDdbSiULX00m1NIm9JVBa0mpKtucK0QYRIulR4Pr0zuLLzB7iITtOEdlFfoELxfk7wCjcmMT4K970AAAAAeyMpxT_qQnOPrgLbHoU_o-enxIHoOK6-5yC95o-Hr3KZHsE1LeXJG799FEG9aMOTDpaovx8j0m1TAhcLYyMcg';

export const host = 'http://78.159.99.84:9000/api/graphql';
import {store} from '../store';
export const path = 'mobile/';
const axiosInstance = axios.create({
  //baseURL: `${host}/${path}`,
  baseURL: `${host}`,
  timeout: 60000,
});
axiosInstance.defaults.headers['Content-Type'] = 'application/json';
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  // console.log('config', config);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('axiosInstance response', response);
    return response.data;
  },
  (error) => {
    console.log('axiosInstance error', error);
    return Promise.reject(error);
  },
);
export default axiosInstance;
