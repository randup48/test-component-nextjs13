'use client';
import { useAppDispatch } from '@/utils/redux/hooks';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Page = () => {
  const email = useRef(null);
  const pass = useRef(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <main className='flex flex-col gap-3 justify-center items-center h-screen'>
      <h1>MASS</h1>
      <p>Welcome</p>
      <p>Enter your credentials to log in</p>
      <input
        ref={email}
        type='text'
        name='text'
        // id='email'
        // onChange={e => setUsername(e.target.value)}
      />
      <input
        ref={pass}
        type='password'
        name='password'
        // id='pass'
        // onChange={e => setPass(e.target.value)}
      />
      <input
        type='submit'
        value='Login'
        onClick={() => {
          localStorage.setItem('token', 'sdawds');
          dispatch({ type: 'access_menu/get_menu', payload: {} });
          router.push('/');
        }}
      />
    </main>
  );
};

export default Page;
