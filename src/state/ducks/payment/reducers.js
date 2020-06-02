import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
};
const payment = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.PAYMENT:
      return {
        ...state,
        loader: true,
      };
    case type.PAYMENT_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.PAYMENT_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default payment;
