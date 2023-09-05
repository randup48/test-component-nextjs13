'use client';
import {
  getTokenNotification,
  requestPermission,
} from '@/api/firebase/push_notification';
import { messaging } from '@/utils/firebase/config';
import { useAppSelector } from '@/utils/redux/hooks';
import { useRouter } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
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

export default function Home(req: NextRequest) {
  const access_menu = useAppSelector(state => state.access_menu);
  const route = useRouter();

  useEffect(() => {
    initiate();

    if (
      access_menu.length === 0 ||
      access_menu.find(access => (access.menu = 'dashboard')) === undefined
    )
      route.push('/404');
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
