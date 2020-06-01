import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  menu: [],
  menuSuccess: false,
  productPortion: [],
  orderTags: [],
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
    case type.GET_PRODUCT_PORTION:
      return {
        ...state,
        loader: true,
      };
    case type.GET_PRODUCT_PORTION_SUCCESS:
      return {
        ...state,
        loader: false,
        productPortion: action.data,
      };
    case type.GET_PRODUCT_PORTION_FAILED:
      return {
        ...state,
        loader: false,
        product_portion_error: action.error,
      };
    case type.GET_ORDER_TAG:
      return {
        ...state,
        loader: true,
      };
    case type.GET_ORDER_TAG_SUCCESS:
      return {
        ...state,
        loader: false,
        orderTags: action.data,
      };
    case type.GET_PRODUCT_PORTION_FAILED:
      return {
        ...state,
        loader: false,
        orderTagError: action.error,
      };

    case type.PIN_CODE:
      return {
        ...state,
        loader: true,
      };
    case type.PIN_CODE_SUCCESS:
      return {
        ...state,
        loader: false,
        user: action.user,
        token: action.token,
      };
    case type.PIN_CODE_FAILED:
      return {
        ...state,
        loader: false,
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
