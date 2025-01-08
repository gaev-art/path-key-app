import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard', '/settings'];
const publicRoutes = ['/'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const email = req.nextUrl.searchParams.get('email');

  // const accessToken = req.cookies.get('accessToken')?.value;

  if (isProtectedRoute && !email) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  if (isPublicRoute && email) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}
