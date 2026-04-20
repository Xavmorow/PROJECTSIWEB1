import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.email === 'admin';
      const path = nextUrl.pathname;
      
      // 1. Halaman Login dan Register (Boleh diakses Tamu, kalau sudah login akan dilempar)
      if (path.startsWith('/login') || path.startsWith('/register')) {
        if (isLoggedIn) {
          // Arahkan khusus admin ke Dashboard
          if (isAdmin) return Response.redirect(new URL('/dashboard?login=success', nextUrl));
          // Arahkan customer ke Beranda
          return Response.redirect(new URL('/?login=success', nextUrl));
        }
        return true;
      }
      
      // 2. Daftar halaman yang dibolehkan untuk publik/tamu
      const isPublicPath = path === '/' || path.startsWith('/lacak'); 
      
      // Jika mencoba akses halaman rahasia via URL ketik langsung dan belum login
      if (!isLoggedIn && !isPublicPath) {
        return false; // Otomatis diarahkan paksa ke /login oleh Next.js
      }
      
      // 3. Batasan Otoritas Lanjutan jika sudah Login
      if (isLoggedIn) {
        const isAdminPath = path.startsWith('/dashboard') || path.startsWith('/tracking');
        const isCustomerPath = path.startsWith('/order') || path.startsWith('/pengiriman');
        
        // Pelanggan mencoba membobol halaman Admin via URL
        if (!isAdmin && isAdminPath) {
           return Response.redirect(new URL('/', nextUrl));
        }
        
        // Admin mencoba mengakses halaman Pelanggan
        if (isAdmin && isCustomerPath) {
           return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }

      return true; // Lolos semua perizinan
    },
  },
  providers: [], // Akan ditambahkan di auth.ts
} satisfies NextAuthConfig;
