import {all} from 'redux-saga/effects';
import watch_getUsers from '@users/operations';
import {
  watch_getMenu,
  watch_getProductPortion,
  watch_getOrderTagGroups,
  watch_connectionControl,
} from '@pinCode/operations';
export default function* Sagas() {
  yield all([
    watch_getUsers(),
    watch_getMenu(),
    watch_getProductPortion(),
    watch_getOrderTagGroups(),
    watch_connectionControl(),
  ]);
 }
