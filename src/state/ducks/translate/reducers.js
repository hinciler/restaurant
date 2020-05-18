import type from './types';
import {en, tr} from 'utilities/translations';
const INITIAL_STATE = {
  loader: false,
  error: '',
  lang: tr,
};
const translate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.TRANSLATE:
      return {
        ...state,
        loader: true,
      };
    case type.TRANSLATE_SUCCESS:
      return {
        ...state,
        loader: false,
        lang: action.lang,
      };
    case type.TRANSLATE_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default translate;
