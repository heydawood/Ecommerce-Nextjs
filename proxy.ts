import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isAdmin = request.cookies.get('isAdmin')?.value;

 const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/login';

  //if Not logged in then throws backs to /login nd blocks all routes that starts with /admin
  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  //if logged in then throws backs to /admin/orders route and blocks /login route
  if (isLoginPage && isAdmin) {
    return NextResponse.redirect(new URL('/admin/orders', request.url));
  }

  return NextResponse.next();
}


//this is used to apply to only admin routes
export const config = {
  matcher: ['/admin/:path*', '/login'],
};

