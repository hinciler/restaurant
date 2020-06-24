import {all} from 'redux-saga/effects';
import watch_getUsers from '@users/operations';
import watch_table from '@table/operations';
import watch_translate from '@translate/operations';
import {watch_getMenu, watch_connectionControl} from '@pinCode/operations';
export default function* Sagas() {
  yield all([
    watch_getUsers(),
    watch_getMenu(),
    watch_connectionControl(),
    watch_table(),
    watch_translate(),
  ]);
}
