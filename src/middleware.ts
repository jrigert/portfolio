import { NextRequest, NextResponse } from 'next/server';

const { AUTH_USERNAME, AUTH_PASSWORD } = process.env;

export const config = {
  matcher: ['/'],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (!(AUTH_USERNAME && AUTH_PASSWORD)) {
    return NextResponse.error();
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === AUTH_USERNAME && pwd === AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }
  url.pathname = '/api/auth';

  return NextResponse.rewrite(url);
}
