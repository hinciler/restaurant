import {put, takeLatest} from 'redux-saga/effects';
import api from '@duck_utils/api';
import {getTableQueries} from '@queries';
import type from './types';
export function* table(action) {
  try {
    const payloadTable = getTableQueries('All Tables');
    const response = yield api.getTable(payloadTable);
    if (response.hasOwnProperty('error')) {
      yield put({
        type: type.TABLE_FAILED,
        error: response.error,
      });
    } else {
      yield put({
        type: type.TABLE_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: type.TABLE_FAILED,
      error,
    });
  }
}

export default function* watch_table() {
  yield takeLatest(type.TABLE, table);
}
