import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middlware = (req: NextRequest) => {
  let cookie = req.cookies.get('token');
  const path = req.nextUrl.pathname;

  if (path === '/login' && cookie !== undefined)
    return NextResponse.redirect(new URL('/', req.nextUrl));

  if (!(path === '/login') && cookie === undefined)
    return NextResponse.redirect(new URL('/login', req.nextUrl));

  return NextResponse.next();
};

export default middlware;

export const config = {
  matcher: ['/', '/login', '/table', '/amchart/:path*', '/push_notification'],
};
