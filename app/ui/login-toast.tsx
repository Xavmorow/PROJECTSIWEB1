'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function LoginToast({ userName }: { userName: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get('login') === 'success') {
      setShow(true);
      
      // Hapus URL query parameter agar tidak muncul lagi saat di-refresh
      const params = new URLSearchParams(searchParams.toString());
      params.delete('login');
      // replace browser history gently
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      router.replace(newUrl, { scroll: false });
      
      // Sembunyikan otomatis setelah 4 detik
      setTimeout(() => setShow(false), 4000);
    }
  }, [searchParams, router, pathname]);

  if (!show) return null;

  // Fungsi untuk membersihkan dan memakai Huruf Besar di Awal Kata
  const formatName = (name: string) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="flex items-center gap-3 bg-[#022c22] border border-emerald-900/50 px-6 py-4 rounded-xl shadow-2xl">
        <div className="bg-[#34d399] rounded-full text-[#022c22] p-0.5">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-xl font-medium text-[#34d399]">
          Selamat datang, {formatName(userName)}!
        </span>
      </div>
    </div>
  );
}
