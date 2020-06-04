import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
};
const table = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.TABLE:
      return {
        ...state,
        loader: true,
      };
    case type.TABLE_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.TABLE_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default table;
