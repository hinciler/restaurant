import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAAC3pJOGtBtVgcGYifgcsc20aX9hOCl3jUdbh3v5eB4zlwAAAAAOgAAAAAIAACAAAACBa_08agqo6P4R2baMf45qfGebYBoLm9qn0F7-xjwrPOAAAADjI6VtdNlyDssJSYloYwXjnJFyy7R7M3Q17JpDHLO02JfRzNQiJTO9YbqWAfJrhOrjUQ43rJlm-yWgL8cHbKAdfhcOOR5OpN5v05O0G_y7raNvXDaqnkX-dDSMIaqEoUwd567KzT3npyRwzweLaQJ_--DpW_3-qMociE5yxbjaBhhGbAZz3rxv_akOJuFQ60PIz6VwK6MEhgn26ZboWu_e6vRv11JIwdPxyvBeITfofXBWyCDmrKm-Nhu94A5Z27omlDLINgadm5p7daJmb97wTy6bJiC_0H0Hy4YgztCQ5UAAAAAj641s1EgCOiQuVSU1796mSsy-fzMVHB97VVhn4fS0fD_2Z1Tks74H7YM7Rv0zqsPmNWqczfFG-MKdU_03_KkN';

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
