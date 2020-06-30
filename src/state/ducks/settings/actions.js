import type from './types';

export const settings = (payload) => ({
  type: type.settings,
  payload,
});
export const setBaseUrl = ({baseUrl, domain, port}) => ({
  type: type.BASE_URL,
  baseUrl,
  domain,
  port,
});
