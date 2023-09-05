import { all, call, put, takeLatest } from 'redux-saga/effects';
import { get_menu, set_menu } from './reducers';

import Cookies from 'js-cookie';

export function* getMenus() {
  try {
    const response = [
      // {
      //   menu: 'dashboard',
      // },
      {
        menu: 'chart',
        child: ['bar', 'line', 'pie'],
      },
      {
        menu: 'table',
      },
      {
        menu: 'push_notification',
      },
    ];

    if (response) {
      Cookies.set('access', JSON.stringify(response), { expires: 1 });

      yield put({
        type: set_menu.type,
        payload: response,
      });
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(get_menu.type, getMenus)]);
}
