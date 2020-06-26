import {put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '@duck_utils/api';
import type from './types';
import _ from 'lodash';
import {en, languages} from 'utilities/translations';
export function* translate(action) {
  try {
    let defaultLang = en;
    let defaultShortLangTitle = 'en';
    const {lang} = action;
    const response = _.filter(languages, {value: lang});
    if (response.length > 0) {
      defaultLang = response[0].file;
      defaultShortLangTitle = response[0].value;
    }
    var index = languages.findIndex((s) => s.value === lang);
    yield put({
      type: type.TRANSLATE_SUCCESS,
      lang: defaultLang,
      shortTitle: defaultShortLangTitle,
      selectLangIndex: index > 0 ? index : 0,
    });
    yield AsyncStorage.setItem('@lang', defaultShortLangTitle);
  } catch (err) {
    yield put({
      type: type.TRANSLATE_FAILED,
      err,
    });
  }
}

export default function* watch_translate() {
  yield takeLatest(type.TRANSLATE, translate);
}
