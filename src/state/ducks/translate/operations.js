
import { put, takeLatest } from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
export function* translate(action) {
  try {
    const response = yield api.translate(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.TRANSLATE_FAILED,
        err: response.error,
      });
    } else {
      yield put({
        type: type.TRANSLATE_SUCCESS,
        data: response.data,
      });
    }
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