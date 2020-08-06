import type from './types';
const INITIAL_STATE = {
    loader: false,
    error: '',
    data: [],
};
const addition = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.ADDITION:
          return {
            ...state,
            loader: true,
          };
        case type.ADDITION_SUCCESS:
          return {
            ...state,
            loader: false,
            data: action.data,
          };
        case type.ADDITION_FAILED:
          return {
            ...state,
            loader: false,
            error: action.error,
          };
        
        default:
          return state;
    }
};
export default addition;