'use client';

import { poppins } from '@/app/ui/fonts';
import { CubeIcon, MapPinIcon, TruckIcon, ChatBubbleLeftEllipsisIcon, PhotoIcon } from '@heroicons/react/24/outline'; 
import { useState } from 'react';

export default function PengirimanTabs() {
  const [activeTab, setActiveTab] = useState<'menunggu' | 'aktif' | 'selesai'>('aktif');

  return (
    <div className={`max-w-4xl mx-auto px-4 mt-10 ${poppins.className}`}>
      
      {/* Header */}
      <div className="mb-8 pl-1">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pengiriman Saya</h1>
        <p className="text-gray-500 text-sm font-medium">Kelola dan lacak semua pengiriman Anda</p>
      </div>

      {/* Tabs */}
      <div className="flex w-full bg-white border border-gray-100 rounded-full p-2 shadow-sm mb-10 overflow-hidden">
        <button 
          onClick={() => setActiveTab('menunggu')}
          className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all ${activeTab === 'menunggu' ? 'bg-[#ccfbf1] text-emerald-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          Menunggu (1)
        </button>
        <button 
          onClick={() => setActiveTab('aktif')}
          className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all ${activeTab === 'aktif' ? 'bg-[#dcfce7] text-[#00c853] shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          Aktif (1)
        </button>
        <button 
          onClick={() => setActiveTab('selesai')}
          className={`flex-1 py-2.5 text-sm font-bold rounded-full transition-all ${activeTab === 'selesai' ? 'bg-gray-100 text-gray-700 shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          Selesai (1)
        </button>
      </div>

      {/* List Content */}
      <div className="space-y-6">
        {activeTab === 'menunggu' && (
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8">
             <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                 <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl border border-emerald-100/50">
                   <CubeIcon className="w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-900">Dokumen Penting</h3>
                   <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">Resi: <span className="text-gray-700">CGK2024040603</span></p>
                 </div>
               </div>
               <div className="bg-amber-100 text-amber-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
                 Menunggu
               </div>
             </div>
             
             <div className="flex flex-col gap-3 mb-8 pl-[64px]">
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <MapPinIcon className="w-5 h-5 text-gray-400" />
                 <span>Yogyakarta &rarr; Semarang</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <TruckIcon className="w-5 h-5 text-gray-400" />
                 <span>Kurir: <span className="text-gray-900">Budi Santoso</span></span>
               </div>
             </div>

             <button className="w-full bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#00c853] font-bold py-3.5 rounded-xl border border-emerald-100 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
               <MapPinIcon className="w-5 h-5" strokeWidth={2} /> Lacak
             </button>
          </div>
        )}

        {activeTab === 'aktif' && (
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8">
             <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                 <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl border border-emerald-100/50">
                   <CubeIcon className="w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-900">Paket Elektronik</h3>
                   <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">Resi: <span className="text-gray-700">CGK2024040601</span></p>
                 </div>
               </div>
               <div className="bg-fuchsia-100 text-fuchsia-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
                 Dalam Perjalanan
               </div>
             </div>
             
             <div className="flex flex-col gap-3 mb-8 pl-[64px]">
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <MapPinIcon className="w-5 h-5 text-gray-400" />
                 <span>Jakarta Pusat &rarr; Bandung</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <TruckIcon className="w-5 h-5 text-gray-400" />
                 <span>Kurir: <span className="text-gray-900">Budi Santoso</span></span>
               </div>
             </div>

             <div className="flex gap-3">
               <button className="flex-1 bg-[#f0fdf4] hover:bg-[#dcfce7] text-[#00c853] font-bold py-3.5 rounded-xl border border-emerald-100 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
                 <MapPinIcon className="w-5 h-5" strokeWidth={2} /> Lacak
               </button>
               <button className="w-14 flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-500 transition-colors shadow-sm">
                 <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
               </button>
             </div>
          </div>
        )}

        {activeTab === 'selesai' && (
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8">
             <div className="flex justify-between items-start mb-6">
               <div className="flex items-center gap-4">
                 <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl border border-emerald-100/50">
                   <CubeIcon className="w-6 h-6" strokeWidth={2} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-gray-900">Paket Pakaian</h3>
                   <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wide">Resi: <span className="text-gray-700">CGK2024040602</span></p>
                 </div>
               </div>
               <div className="bg-[#00c853] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
                 Terkirim
               </div>
             </div>
             
             <div className="flex flex-col gap-3 mb-8 pl-[64px]">
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <MapPinIcon className="w-5 h-5 text-gray-400" />
                 <span>Surabaya &rarr; Jakarta Selatan</span>
               </div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                 <TruckIcon className="w-5 h-5 text-gray-400" />
                 <span>Kurir: <span className="text-gray-900">Ahmad Wijaya</span></span>
               </div>
             </div>

             <div className="flex flex-col gap-3">
               <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2 text-sm shadow-sm">
                 <MapPinIcon className="w-5 h-5 text-gray-600" strokeWidth={2} /> Lacak
               </button>
               <div className="w-full bg-[#f0fdf4] text-[#009b40] font-bold py-4 px-5 rounded-xl border border-emerald-100 flex items-center gap-3 text-sm shadow-inner">
                 <PhotoIcon className="w-6 h-6" /> Bukti pengiriman tersedia
               </div>
             </div>
          </div>
        )}

      </div>

    </div>
  );
}
