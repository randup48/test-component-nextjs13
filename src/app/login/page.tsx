'use client';
import { useRef } from 'react';

const Page = () => {
  const email = useRef();
  const pass = useRef();

  return (
    <main className='flex flex-col gap-3 justify-center items-center h-screen'>
      <h1>MASS</h1>
      <p>Welcome</p>
      <p>Enter your credentials to log in</p>
      <input
        ref={email.current}
        type='text'
        name='text'
        id='username'
        // onChange={e => setUsername(e.target.value)}
      />
      <input
        ref={pass.current}
        type='password'
        name='password'
        id='password'
        // onChange={e => setPass(e.target.value)}
      />
      <input
        type='submit'
        value='Login'
        // onClick={() => fetchAPi(username, pass)}
      />
    </main>
  );
};

export default Page;
