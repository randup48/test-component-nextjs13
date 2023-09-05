import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middlware = (req: NextRequest) => {
  let token = req.cookies.get('token');
  let access_menu: AccessMenu[] = req.cookies.get('access')
    ? JSON.parse(req.cookies.get('access')?.value ?? '')
    : [];

  const path = req.nextUrl.pathname;

  // jika user sudah login dan mengakses halaman login lagi, akan redirect ke dashboard
  if (path === '/login' && token !== undefined)
    return NextResponse.redirect(new URL('/', req.nextUrl));

  // jika user belum login dan mengakses halaman lain, akan redirect ke login
  if (!(path === '/login') && token === undefined && access_menu.length)
    return NextResponse.redirect(new URL('/login', req.nextUrl));

  // jika user tidak memiliki access menu dashboard, akan redirect ke 404
  if (
    path === '/' &&
    access_menu.find(acces => acces.menu === 'dashboard') === undefined
  )
    return NextResponse.redirect(new URL('/404', req.nextUrl));

  return NextResponse.next();
};

export default middlware;

export const config = {
  matcher: ['/', '/login', '/table', '/amchart/:path*', '/push_notification'],
};
