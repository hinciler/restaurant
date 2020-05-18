import type from './types';
export const getMenu = (payload) => ({
  type: type.GET_MENU,
  payload,
});

export const getProductPortion = (payload) => ({
  type: type.GET_PRODUCT_PORTION,
  payload,
});
