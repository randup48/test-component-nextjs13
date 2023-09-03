'use client';
import {
  getTokenNotification,
  requestPermission,
} from '@/api/firebase/push_notification';
import { messaging } from '@/utils/firebase/config';
import { useAppSelector } from '@/utils/redux/hooks';
import { useEffect } from 'react';

export const metadata = {
  title: 'Test Component',
  description: 'Testing component purpose only',
};

const initiate = async () => {
  try {
    const permission = await requestPermission();

    if (permission) getTokenNotification(messaging);
  } catch (error) {
    console.log('error init home page: ', error);
  }
};

export default function Home() {
  const access_menu = useAppSelector(state => state.access_menu);
  useEffect(() => {
    initiate();
  }, []);

  return (
    <section>
      <p>Dibuat untuk testing component dan package</p>
      {access_menu.map(e => (
        <div>
          <p>{e.menu}</p>

          {e.child?.map(f => (
            <p>{f}</p>
          ))}
        </div>
      ))}
    </section>
  );
}
