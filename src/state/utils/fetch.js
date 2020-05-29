import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAAA_KZFYa6L2M-U5ChoEJd80BL0i8fnFXqksrpNwD588OgAAAAAOgAAAAAIAACAAAABYfmQzM33UqSiQh9RlceGvcAsFGFRTfGz7jxNfHQZBI-AAAADK1uJ3YKIFt35fJ8Z2zOtZZXZ-mGL4H476SRtrhCmxPXGdTu-csnRK-v4xrD7DvAUNn2T0kDz6BhhfcIo5E4fJXybcH4GwsY5_LPyF_ksRbkoIw1FWlmfQ8YwRTpo5NbYr3XA2Rg8w8nF_dDhs88UW66RK4wqJQUwLxqaUmp1jowIKldRzai4cGNa8Zi8uZGv_8jNzCHYk1PlcEtqicLSDnI6rEYQLUzxTkUxhjCcsEdU0hHD5KdRdohJd0sEhr0cbmp0rfRW61E-6Ig4aW0l6Iklj78sunMj5RY75Hd1v50AAAAC3oKQAmf2eo_SNJlQGETF7VOUCbvRQxTAT_gwYqkfIQvxsuBfTvLGt989PPyXBQdurYDSZU0ABbrqe0OM1Lprn';
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
    return response.data;
  },
  (error) => {
    console.log('axiosInstance error', error);
    return Promise.reject(error);
  },
);
export default axiosInstance;
