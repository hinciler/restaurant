import axios from './fetch';
import api_helper from './fetch_helper';

export default {
  getUsers(data) {
    return axios.post('getUsers', data);
  },
  getMenu(data) {
    return axios.post('getMenu', data);
  },
  getUser(data) {
    return axios.post('getUser', data);
  },
  getProductPortion(data) {
    return axios.post('getProductPortions', data);
  },
  payTerminalTicket(data) {
    return axios.post('payTerminalTicket', data);
  },
  getOrderTagGroups(data) {
    return axios.post('getOrderTagGroups', data);
  },
  getTable(data) {
    return axios.post('getEntityScreenItems', data);
  },
  getTicketTag(data) {
    return api_helper.post('api/helper/', data);
  },
  connection_control(data) {
    return api_helper.post('api/helper/', data);
  },
  token(data) {
    return api_helper.post('Token', data);
  },
};
