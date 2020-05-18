import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
};
const pinCode = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.pinCode:
      return {
        ...state,
        loader: true,
      };
    case type.pinCode_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.pinCode_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };
    case type.GET_MENU:
      return {
        ...state,
        loader: true,
      };
    case type.GET_MENU_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.GET_MENU_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default pinCode;
