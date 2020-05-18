import type from './types';

const INITIAL_STATE = {
    loader: false,
    error: '',
    data: [],
};

const settings = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.settings:
          return {
            ...state,
            loader: true,
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
