import { all, takeLatest } from 'redux-saga/effects';
import sagasToken from './token_collection/sagas';
import sagasAccessMenu from './access_menu/sagas';

export function* watcherSaga() {
  yield all([sagasToken(), sagasAccessMenu()]);
}
