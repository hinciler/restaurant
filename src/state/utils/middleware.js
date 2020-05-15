import {all} from 'redux-saga/effects';
import watch_getUsers from '@users/operations';
export default function* Sagas() {
  yield all([watch_getUsers()]);
}
