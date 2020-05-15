import type from './types';

export const getUsers = (payload) => ({
  type: type.GET_USERS,
  payload,
});
