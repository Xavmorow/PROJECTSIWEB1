import Navbar from '@/app/ui/navbar';
import { poppins } from '@/app/ui/fonts';
import Image from 'next/image';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { auth } from '@/auth';

export default async function ProfilePage() {
  const session = await auth();
  const userName = session?.user?.name || 'Siti Aminah';
  const userEmail = session?.user?.email || 'siti.aminah@example.com';
  const userRole = session?.user?.email === 'budi@example.com' ? 'Kurir Eksklusif' : 'Pelanggan VIP';

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/profile" />
      
      <div className={`max-w-3xl mx-auto px-4 mt-12 ${poppins.className}`}>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profil Pengguna</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-emerald-500 to-[#00c853]"></div>
          
          <div className="px-6 md:px-10 pb-10">
            {/* Avatar Profile */}
            <div className="relative w-32 h-32 -mt-16 mb-6 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md flex justify-center items-center">
               <UserIcon className="w-16 h-16 text-gray-400" />
            </div>

            {/* User Info Title */}
            <div className="mb-8 border-b border-gray-100 pb-6 text-center">
              <h2 className="text-2xl font-black text-gray-900 capitalize">{userName}</h2>
              <p className="text-emerald-600 font-bold text-sm tracking-wide mt-1">{userRole}</p>
            </div>

            {/* Detailed Info */}
            <h3 className="text-lg font-bold text-gray-800 mb-6">Informasi Kontak</h3>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <EnvelopeIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-gray-900 font-medium">{userEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <PhoneIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Nomor Telepon</p>
                  <p className="text-gray-900 font-medium">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <MapPinIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Alamat Utama</p>
                  <p className="text-gray-900 font-medium max-w-sm leading-relaxed">
                    Jl. Gatot Subroto No. 45, Kompleks Indah Makmur,<br/>
                    DKI Jakarta, 12340
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
