import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  menu: [],
  menuSuccess: false,
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

    default:
      return state;
  }
};
export default pinCode;
