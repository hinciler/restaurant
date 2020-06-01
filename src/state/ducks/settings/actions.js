import type from './types';

export const settings = (payload) => ({
  type: type.settings,
  payload,
});
export const setBaseUrl = (payload) => ({
  type: type.BASE_URL,
  baseUrl: payload,
});
