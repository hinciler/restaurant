import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';

export function* getUsers(action) {
  try {
    const response = yield api.getUsers(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.GET_USERS_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.GET_USERS_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_USERS_FAILED,
      error,
    });
  }
}

export default function* watch_getUsers() {
  yield takeLatest(type.GET_USERS, getUsers);
}
