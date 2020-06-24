import type from './types';
import {en, languages} from 'utilities/translations';

const INITIAL_STATE = {
  loader: false,
  error: '',
  lang: en,
  shortTitle: 'en',
  languages: languages,
  selectLangIndex: 0,
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
        shortTitle: action.shortTitle,
        selectLangIndex: action.selectLangIndex,
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
