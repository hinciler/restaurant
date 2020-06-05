import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
export function* orderList(action) {
  try {
    const response = yield api.getOrderTagGroups(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.ORDER_LIST_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.ORDER_LIST_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.ORDER_LIST_FAILED,
      error,
    });
  }
}

export default function* watch_orderList() {
  yield takeLatest(type.ORDER_LIST, orderList);
}
