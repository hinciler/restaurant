import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
export function* pinCode(action) {
  try {
    const response = yield api.pinCode(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.pinCode_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.pinCode_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.pinCode_FAILED,
      error,
    });
  }
}

function* watch_pinCode() {
  yield takeLatest(type.pinCode, pinCode);
}

export function* getMenu(action) {
  try {
    const response = yield api.getMenu(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.GET_MENU,
        error: response.error,
      });
    } else {
      yield put({
        type: type.GET_MENU_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.GET_MENU_FAILED,
      error,
    });
  }
}

function* watch_getMenu() {
  yield takeLatest(type.pinCode, getMenu);
}

export {watch_pinCode, watch_getMenu};
