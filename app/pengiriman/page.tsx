import Navbar from '@/app/ui/navbar';
import PengirimanTabs from '@/app/ui/pengiriman-tabs';

export default function PengirimanPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Navbar activeRoute="/pengiriman" />
      <PengirimanTabs />
    </main>
  );
}
