import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaMoneyCheckDollar, FaWallet, FaBuildingColumns, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Biaya Pendidikan | Pondok Pesantren Darut Taufiq",
  description: "Rincian informasi biaya pendidikan dan pendaftaran santri baru Pondok Pesantren Darut Taufiq.",
};

const biayaAwal = [
  { label: "Uang Gedung & Pembangunan", amount: "Rp 8.000.000", desc: "Dibayarkan sekali saat masuk" },
  { label: "Seragam Santri (5 Stel)", amount: "Rp 1.500.000", desc: "Termasuk jas almamater dan olahraga" },
  { label: "Buku & Kitab (Tahun Pertama)", amount: "Rp 1.200.000", desc: "Paket kitab kuning dan buku pelajaran" },
  { label: "Fasilitas Asrama", amount: "Rp 1.800.000", desc: "Ranjang, kasur, bantal, lemari pakaian" },
  { label: "Administrasi Pendaftaran", amount: "Rp 350.000", desc: "Formulir dan tes masuk" },
];

const biayaBulanan = [
  { label: "SPP & Program Pendidikan", amount: "Rp 800.000" },
  { label: "Makan (3x Sehari)", amount: "Rp 900.000" },
  { label: "Laundry & Kebersihan", amount: "Rp 150.000" },
  { label: "Klinik & Kesehatan", amount: "Rp 50.000" },
];

export default function BiayaPage() {
  const totalBiayaAwal = biayaAwal.reduce((acc, curr) => acc + parseInt(curr.amount.replace(/[^0-9]/g, '')), 0);
  const totalBiayaBulanan = biayaBulanan.reduce((acc, curr) => acc + parseInt(curr.amount.replace(/[^0-9]/g, '')), 0);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0110.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Informasi Biaya
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Kami berkomitmen memberikan fasilitas dan pendidikan terbaik dengan biaya yang transparan dan terjangkau sebagai investasi pendidikan dunia dan akhirat putra-putri Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Rincian Biaya Pendidikan
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
              Berikut adalah rincian estimasi biaya masuk (Uang Pangkal) dan biaya bulanan (SPP) untuk Tahun Ajaran 2024/2025. Biaya dapat disesuaikan berdasarkan gelombang pendaftaran.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Card Biaya Masuk */}
            <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 bg-primary text-white py-1.5 px-6 rounded-bl-2xl font-semibold text-sm">
                Dibayar Sekali
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl">
                  <FaBuildingColumns />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Biaya Masuk Awal</h3>
                  <p className="text-text-muted text-sm mt-1">Uang Pangkal & Perlengkapan</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8 border-t border-gray-100 pt-6">
                {biayaAwal.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-start gap-4">
                    <div className="flex gap-3">
                      <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">{item.label}</p>
                        <p className="text-xs text-text-muted">{item.desc}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-secondary whitespace-nowrap">{item.amount}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-surface p-5 rounded-2xl flex justify-between items-center border border-gray-100 mt-auto">
                <span className="font-bold text-gray-700">Total Biaya Masuk</span>
                <span className="text-2xl font-bold text-primary">{formatRupiah(totalBiayaAwal)}</span>
              </div>
            </div>

            {/* Card Biaya Bulanan */}
            <div className="bg-secondary text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl">
                  <FaWallet />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Biaya Bulanan (SPP)</h3>
                  <p className="text-white/70 text-sm mt-1">Biaya Operasional Santri</p>
                </div>
              </div>

              <ul className="space-y-5 mb-8 border-t border-white/10 pt-6 relative z-10">
                {biayaBulanan.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center gap-4">
                    <div className="flex gap-3 items-center">
                      <FaCheckCircle className="text-primary/70" />
                      <p className="font-medium text-white/90">{item.label}</p>
                    </div>
                    <span className="font-semibold whitespace-nowrap">{item.amount}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center border border-white/20 relative z-10 mt-auto">
                <span className="font-bold text-white/90">Total Per Bulan</span>
                <span className="text-2xl font-bold text-white">{formatRupiah(totalBiayaBulanan)}</span>
              </div>
              
              <div className="mt-8 text-center relative z-10">
                 <p className="text-xs text-white/60">
                   *Biaya bulanan dibayarkan selambat-lambatnya tanggal 10 setiap bulan.
                 </p>
              </div>
            </div>
          </div>

          {/* Info Pembayaran Rekening */}
          <div className="mt-16 bg-surface p-8 lg:p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary shadow-md text-3xl flex-shrink-0">
                <FaMoneyBillTransfer />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-1">Metode Pembayaran</h4>
                <p className="text-text-muted text-sm md:text-base">
                  Pembayaran dapat dilakukan melalui transfer bank ke rekening resmi Pondok Pesantren atau tunai di kantor administrasi keuangan.
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 min-w-[280px]">
              <p className="text-xs text-text-muted font-semibold font-sans uppercase mb-2">Rekening Resmi</p>
              <div className="flex items-center gap-4">
                 <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                    <FaBuildingColumns size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium">Bank Syariah Indonesia (BSI)</p>
                    <p className="font-bold text-secondary text-lg">7182 999 888</p>
                    <p className="text-xs text-gray-500">a.n Yayasan Darut Taufiq</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
