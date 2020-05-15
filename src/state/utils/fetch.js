import axios from 'axios';
import React from 'react';
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
  config.headers.Authorization =
    'Bearer AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAAB3HRCPxi7ZhaQ-soDQMPsg6usJT64aw2OtdbkeZD8lzQAAAAAOgAAAAAIAACAAAABO5C0rf9XPHIDbJQxVDUZ4IfpB0WvfgHTpH3BAMrqHw-AAAAAbJPjmuiBUMR2JzVUIrI4MNZEwqgsoGIZZY661BpNgMDqD2LLxMVgncPGeyx1ZHYI0mZWH1PmzM1cU68cXhUjE8CZTT89FF8GQ3L9dT8WONmdLhvev804yZj-C9Vhygy3_TuhbsLy5PMlPL1-uSy22tzQANS_JR3o8rkP1IkItuiHOfnTVolPB5wJ1J4EQmvjqNRG5YO8H8F95d3EJcwkHAJWWD_TDtSltvzaQ9Fit_vtTgCEvCdWHugPiC8U1SYKVseLhQZQYvJioTwnrhLD_6M8zAO8E_DRGyFIZLsAMfEAAAACWJriwubIDepEXLPyntuyIe8wDp6Nyamm3DymGTX1UlB71-GhTvAz2rSsh9ErkhtnSJUKLNj4jqTG7AMMyiDJO';
  console.log('config', config);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('axiosInstance response', response);
    return response.data;
  },
  (error) => {
    console.log('axiosInstance error', error);
    return Promise.reject(error);
  },
);
export default axiosInstance;
