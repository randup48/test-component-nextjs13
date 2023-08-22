import { db } from '@/firebase/config';
import { DocumentSnapshot, doc, getDoc } from 'firebase/firestore';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './actions';

export function* getTokens(): Generator<any, void, DocumentSnapshot> {
  try {
    const docSnap: DocumentSnapshot = yield call(() =>
      getDoc(doc(db, 'token_test', 'token'))
    );

    if (docSnap.exists()) {
      yield put({
        type: actions.set_tokens,
        payload: docSnap.data().id,
      });
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.get_tokens, getTokens)]);
}
