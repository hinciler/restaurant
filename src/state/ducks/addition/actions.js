import type from './types';
export const addition = (payload) => ({
  type: type.ADDITION,
  payload,
});
export const push = () => {
  console.log('payload');
  return {
    type: type.ADD_ADDITION,
  };
};
export const pop = (payload) => ({
  type: type.DELETE_ADDITION,
  payload,
});
export const selected = (payload) => ({
  type: type.SELECT_ADDITION,
  payload,
});
export const unSelected = (payload) => ({
  type: type.UNSELECT_ADDITION,
  payload,
});
