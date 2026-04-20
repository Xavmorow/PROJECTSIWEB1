import Navbar from '@/app/ui/navbar';
import { poppins } from '@/app/ui/fonts';
import { MagnifyingGlassIcon, CheckIcon } from '@heroicons/react/24/outline'; 

export default function LacakPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/lacak" />
      
      <div className={`max-w-3xl mx-auto px-4 mt-12 ${poppins.className}`}>
        
        {/* Search Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 mb-8">
          <h2 className="flex items-center gap-3 text-lg font-bold text-gray-800 mb-6">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" strokeWidth={2} />
            Lacak Paket Anda
          </h2>
          
          <div className="relative flex items-center w-full">
            <input 
              type="text" 
              placeholder="Masukkan nomor resi..."
              className="w-full border-b border-gray-200 py-3 pr-24 focus:outline-none focus:border-emerald-500 text-emerald-600 font-medium transition-colors"
              defaultValue="CGK2024040601"
            />
            <button className="absolute right-0 bg-[#00c853] hover:bg-[#00b248] text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 transition-colors text-sm shadow-sm">
              <MagnifyingGlassIcon className="w-4 h-4" strokeWidth={3} />
              Lacak
            </button>
          </div>
          <p className="text-sm text-emerald-700 mt-4 font-medium">Contoh: CGK2024040601</p>
        </div>

        {/* Tracking Result Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 mb-6 flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-400 mb-1 font-medium">Nomor Resi</p>
            <h3 className="text-xl font-bold text-gray-800 mb-6 tracking-wide">CGK2024040601</h3>
            
            <div className="flex items-center gap-16">
              <div>
                <p className="text-xs text-gray-400 mb-1 font-medium">Asal</p>
                <p className="font-semibold text-gray-700 text-sm">Jakarta Pusat</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1 font-medium">Tujuan</p>
                <p className="font-semibold text-gray-700 text-sm">Bandung</p>
              </div>
            </div>
          </div>

          <div className="bg-fuchsia-100 text-fuchsia-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            Dalam Perjalanan
          </div>
        </div>

        {/* Detail Paket */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 mb-6">
          <h3 className="font-bold text-gray-800 mb-6">Detail Paket</h3>
          
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-50 pb-3">
              <span className="text-gray-400 font-medium">Deskripsi</span>
              <span className="font-medium text-gray-700">Paket Elektronik</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-3">
              <span className="text-gray-400 font-medium">Berat</span>
              <span className="font-medium text-gray-700">2.5 kg</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-3">
              <span className="text-gray-400 font-medium">Biaya</span>
              <span className="font-medium text-gray-700">Rp 50.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium">Estimasi Tiba</span>
              <span className="font-bold text-gray-800">7 April 2024</span>
            </div>
          </div>
        </div>

        {/* Riwayat Pelacakan */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100">
          <h3 className="font-bold text-gray-800 mb-8">Riwayat Pelacakan</h3>
          
          <div className="relative pl-6 border-l-2 border-emerald-100 space-y-10 ml-2">
            
            {/* Item 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] top-0 bg-[#00c853] rounded-full p-1 text-white shadow ring-4 ring-white">
                <CheckIcon className="w-3 h-3" strokeWidth={3} />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-[#00c853] text-sm mb-1">Dalam Perjalanan</h4>
                  <p className="text-xs text-gray-500 mb-1">Paket telah berangkat menuju kota Bandung</p>
                  <p className="text-xs text-gray-400 font-medium">Jakarta Pusat</p>
                </div>
                <span className="text-xs text-gray-400 font-medium">10:35</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <div className="absolute -left-[33px] top-0 bg-white border-2 border-emerald-200 rounded-full p-1.5 text-emerald-200 ring-4 ring-white">
                <CheckIcon className="w-2 h-2 opacity-0" />
              </div>
              <div className="flex justify-between items-start mt-[-2px]">
                <div>
                  <h4 className="font-bold text-gray-700 text-sm mb-1">Telah Diambil</h4>
                  <p className="text-xs text-gray-500 mb-1">Kurir telah mengambil paket dari Shipper</p>
                  <p className="text-xs text-gray-400 font-medium">Jakarta Pusat</p>
                </div>
                <span className="text-xs text-gray-400 text-right leading-loose font-medium">15:00<br/>Kemarin</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative">
              <div className="absolute -left-[33px] top-0 bg-white border-2 border-emerald-200 rounded-full p-1.5 text-emerald-200 ring-4 ring-white">
                <CheckIcon className="w-2 h-2 opacity-0" />
              </div>
              <div className="flex justify-between items-start mt-[-2px]">
                <div>
                  <h4 className="font-bold text-gray-700 text-sm mb-1">Menunggu</h4>
                  <p className="text-xs text-gray-500 mb-1">Menunggu penjemputan oleh Kurir</p>
                  <p className="text-xs text-gray-400 font-medium">Jakarta Pusat</p>
                </div>
                <span className="text-xs text-gray-400 text-right leading-loose font-medium">09:00<br/>Kemarin</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
