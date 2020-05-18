import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAADBrarLW-kr4KwTCPaTCnwF9nmI_gnGaiYNjadh3OrAiAAAAAAOgAAAAAIAACAAAACcvVyRtQtvVVDPX7yoq297QKhMeadHR0xpLvEsem2yN-AAAAAsCC744a1OqIUeD67iJHDMdbhtomuua29x_mnZPnRuwCULSQyg2MqQbmXZbEhect5Gvpv6u2yCzsVEIJ90GPDs4o5EhTg8eVMHwDo3mPmcsXJ7VY7yRzdrgP4Cy7lUoLzY0ZcqiSSZd28KNn64UhJhExKWLKM9i0ew2Yov5SvfmCGacHmjucorTvwUdoRtOkynLx56tE7h-aMm2wmTRYc5Dn9sz20s2gDxMgKoeteiwlR1hSdadX77ra5NgzVWnhu-6XMe1dWYuBkzyxXBgTGNQcuWqvEp4mj1jEsLYeh2ukAAAACslW5WfSXMdouDq2Yt0RhpvWPuHSNumMUgXPtS_zMNn0-L29Z_YSjR3Gwj8BIokofHtQXsrCszHO0ouzsvUvCr';

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
