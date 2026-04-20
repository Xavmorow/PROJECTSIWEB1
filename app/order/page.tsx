import Navbar from '@/app/ui/navbar';
import { poppins } from '@/app/ui/fonts';
import { MapPinIcon, CubeIcon, BanknotesIcon, ScaleIcon, TruckIcon } from '@heroicons/react/24/outline'; 

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/order" />
      
      <div className={`max-w-4xl mx-auto px-4 mt-10 ${poppins.className}`}>
        
        {/* Header */}
        <div className="mb-8 pl-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Pengiriman</h1>
          <p className="text-gray-500 text-sm font-medium">Lengkapi detail barang dan alamat untuk layanan pengiriman Anda.</p>
        </div>

        <form className="space-y-6">
          {/* Top Row: Pengirim and Penerima */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Detail Pengirim */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100">
              <h2 className="flex items-center gap-3 text-lg font-bold text-gray-800 mb-6">
                <MapPinIcon className="w-5 h-5 text-[#00c853]" strokeWidth={2} />
                Detail Pengirim
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Pengirim</label>
                  <input type="text" placeholder="Siti Aminah" className="w-full text-sm py-3 px-4 rounded-xl border border-emerald-100/70 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-700 placeholder-emerald-600 bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Asal (Pickup)</label>
                  <textarea rows={3} placeholder="Ketik alamat lengkap asal" className="w-full text-sm py-3 px-4 rounded-xl border border-emerald-100/70 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-700 placeholder-emerald-600 bg-white transition-colors resize-none" />
                </div>
              </div>
            </div>

            {/* Detail Penerima */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100">
              <h2 className="flex items-center gap-3 text-lg font-bold text-gray-800 mb-6">
                <MapPinIcon className="w-5 h-5 text-blue-500" strokeWidth={2} />
                Detail Penerima
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Penerima</label>
                  <input type="text" placeholder="Masukkan nama" className="w-full text-sm py-3 px-4 rounded-xl border border-emerald-100/70 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-700 placeholder-emerald-600 bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Tujuan</label>
                  <textarea rows={3} placeholder="Ketik alamat lengkap tujuan" className="w-full text-sm py-3 px-4 rounded-xl border border-emerald-100/70 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-700 placeholder-emerald-600 bg-white transition-colors resize-none" />
                </div>
              </div>
            </div>

          </div>

          {/* Detail Barang */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100">
            <h2 className="flex items-center gap-3 text-lg font-bold text-gray-800 mb-6">
              <CubeIcon className="w-5 h-5 text-orange-500" strokeWidth={2} />
              Detail Barang
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Isi/Deskripsi Barang</label>
                <input type="text" placeholder="Contoh: Dokumen, Pakaian, Elektronik" className="w-full text-sm py-3 px-4 rounded-xl border border-emerald-100/70 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-700 placeholder-emerald-600 bg-white transition-colors" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Berat (kg)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <ScaleIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <input type="number" step="0.1" defaultValue="1.0" className="w-full text-sm py-3 pl-11 pr-4 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-emerald-800 font-medium bg-white transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Jenis Layanan</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <TruckIcon className="w-5 h-5 text-gray-400" />
                    </div>
                    <select className="w-full text-sm py-3 pl-11 pr-4 rounded-xl border border-gray-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-500 bg-white appearance-none cursor-pointer transition-colors" defaultValue="">
                      <option value="" disabled>Pilih layanan...</option>
                      <option value="reg">Reguler</option>
                      <option value="exp">Express</option>
                      <option value="sameday">Sameday</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estimasi Biaya & Submit */}
          <div className="bg-[#f0fdf4] p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#dcfce7] text-[#00c853] p-3 rounded-xl border border-emerald-100/50">
                <BanknotesIcon className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold mb-1">Estimasi Biaya</p>
                <h3 className="text-3xl font-black text-[#009b40]">Rp 0</h3>
              </div>
            </div>
            
            <button type="button" className="w-full md:w-auto bg-[#009b40] hover:bg-[#00c853] text-white font-bold py-4 px-12 rounded-xl transition-colors text-sm shadow">
              Buat Pengiriman
            </button>
          </div>
        </form>

      </div>
    </main>
  );
}
