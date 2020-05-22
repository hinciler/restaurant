import axios from 'axios';
import React from 'react';
const token =
  'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAA5ppupYS3U-AMXbpIDI_fQAAAAACAAAAAAAQZgAAAAEAACAAAAAShcMheHRcXjkOuu9IbwOBXEkQ843VlfvdP0mvpCNQDQAAAAAOgAAAAAIAACAAAAC5QJHMwggfvWAViF0vtZ7550DOskilLOoBvz8sORsHYuAAAAAwt-ofBtg6aikYYu0h7OiisOV8RryHMtdi0uHCXlScRZahE579-oIgkD2sdbB9dbHYpXKjQsuApRDXxwYLebBuEBf0jpcLeRPp_5aCcSkQ0FG3TI-5sCm_u97MLDrYiPrSIrSM-dQFaOF7eiTnIUivIPcs6oKfC970sJciNKHzOcVas1VRdQdFtn8rnkOEalahTKrVpcsA8RcDOB3KNP8Et5ZrR50WuL6tLVnlaMXyCtxNGNbzQdxP4ZVAGE3IqhwgXbjsdrQPd2r0Cg645JRbu4VnzBd05QxMx8PcEuOOeUAAAABQABo2ietSVzaIGgEvRdVAP6qM6LMgQVhAqof7gx55g2mPADjNpV7AvX0v0zRtxXvbJQ1jXB5r5hyhqF-IwbId';

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
