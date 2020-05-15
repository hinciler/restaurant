import type from './types';
export const pinCode = (payload) => ({
  type: type.pinCode,
  payload,
});
