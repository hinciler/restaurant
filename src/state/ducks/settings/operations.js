import { put, takeLatest } from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';

export function* settings(action) {
  try {
    const response = yield api.settings(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.settings_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.settings_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.settings_FAILED,
      error,
    });
  }
}

export default function* watch_settings() {
  yield takeLatest(type.settings, settings);
}
