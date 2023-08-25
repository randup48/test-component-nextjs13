import { db } from '@/utils/firebase/config';
import { DocumentSnapshot, doc, getDoc } from 'firebase/firestore';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { get_token, set_token } from './reducers';
import { getTokenCollection } from '@/api/firebase/database';

export function* getTokens(): Generator<any, void, DocumentSnapshot> {
  try {
    const response: DocumentSnapshot = yield call(() => getTokenCollection());

    if (response.exists()) {
      yield put({
        type: set_token.type,
        payload: { loading: false, data: response.data().id.sort() },
      });
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(get_token.type, getTokens)]);
}
