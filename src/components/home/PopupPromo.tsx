"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTimes,
  FaCalendarAlt,
  FaGlobe,
  FaMosque,
  FaLaptopCode,
  FaSearch,
  FaBars,
  FaWhatsapp,
} from "@/components/ui/FlaticonIcons";

export default function PopupPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const targetWidth = 760;
      const padding = 24;
      if (vw < targetWidth + padding) {
        setScale((vw - padding) / targetWidth);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => {
      window.removeEventListener("resize", updateScale);
      clearTimeout(timer);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-18deg); }
          50% { transform: translateY(-6px) rotate(-14deg); }
        }
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(16deg); }
          50% { transform: translateY(5px) rotate(20deg); }
        }
        .animate-popup-fade {
          animation: popupFadeIn 0.35s ease-out forwards;
        }
        .animate-popup-scale {
          animation: popupScaleUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float-ticket-1 {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-float-ticket-2 {
          animation: floatSlowReverse 4.5s ease-in-out infinite;
        }
      `}</style>

      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-popup-fade overflow-hidden"
        onClick={() => setIsOpen(false)}
      >
        {/* Auto-scale wrapper agar di mobile tetap landscape seperti desktop */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
          className="flex items-center justify-center"
        >
          {/* Main SuperApp-style Banner Container (760px x 375px) */}
          <div
            className="relative w-[760px] h-[375px] shrink-0 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] overflow-hidden animate-popup-scale font-sans bg-gradient-to-r from-[#159893] via-[#0E6663] to-[#09403E] text-white border border-white/20 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Popup"
              className="absolute top-3.5 right-3.5 z-50 bg-white/95 hover:bg-white text-[#09403E] w-8 h-8 rounded-full flex items-center justify-center transition-all hover:rotate-90 shadow-lg cursor-pointer"
            >
              <FaTimes size={14} />
            </button>

            {/* ================= BACKGROUND CONCENTRIC CIRCLES (Gaya SuperApp) ================= */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {/* Soft glow kiri atas */}
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

              {/* Concentric layered circles di sisi kanan belakang HP */}
              <div className="absolute top-1/2 right-[-80px] -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#09403E]/45 border border-white/5" />
              <div className="absolute top-1/2 right-[-30px] -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#09403E]/60 border border-white/10 shadow-inner" />
              <div className="absolute top-1/2 right-[20px] -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[#072d2b]/75 border border-white/10" />

              {/* Siluet Masjid halus di kiri bawah (seperti popup Imam Bukhari) */}
              <div className="absolute -bottom-6 left-6 opacity-10 flex items-end gap-2">
                <FaMosque size={95} />
                <FaMosque size={65} />
              </div>
            </div>

            {/* ================= FLOATING 3D COINS & TICKETS (Gaya SuperApp) ================= */}
            <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
              {/* Ticket Kiri Atas HP */}
              <div className="animate-float-ticket-1 absolute top-5 right-[258px] w-16 h-21 rounded-xl bg-gradient-to-br from-[#34d399] to-[#159893] border border-white/40 shadow-[0_12px_25px_rgba(0,0,0,0.28)] flex flex-col items-center justify-center p-1.5">
                <div className="w-full border-b border-dashed border-white/50 pb-1 mb-1 text-center">
                  <span className="text-[7px] font-extrabold uppercase tracking-wider text-white/90 block">
                    DISKON
                  </span>
                </div>
                <span className="text-xl font-black text-white leading-none drop-shadow">
                  20%
                </span>
              </div>

              {/* Ticket Kanan Tengah HP */}
              <div className="animate-float-ticket-2 absolute top-32 right-3 w-14 h-20 rounded-xl bg-gradient-to-br from-[#2dd4bf] to-[#0E6663] border border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-1 opacity-90">
                <div className="w-full border-b border-dashed border-white/40 pb-0.5 mb-1 text-center">
                  <span className="text-[6px] font-bold uppercase text-white/90 block">
                    PPDB
                  </span>
                </div>
                <span className="text-sm font-black text-white leading-none">
                  27/28
                </span>
              </div>

              {/* Koin Emas 1 (Kiri Bawah HP) */}
              <div className="absolute bottom-14 right-[268px] w-11 h-11 rounded-full bg-gradient-to-tr from-[#D97706] via-[#FBBF24] to-[#FEF08A] p-1 shadow-[0_8px_20px_rgba(0,0,0,0.35)] rotate-12">
                <div className="w-full h-full rounded-full border-2 border-[#B45309]/40 bg-gradient-to-br from-[#FDE047] to-[#D97706] flex items-center justify-center">
                  <span className="text-[10px] font-black text-[#78350F]">★</span>
                </div>
              </div>

              {/* Koin Emas 2 (Kiri Tengah HP - Miring) */}
              <div className="absolute top-36 right-[295px] w-7 h-3.5 rounded-full bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#B45309] shadow-md -rotate-35 border border-yellow-200/60" />

              {/* Koin Emas 3 (Atas Kanan HP) */}
              <div className="absolute top-5 right-10 w-10 h-5 rounded-full bg-gradient-to-r from-[#FEF08A] via-[#F59E0B] to-[#92400E] shadow-lg rotate-25 border border-yellow-200/60" />

              {/* Koin Emas 4 (Kanan Bawah) */}
              <div className="absolute bottom-24 right-4 w-6 h-3 rounded-full bg-gradient-to-r from-[#FDE047] to-[#B45309] shadow-md rotate-20" />
            </div>

            {/* ================= CONTENT GRID ================= */}
            <div className="relative z-30 grid grid-cols-12 h-full">
              {/* --------- KOLOM KIRI: TEKS IMAM BUKHARI DALAM GAYA SUPERAPP --------- */}
              <div className="col-span-7 pl-8 pr-3 py-5 flex flex-col justify-between h-full">
                {/* Brand Header */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white p-1 shadow-md flex items-center justify-center shrink-0">
                    <Image
                      src="/images/logo-pondokk.png"
                      alt="Logo Pondok Pesantren Darut Taufiq"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="h-5 w-[1.5px] bg-white/40" />
                  <span className="text-xs font-bold tracking-wide text-white/95">
                    Pondok Pesantren Darut Taufiq
                  </span>
                </div>

                {/* Main Typography (Gaya SuperApp + Isi Imam Bukhari) */}
                <div>
                  <p className="text-sm font-medium text-white/95 tracking-wide leading-tight">
                    Penerimaan Santri Baru • Tahun Ajaran 2027/2028
                  </p>
                  <h2 className="text-[32px] font-black text-white tracking-tight leading-[1.05] mt-0.5 drop-shadow-sm uppercase">
                    PEMBUKAAN GELOMBANG II
                  </h2>

                  {/* Split Pill Badge: Jadwal Dibuka & Periode Pendaftaran */}
                  <div className="mt-2.5 inline-flex items-center rounded-full border-2 border-white bg-[#09403E]/35 backdrop-blur-xs shadow-md overflow-hidden">
                    <div className="bg-white text-[#09403E] px-3 py-1 rounded-full flex items-center gap-1.5 font-extrabold text-[11px] shadow-xs">
                      <FaCalendarAlt className="text-[#159893] text-xs" />
                      <span>Dibuka 20 Oktober 2026</span>
                    </div>
                    <div className="px-3 py-1 text-white font-bold text-[10.5px] tracking-wide">
                      20 Okt - 18 Nov 2026
                    </div>
                  </div>

                  {/* 2 Model Tes Seleksi (Isi Imam Bukhari) */}
                  <div className="mt-3 max-w-[390px]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-white/90">
                        2 MODEL TES SELEKSI:
                      </span>
                      <div className="h-[1px] bg-white/25 flex-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/25 rounded-xl px-2.5 py-1.5">
                        <div className="w-7 h-7 rounded-lg bg-white text-[#09403E] flex items-center justify-center shrink-0 shadow-xs">
                          <FaMosque className="text-xs text-[#159893]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white leading-none">
                            OFFLINE
                          </p>
                          <p className="text-[8px] text-white/85 leading-tight mt-0.5">
                            Khusus pendaftar Pulau Jawa
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/25 rounded-xl px-2.5 py-1.5">
                        <div className="w-7 h-7 rounded-lg bg-white text-[#09403E] flex items-center justify-center shrink-0 shadow-xs">
                          <FaLaptopCode className="text-xs text-[#159893]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white leading-none">
                            ONLINE
                          </p>
                          <p className="text-[8px] text-white/85 leading-tight mt-0.5">
                            Khusus pendaftar luar Pulau Jawa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solid White CTA Button (Gaya SuperApp) */}
                <div>
                  <Link
                    href="/ppdb"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#09403E] font-black text-xs tracking-wide px-5 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.22)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-0.5 uppercase"
                  >
                    <FaGlobe className="text-[#159893] text-sm" />
                    <span>INFO PENDAFTARAN: PPDB.ARKIA.ID</span>
                  </Link>
                </div>
              </div>

              {/* --------- KOLOM KANAN: LAYAR HP MENAMPILKAN HALAMAN MOBILE /PPDB PERSIS SCREENSHOT --------- */}
              <div className="col-span-5 relative flex items-end justify-center pr-6">
                {/* Smartphone Frame Miring */}
                <div className="relative w-[228px] h-[348px] -mb-8 transform rotate-[7deg] rounded-[2rem] bg-[#071f1e] p-[7px] shadow-[-15px_20px_45px_rgba(0,0,0,0.55)] border-2 border-white/25">
                  {/* Notch / Speaker HP */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#071f1e] rounded-full z-30 flex items-center justify-center">
                    <div className="w-6 h-1 bg-gray-700 rounded-full" />
                  </div>

                  {/* Layar Dalam HP: Tampilan Mobile Halaman /ppdb */}
                  <div className="w-full h-full bg-[#09403E] rounded-[1.6rem] overflow-hidden flex flex-col text-[#09403E] relative">
                    {/* Mobile Navbar Darut Taufiq */}
                    <div className="bg-[#09403E] pt-5 pb-2 px-3 flex items-center justify-between text-white border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Image
                          src="/images/logo-pondokk.png"
                          alt="Logo Darut Taufiq"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <div className="font-serif leading-none">
                          <p className="text-[7.5px] font-bold tracking-wider uppercase text-white">
                            DARUT TAUFIQ
                          </p>
                          <p className="text-[4.5px] tracking-[0.18em] uppercase text-white/80 mt-0.5">
                            PONDOK PESANTREN
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <FaSearch className="text-[8px]" />
                        <FaBars className="text-[9px]" />
                      </div>
                    </div>

                    {/* White Rounded-t Container Halaman /ppdb */}
                    <div className="flex-1 bg-white rounded-t-xl mx-1.5 mt-1 pt-3 px-2.5 pb-2 flex flex-col relative overflow-hidden">
                      {/* Section Heading */}
                      <div className="text-center mb-2">
                        <h3 className="text-[10.5px] font-extrabold text-[#09403E] leading-tight">
                          Gelombang Pendaftaran Santri Baru
                        </h3>
                        <p className="text-[6px] text-[#6d7685] leading-relaxed mt-0.5 px-1">
                          Pendaftaran dapat ditutup lebih awal jika kuota kelas telah terpenuhi. Daftarkan putra-putri Anda segera!
                        </p>
                      </div>

                      {/* Card: Gelombang 1 (Early Bird) persis screenshot mobile /ppdb */}
                      <div className="rounded-xl border-[1.5px] border-[#159893] p-2.5 flex-1 flex flex-col justify-between bg-white shadow-xs">
                        <div>
                          {/* Header Row: Title & Recommended Badge */}
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="text-[8px] font-extrabold text-[#09403E]">
                              Gelombang 1 (Early Bird)
                            </span>
                            <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full bg-[#159893]/10 text-[#159893] border border-[#159893]/20">
                              Recommended
                            </span>
                          </div>

                          {/* Pricing / Promo Block */}
                          <div className="mb-1.5">
                            <div className="flex items-baseline gap-1">
                              <span className="text-gray-400 line-through text-[8px] font-medium">
                                Normal
                              </span>
                              <span className="text-[15px] font-black text-[#09403E] tracking-tight leading-none">
                                Diskon 20%
                              </span>
                            </div>
                            <p className="text-[6px] text-[#6d7685] mt-0.5">
                              Potongan Uang Gedung • Periode Okt - Des 2026
                            </p>
                          </div>

                          {/* Kuota Pill */}
                          <div className="flex items-center gap-1 text-[6.5px] font-bold text-[#09403E] mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#09403E] text-white flex items-center justify-center text-[6px] font-bold shrink-0">
                              +
                            </span>
                            <span>Kuota Terbatas (30 Santri/Kelas)</span>
                          </div>

                          {/* Button Daftar Gelombang Ini */}
                          <div className="w-full py-1.5 bg-[#159893] text-white font-bold rounded-md text-[7px] text-center shadow-2xs mb-2">
                            Daftar Gelombang Ini
                          </div>

                          {/* Checklist */}
                          <ul className="space-y-1 text-[6px] text-gray-700 border-t border-gray-100 pt-1.5">
                            <li className="flex items-center gap-1">
                              <span className="text-[#09403E] font-bold">✓</span>
                              <span>Potongan 20% Uang Gedung / Pangkal</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span className="text-[#09403E] font-bold">✓</span>
                              <span>Prioritas pemilihan kamar asrama santri</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span className="text-[#09403E] font-bold">✓</span>
                              <span>Akses Jalur Beasiswa Tahfidz & Prestasi</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <span className="text-[#09403E] font-bold">✓</span>
                              <span>Biaya formulir & administrasi awal</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Floating WhatsApp Button di pojok kanan bawah layar HP */}
                      <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                        <FaWhatsapp className="text-[9px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
