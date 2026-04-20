'use client';

import Link from 'next/link';
import { poppins } from '@/app/ui/fonts';
import { 
  EnvelopeIcon, 
  LockClosedIcon, 
  UserIcon, 
  PhoneIcon,
  CubeIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { registerUser } from '@/app/lib/actions';

export default function RegisterPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    registerUser,
    undefined,
  );
  return (
    <main className={`${poppins.className} min-h-screen bg-[#f0fdf4] flex flex-col items-center justify-center p-4 py-12`}>
      {/* Titles */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-2xl font-bold text-black mb-1">MAIDEV EXPRESS</h1>
        <p className="text-emerald-600 text-base">solusi pengantaran paket anda</p>
      </div>

      {/* Register Form Card */}
      <div className="w-full max-w-md bg-white border border-emerald-500 rounded-lg p-8 shadow-sm mb-6">
        <h2 className="text-xl font-bold text-black mb-6">daftar Akun</h2>

        <form action={formAction} className="flex flex-col gap-4">
          {/* Nama Lengkap */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <UserIcon className="w-4 h-4" />
              Nama Lengkap
            </label>
            <input 
              name="name"
              type="text" 
              placeholder="Nama Anda"
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 text-black"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <EnvelopeIcon className="w-4 h-4" />
              Email
            </label>
            <input 
              name="email"
              type="email" 
              placeholder="nama@email.com"
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 text-black"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <PhoneIcon className="w-4 h-4" />
              Nomor Telepon
            </label>
            <input 
              name="phone"
              type="tel" 
              placeholder="+62 812-3456-7890"
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 text-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <LockClosedIcon className="w-4 h-4" />
              Password
            </label>
            <input 
              name="password"
              type="password" 
              placeholder="Minimal 6 karakter"
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 text-black"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-black mb-2">
              <LockClosedIcon className="w-4 h-4" />
              Konfirmasi Password
            </label>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Ulangi password"
              className="w-full border border-emerald-400 rounded-md p-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm placeholder-gray-400 text-black"
              required
            />
          </div>

          {/* Input peran baku untuk backend */}
          <input type="hidden" name="role" value="pelanggan" />

          <button 
            type="submit"
            aria-disabled={isPending}
            className="w-full bg-[#00c853] hover:bg-[#00b248] text-white font-bold py-3 rounded-md mt-4 transition-colors text-sm aria-disabled:opacity-50"
          >
            {isPending ? 'Memproses Pendaftaran...' : 'Daftar Sekarang'}
          </button>

          {/* Menampilkan pesan error jika daftar gagal atau password tidak cocok */}
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

          <div className="text-center mt-2">
            <p className="text-sm font-bold text-black">
              sudah punya akun? <Link href="/login" className="text-blue-600 hover:underline">login</Link>
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
