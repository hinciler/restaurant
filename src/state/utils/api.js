import axios from './fetch';

export default {
  getUsers(data) {
    return axios.post('getUsers', data);
  },
  getMenu(data) {
    return axios.post('getMenu', data);
  },
  getProductPortion(data) {
    return axios.post('getProductPortions', data);
  },
  getOrderTagGroups(data) {
    return axios.post('getOrderTagGroups', data);
  },
};
