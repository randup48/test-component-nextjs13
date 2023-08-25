import { all, takeLatest } from 'redux-saga/effects';
import sagasToken from './token_collection/sagas';

export function* watcherSaga() {
  yield all([sagasToken()]);
}
