import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAAB4RUDsXrCuqpCTQ1_gRl0TIP4Xoh-cyH1-UiNfrpH8WQAAAAAOgAAAAAIAACAAAAA4tOTzYfqncESzDvlT_EzuilDB_uHr97RrIZ4PdPaaCOAAAABuRzHa7sjg_DkzatfPHnhGsbG-VUBXoon7uNmd1M5nJs7oKlatZYs8itW5umTsVbmo71yCmUys3iWVT8wfXOSrMS2m13OHxU2LbVULoCsKMmi5Poc--M1RJVpBOEPV2Oda8376AyOKqWt00PTROLdR4Z5n1YUAz9b1_95JQhRHWB-VxE3irhaGbSS0irKuqYtuxY0DFZzDXdZw5jZ0rs2jgMHu8a-k3x5zDcaj1Mx-7YdnNpUOVUVMfg5J7B-jC_xHC9ljx03rFRhx3f6zRGJ3UT7LC3T3lxnjGnoUh8864kAAAACJBGdprSxWFjOUI-Mb5-V83JRREuflyb9KfTxxQ9qzWPfGWcdIBiB1cy1Dmj6scKJctMPDyBtHxfPBAPjVLgLr';

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
