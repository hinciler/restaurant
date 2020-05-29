import type from './types';
export const getMenu = (payload) => ({
  type: type.GET_MENU,
  payload,
});

export const getProductPortion = (payload) => ({
  type: type.GET_PRODUCT_PORTION,
  payload,
});

export const getOrderTagGroups = (payload) => ({
  type: type.GET_ORDER_TAG,
  payload,
});
export const connectionControl = (payload, code) => ({
  type: type.CONNECTION_CONTROL,
  payload,
  code,
});
