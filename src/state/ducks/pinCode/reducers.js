import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  menuSuccess: false,
  userSuccess: false,
  connectionControl: [],
  connectionControlError: null,
  token: null,
  user: null,
};
const pinCode = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.GET_MENU:
      return {
        ...state,
        loader: true,
      };
    case type.GET_MENU_SUCCESS:
      return {
        ...state,
        loader: false,
        menu: action.data,
        menuSuccess: true,
      };
    case type.GET_MENU_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    case type.PIN_CODE:
      return {
        ...state,
        loader: true,
        userSuccess: false,
      };
    case type.PIN_CODE_SUCCESS:
      return {
        ...state,
        loader: false,
        user: action.user,
        userSuccess: true,
      };
    case type.PIN_CODE_FAILED:
      return {
        ...state,
        loader: false,
        userSuccess: false,
        connectionControlError: action.error,
      };
    case type.TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default pinCode;
