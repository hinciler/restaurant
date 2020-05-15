import type from './types';

const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        loader: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default users;
