import type from './types';

const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
  baseUrl: 'http://78.159.99.84:9000',
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.settings:
      return {
        ...state,
        loader: true,
      };
    case type.BASE_URL:
      return {
        ...state,
        baseUrl: action.baseUrl,
      };
    case type.settings_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.settings_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default settings;
