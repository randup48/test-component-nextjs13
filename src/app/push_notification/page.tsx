'use client';

import { getTokenCollection } from '@/api/firebase/database';
import { useAppDispatch, useAppSelector } from '@/utils/redux/hooks';
import { NotificationOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

const collectionFiltered = (arrToken: [], myToken: string) =>
  arrToken.filter(item => (item !== myToken ? true : false));

const handleNotif = (arrToken: [], myToken: string) => {
  console.log(collectionFiltered(arrToken, myToken));
  console.log('hoi');
};

export default function Page() {
  const dispatch = useAppDispatch();
  const tokenCollection = useAppSelector(state => state.tokens_collection.data);

  useEffect(() => {
    dispatch({ type: 'token_collection/get_token', payload: {} });
  }, []);

  return (
    <section>
      <p>push notification</p>

      <Button
        className='mt-3'
        icon={<NotificationOutlined />}
        onClick={() => {
          handleNotif(
            tokenCollection,
            localStorage.getItem('my-token-notification') ?? ''
          );
        }}
      >
        Notif Others
      </Button>
    </section>
  );
}
