import Link from 'next/link';
import Image from 'next/image';
import { poppins } from '@/app/ui/fonts';
import { 
  TruckIcon, 
  MapPinIcon, 
  CurrencyDollarIcon, 
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline';
import { auth } from '@/auth';
import { Suspense } from 'react';
import LoginToast from '@/app/ui/login-toast';
import Navbar from '@/app/ui/navbar';

export default async function Page() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={null}>
        {session?.user?.name && <LoginToast userName={session.user.name} />}
      </Suspense>

      <Navbar activeRoute="/" />

      {/* Hero Section */}
      <section className="bg-emerald-600 w-full py-24 px-6 md:px-12 text-center text-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative background shapes utuk menghilangkan gradasi merah pada hero dan memperbaiki style nya */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white"></div>
           <div className="absolute top-48 right-12 w-64 h-64 rounded-full border-[15px] border-white"></div>
        </div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <h1 className={`${poppins.className} text-4xl md:text-5xl font-bold mb-6 leading-tight`}>
            Siap Mengirim Paket?
          </h1>
          {session ? (
            <p className="text-lg md:text-xl mb-10 text-emerald-50 max-w-2xl">
              Kirim dan lacak paket Anda dengan mudah bersama <span className="font-semibold text-emerald-200">MAIDEV EXPRESS</span>
            </p>
          ) : (
            <>
              <p className="text-lg md:text-xl mb-10 text-emerald-50 max-w-2xl">
                Login sekarang dan nikmati berbagai kemudahan pengiriman Anda dengan <span className="font-semibold text-emerald-200">MAIDEV EXPRESS</span>
              </p>
              <Link 
                href="/register" 
                className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full hover:bg-emerald-50 shadow-lg transition-transform hover:-translate-y-1"
              >
                Login / Register Sekarang
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Services Cards */}
      <section className="bg-slate-50 py-20 px-6 md:px-12">
        <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-16`}>
          Layanan Kami
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 border-t-4 border-t-emerald-500">
            <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full mb-6">
              <TruckIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pengiriman Cepat</h3>
            <p className="text-gray-600 leading-relaxed">
              Layanan pengiriman ekspres ke seluruh Indonesia dengan kepastian dan jaminan tepat waktu yang bisa diandalkan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 border-t-4 border-t-emerald-400">
            <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full mb-6">
              <MapPinIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Lacak Real-time</h3>
            <p className="text-gray-600 leading-relaxed">
              Pantau pergerakan posisi paket Anda secara real-time dengan teknologi tracking presisi terkini.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 border-t-4 border-t-emerald-500">
            <div className="bg-emerald-50 text-emerald-600 p-5 rounded-full mb-6">
              <CurrencyDollarIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Harga Terjangkau</h3>
            <p className="text-gray-600 leading-relaxed">
              Dapatkan tarif pengiriman kompetitif dengan berbagai promo menarik dan khusus untuk mitra kami.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-16 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="relative w-32 h-10 md:w-40 md:h-12 overflow-hidden mb-6">
              <Image 
                src="/logo.png" 
                alt="Maidev Express Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Solusi pengiriman terpercaya di Indonesia dari Sabang sampai Merauke. Solusi terbaik untuk pengiriman personal dan bisnis Anda.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 text-lg">Layanan</h4>
            <ul className="space-y-3 text-sm font-medium text-emerald-600">
              <li><Link href="#" className="hover:text-emerald-800">Pengiriman Reguler</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Pengiriman Express</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Sameday & Nextday</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Cargo & Ekspedisi</Link></li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 text-lg">Perusahaan</h4>
            <ul className="space-y-3 text-sm font-medium text-emerald-600">
              <li><Link href="#" className="hover:text-emerald-800">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Karir</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Pusat Bantuan</Link></li>
              <li><Link href="#" className="hover:text-emerald-800">Mitra & Reseller</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 text-lg">Kontak</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                 <PhoneIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                 <span>021-1234-5678 (Hotline)</span>
              </li>
              <li className="flex items-start gap-3">
                 <EnvelopeIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                 <span>info@maidevexpress.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8 max-w-6xl mx-auto">
          &copy; {new Date().getFullYear()} MAIDEV EXPRESS - Your Trusted Delivery Partner. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
