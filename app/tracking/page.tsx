import Navbar from '@/app/ui/navbar';
import { poppins } from '@/app/ui/fonts';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

export default function TrackingPage() {
  // Hardcoded minimal 5 data
  const tableData = [
    { no: 1, resi: 'CGK-001001', pengirim: 'Siti Aminah', tujuan: 'Jakarta', status: 'Menunggu', tgl: '12 Apr 2024' },
    { no: 2, resi: 'CGK-001002', pengirim: 'Budi Santoso', tujuan: 'Surabaya', status: 'Selesai', tgl: '11 Apr 2024' },
    { no: 3, resi: 'CGK-001003', pengirim: 'Toko Makmur', tujuan: 'Bandung', status: 'Gagal', tgl: '10 Apr 2024' },
    { no: 4, resi: 'CGK-001004', pengirim: 'Ahmad Wijaya', tujuan: 'Yogyakarta', status: 'Dalam Perjalanan', tgl: '13 Apr 2024' },
    { no: 5, resi: 'CGK-001005', pengirim: 'Riana Putri', tujuan: 'Bali', status: 'Dalam Perjalanan', tgl: '14 Apr 2024' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/tracking" />
      
      <div className={`max-w-5xl mx-auto px-4 mt-12 ${poppins.className}`}>
        
        {/* Form Input Resi */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-emerald-100 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Pencarian Resi Cepat</h2>
          <div className="relative flex items-center w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="Masukkan nomor resi..."
              className="w-full border border-gray-200 rounded-xl py-3 pl-4 pr-32 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-gray-700 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-[#00c853] hover:bg-[#00ab44] text-white font-bold px-6 rounded-lg flex items-center gap-2 transition-colors text-sm shadow-sm">
              <MagnifyingGlassIcon className="w-5 h-5" strokeWidth={2} />
              Cari
            </button>
          </div>
        </div>

        {/* Tabel Data Hardcoded */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Daftar Status Pengiriman Aktif</h2>
            <span className="text-xs font-bold text-gray-500 tracking-wider">TOTAL: 5 DATA</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">No</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Nomor Resi</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pengirim</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tujuan</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableData.map((row) => (
                  <tr key={row.no} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-500">{row.no}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.resi}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.pengirim}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.tujuan}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        row.status === 'Selesai' ? 'bg-[#dcfce7] text-[#00c853]' : 
                        row.status === 'Gagal' ? 'bg-red-100 text-red-600' :
                        row.status === 'Menunggu' ? 'bg-amber-100 text-amber-600' :
                        'bg-fuchsia-100 text-fuchsia-600' // Dalam Perjalanan
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{row.tgl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
