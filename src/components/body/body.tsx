'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Contoh fungsi untuk memeriksa keberadaan token
const checkAuthToken = () => {
  const token = localStorage.getItem('token'); // Ganti dengan cara Anda untuk mendapatkan token (misalnya, dari cookies atau state manajemen)
  return !!token; // Kembalikan true jika token ada, false jika tidak
};

export default function BodyTemplate({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isTokenValid = checkAuthToken(); // Memeriksa token di client-side code

    if (!isTokenValid) {
      // Jika token tidak valid, arahkan pengguna ke halaman login
      router.push('/login');
    }
  }, []); // Pastikan useEffect hanya dijalankan sekali saat komponen di-mount

  return (
    <div className={pathname !== '/login' ? 'px-3 py-[30px]' : ''}>
      {children}
    </div>
  );
}
