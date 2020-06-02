import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import type from './types';
export function* payTerminalTicket(action) {
  try {
    const response = yield api.payTerminalTicket(action.payload);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.PAYMENT_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.PAYMENT_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.PAYMENT_FAILED,
      error,
    });
  }
}

export default function* watch_payTerminalTicket() {
  yield takeLatest(type.PAYMENT, payTerminalTicket);
}
