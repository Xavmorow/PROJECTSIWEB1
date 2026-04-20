import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Hanya jalankan middleware pada alur yang bukan statis / image
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
