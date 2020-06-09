import type from './types';
const INITIAL_STATE = {
    loader: false,
    error: '',
    data: [],
};
const orderList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.ORDER_LIST:
          return {
            ...state,
            loader: true,
          };
        case type.ORDER_LIST_SUCCESS:
          return {
            ...state,
            loader: false,
            data: action.data,
          };
        case type.ORDER_LIST_FAILED:
          return {
            ...state,
            loader: false,
            error: action.error,
          };
        
        default:
          return state;
    }
};
export default orderList;