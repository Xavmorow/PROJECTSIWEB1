import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { auth } from '@/auth';
import { logOut } from '@/app/lib/actions';
import MobileNav from '@/app/ui/mobile-nav';

export default async function Navbar({ activeRoute }: { activeRoute?: string }) {
  const session = await auth();

  const isAdmin = session?.user?.email === 'admin';
  const isLoggedIn = !!session;

  let navLinks: { name: string; href: string }[] = [];

  if (isAdmin) {
    // Menu khusus Administrator
    navLinks = [
      { name: 'Beranda', href: '/' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Tracking (Table)', href: '/tracking' },
      { name: 'Profile', href: '/profile' },
    ];
  } else if (isLoggedIn) {
    // Menu khusus Pelanggan (Siti)
    navLinks = [
      { name: 'Beranda', href: '/' },
      { name: 'Buat Order', href: '/order' },
      { name: 'Lacak Resi', href: '/lacak' },
      { name: 'Paket Saya', href: '/pengiriman' },
      { name: 'Profile', href: '/profile' },
    ];
  } else {
    // Menu Tamu (Belum Login)
    navLinks = [
      { name: 'Beranda', href: '/' },
      { name: 'Lacak Resi', href: '/lacak' },
    ];
  }

  return (
    <nav className="flex items-center justify-between p-4 px-6 md:px-12 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2 md:gap-0">
        <MobileNav navLinks={navLinks} activeRoute={activeRoute} isLoggedIn={!!session} />
      
        {/* Logo */}
        <Link href="/">
          <div className="relative w-24 h-8 md:w-32 md:h-10 overflow-hidden cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="Maidev Express Logo" 
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
        {navLinks.map((link) => {
          // simple check for active route
          const isActive = activeRoute === link.href || (activeRoute === '/' && link.href === '/');
          
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`hover:text-[#00c853] transition-colors ${
                isActive ? 'font-bold text-[#00c853]' : ''
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        {session ? (
          <form action={logOut}>
            <button className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold transition-colors text-sm">
              <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
              Logout
            </button>
          </form>
        ) : (
          <Link 
            href="/login" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md font-medium text-sm transition-colors"
          >
            Login / Register
          </Link>
        )}
      </div>
    </nav>
  );
}
