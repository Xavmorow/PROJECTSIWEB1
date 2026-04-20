import Navbar from '@/app/ui/navbar';
import { poppins } from '@/app/ui/fonts';
import { CubeIcon, ArrowPathIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/dashboard" />
      
      <div className={`max-w-5xl mx-auto px-4 mt-12 ${poppins.className}`}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Pengiriman</h1>
        <p className="text-gray-500 text-sm font-medium mb-10">Ringkasan statistik seluruh operasional pengiriman Anda secara aktual.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-50 text-blue-500 p-4 rounded-full mb-4">
              <CubeIcon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black text-gray-800 mb-1">115</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Paket</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="bg-amber-50 text-amber-500 p-4 rounded-full mb-4">
              <ArrowPathIcon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black text-gray-800 mb-1">24</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Sedang Dikirim</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="bg-[#ccfbf1] text-[#00c853] p-4 rounded-full mb-4">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black text-gray-800 mb-1">89</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Selesai</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="bg-red-50 text-red-500 p-4 rounded-full mb-4">
              <XCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black text-gray-800 mb-1">2</h3>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Gagal</p>
          </div>
        </div>

      </div>
    </main>
  );
}
