'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { logOut } from '@/app/lib/actions';

type NavLink = { name: string; href: string };

export default function MobileNav({ 
  navLinks, 
  activeRoute, 
  isLoggedIn 
}: { 
  navLinks: NavLink[], 
  activeRoute?: string,
  isLoggedIn: boolean 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[90] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="relative w-24 h-8 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="Maidev Express Logo" 
              fill
              className="object-contain object-left"
            />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col py-4">
          {navLinks.map((link) => {
            const isActive = activeRoute === link.href || (activeRoute === '/' && link.href === '/');
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 text-sm transition-colors border-l-4 ${
                  isActive 
                    ? 'border-[#00c853] bg-emerald-50 text-[#00c853] font-bold' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 font-medium'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-gray-100 absolute bottom-0 w-full bg-white">
          {isLoggedIn ? (
            <form action={logOut}>
              <button 
                type="submit"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 w-full justify-center bg-red-50 text-red-600 hover:bg-red-100 font-bold py-3.5 rounded-xl transition-colors text-sm border border-red-100"
              >
                <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                Logout
              </button>
            </form>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center bg-[#00c853] hover:bg-[#00ab44] text-white font-bold py-3.5 rounded-xl transition-colors text-sm w-full shadow-sm"
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
