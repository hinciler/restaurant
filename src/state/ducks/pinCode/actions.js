import type from './types';
export const getMenu = (payload) => ({
  type: type.GET_MENU,
  payload,
});
