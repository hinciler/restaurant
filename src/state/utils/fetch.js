import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAACnSLC1bkGDvKxlhsq8O7XdmwwMQymVNV0IxOqGLzHUzwAAAAAOgAAAAAIAACAAAAAJt44yuTA_RF7PZtL4WfR559lyZNYvtJIoWVuVnU1mVOAAAAAOg-PWUU-nyGMIZXonmT5cboYZpP16jzYqI4N1tB_ICfzrHxqTMfszAULmOnRwtxwi4VpYcleDrEojhf3d6WO18p8mKh956OIg2RNfSdcYntkg_Q71KfFIUR6bKP-MBRp_g0j8JUEBnF0qg0KdlelzPn14CN1ZvEBvfaHTLpV1jQCFcerUrBptjiweiDELBBQ0d_C8cJ39koXWajKhBeZHzQm7rMjx0501MrLuWpjLQjOdcxVkj9Oh2pt8IyJ0rBJ0Gq6-q-RsMxmNRjujYKVRka7bj_sV_DjOHKhYsszsR0AAAAAU84ht23oZUKUxtJsAhf9PSKvusLuis-09BvVWQwRkk128r63nacXiNlegnbVwH2olxiNo6KHXErPum8NU4Nzs';

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
