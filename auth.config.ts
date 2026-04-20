import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      
      if (isOnLogin) {
        if (isLoggedIn) {
          // Arahkan khusus admin ke Dashboard
          if (auth?.user?.email === 'admin') {
            return Response.redirect(new URL('/dashboard?login=success', nextUrl));
          }
          // Arahkan customer ke Beranda
          return Response.redirect(new URL('/?login=success', nextUrl));
        }
        return true;
      }
      
      // Jika Anda memiliki halaman yang ingin diproteksi misal /dashboard nantinya:
      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard && !isLoggedIn) return false;

      return true;
    },
  },
  providers: [], // Akan ditambahkan di auth.ts
} satisfies NextAuthConfig;
