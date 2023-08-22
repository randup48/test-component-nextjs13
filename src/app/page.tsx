'use client';
import { requestPermission } from '@/firebase/push_notification';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

export const metadata = {
  title: 'Test Component',
  description: 'Testing component purpose only',
};

export default function Home() {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(state => state.tokens);

  const initiate = async () => {
    try {
      await requestPermission();
      dispatch({ type: 'tokens/get_tokens', payload: {} });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initiate();
  }, [dispatch]);

  return (
    <section>
      <p>Dibuat untuk testing component dan package</p>
      {tokens.data &&
        tokens.data.length > 0 &&
        tokens.data.map((e: string, key: number) => <p key={key}>{e}</p>)}
    </section>
  );
}
