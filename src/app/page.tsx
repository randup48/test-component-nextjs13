'use client';
import { requestPermission } from '@/firebase/push_notification';
import { useEffect } from 'react';

export const metadata = {
  title: 'Test Component',
  description: 'Testing component purpose only',
};

export default function Home() {
  useEffect(() => {
    requestPermission();
  }, []);

  return <p>Dibuat untuk testing component dan package</p>;
}
