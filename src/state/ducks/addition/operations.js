import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
export function* addition(action) {
  try {
    const response = yield api.getAddition(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.ADDITION_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.ADDITION_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.ADDITION_FAILED,
      error,
    });
  }
}

export default function* watch_addition() {
  yield takeLatest(type.ADDITION, addition);
}
