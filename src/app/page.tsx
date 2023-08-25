'use client';
import {
  getTokenNotification,
  requestPermission,
} from '@/api/firebase/push_notification';
import { messaging } from '@/utils/firebase/config';
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
  useEffect(() => {
    initiate();
  }, []);

  return (
    <section>
      <p>Dibuat untuk testing component dan package</p>
    </section>
  );
}
