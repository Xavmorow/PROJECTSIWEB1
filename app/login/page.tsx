'use client';

import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className={`${poppins.className} min-h-screen bg-[#f0fdf4] flex flex-col items-center justify-center p-4`}>
      {/* Logo and Titles */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white px-6 py-4 mb-4">
          <div className="relative w-40 h-16">
            <Image 
              src="/logo.png" 
              alt="Maidev Express Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-black mb-1">MAIDEV EXPRESS</h1>
        <p className="text-emerald-600 text-base">solusi pengantaran paket anda</p>
      </div>

      {/* Login Form Card */}
      <div className="w-full max-w-md bg-white border border-emerald-500 rounded-lg p-8 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-black mb-1">masuk ke Akun anda</h2>
        <p className="text-emerald-600 text-sm mb-8 text-left">lacak dan kelola pengantaran dengan mudah</p>

        <form action={formAction} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <EnvelopeIcon className="w-4 h-4" />
              email
            </label>
            <input 
              name="email"
              type="text" 
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <LockClosedIcon className="w-4 h-4" />
              password
            </label>
            <div className="relative">
              <input 
                name="password"
                type="password" 
                className="w-full border border-emerald-400 rounded-md p-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                required
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-700 hover:text-emerald-800">
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="text-right mt-3">
              <Link href="#" className="text-blue-600 text-[13px] font-bold hover:underline">
                lupa password?
              </Link>
            </div>
          </div>

          <button 
            type="submit"
            aria-disabled={isPending}
            className="w-full bg-[#00c853] hover:bg-[#00b248] text-white font-bold py-2.5 rounded-md mt-2 transition-colors text-sm aria-disabled:opacity-50"
          >
            {isPending ? 'Memproses...' : 'login'}
          </button>

          {/* Menampilkan pesan error jika login gagal */}
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>

          <div className="text-center mt-1">
            <p className="text-sm font-bold text-black">
              belum punya akun?<Link href="/register" className="text-blue-600 hover:underline"> daftar</Link>
            </p>
          </div>
        </form>
      </div>


      {/* Footer */}
      <footer className="text-emerald-700 text-xs">
        &copy; 2026 Maidev Express - Solusi UMKM Terpercaya
      </footer>
    </main>
  );
}
