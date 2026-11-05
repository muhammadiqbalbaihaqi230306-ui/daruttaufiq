"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGlobe,
  FaBook,
  FaMedal,
  FaPhoneAlt,
} from "@/components/ui/FlaticonIcons";

const ekstrakurikulerList = [
  { name: "Bahasa Jepang", gold: false },
  { name: "Berenang", gold: false },
  { name: "Bulu Tangkis", gold: true },
  { name: "Pencak Silat", gold: false },
  { name: "Futsal", gold: false },
  { name: "Basket", gold: false },
  { name: "Tahfidz Qur'an", gold: true },
  { name: "Bhs Inggris", gold: true },
  { name: "Hadroh / Islami", gold: false },
  { name: "Muhadatsah", gold: false },
  { name: "Kaligrafi", gold: true },
  { name: "Pramuka", gold: true },
];

export default function PopupPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const targetWidth = 760;
      const padding = 24; // 12px kiri & kanan di mobile
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
        .animate-popup-fade {
          animation: popupFadeIn 0.35s ease-out forwards;
        }
        .animate-popup-scale {
          animation: popupScaleUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-popup-fade overflow-hidden"
        onClick={() => setIsOpen(false)}
      >
        {/* Scale Wrapper agar di layar mobile tetap proporsional landscape persis seperti desktop */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
          className="flex items-center justify-center"
        >
          {/* Fixed Landscape Brochure Container (760px) */}
          <div
            className="relative w-[760px] shrink-0 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden animate-popup-scale font-sans bg-gradient-to-br from-[#09403E] via-[#0E6663] to-[#062928] text-white border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Tutup Banner"
              className="absolute top-2.5 right-2.5 z-50 bg-white/95 hover:bg-white text-[#09403E] w-7 h-7 rounded-full flex items-center justify-center transition-all hover:rotate-90 shadow-md cursor-pointer"
            >
              <FaTimes size={13} />
            </button>

            {/* Decorative 3D Spheres */}
            <div className="pointer-events-none select-none overflow-hidden absolute inset-0">
              <div className="absolute top-[12%] left-[42%] w-9 h-9 rounded-full bg-gradient-to-br from-[#159893]/60 to-[#062928]/90 shadow-md opacity-80" />
              <div className="absolute top-[18%] left-[50%] w-12 h-12 rounded-full bg-gradient-to-br from-[#159893]/50 to-[#052221]/95 shadow-lg opacity-80" />
              <div className="absolute bottom-[26%] left-[56%] w-9 h-9 rounded-full bg-gradient-to-br from-[#159893]/60 to-[#052221]/90 shadow-md opacity-75" />
              <div className="absolute -top-16 -left-16 w-52 h-52 rounded-full bg-[#159893]/15 blur-2xl" />
            </div>

            {/* MAIN GRID: Always 12 Columns (Left 7 + Right 5) */}
            <div className="relative z-10 grid grid-cols-12">
              {/* ================= LEFT COLUMN (7/12) ================= */}
              <div className="col-span-7 p-5 pr-3 flex flex-col justify-between">
                {/* Top Institution Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="relative w-9 h-9 shrink-0 bg-white/10 rounded-full p-1 backdrop-blur-xs">
                    <Image
                      src="/images/logo-pondokk.png"
                      alt="Logo Pondok Pesantren Darut Taufiq"
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-wider uppercase text-white leading-tight">
                      PONDOK PESANTREN & SEKOLAH ISLAM TERPADU
                    </p>
                    <p className="text-xs font-black tracking-wide uppercase text-[#FFC107] leading-tight">
                      DARUT TAUFIQ JAKARTA UTARA
                    </p>
                    <p className="text-[8px] font-semibold tracking-widest uppercase text-white/80">
                      QUR&apos;ANI • BERAKHLAK MULIA • BERPRESTASI GLOBAL
                    </p>
                  </div>
                </div>

                {/* Main Headline Block */}
                <div className="mb-3">
                  <h3 className="text-base font-extrabold uppercase tracking-wider text-[#FFC107] leading-none mb-0.5">
                    PENDAFTARAN
                  </h3>
                  <h2 className="text-[28px] font-black uppercase tracking-tight text-white leading-[1.08] drop-shadow-sm">
                    SANTRI & SISWA BARU
                  </h2>

                  {/* Tahun Ajaran White Pill */}
                  <div className="mt-1.5 inline-block bg-white text-[#09403E] font-extrabold text-xs px-3.5 py-0.5 rounded-full shadow-sm">
                    Tahun Ajaran 2027/2028
                  </div>

                  {/* Motto Quote */}
                  <p className="mt-1.5 text-[10.5px] font-semibold italic text-white/95">
                    &ldquo;Wujudkan Generasi Qur&apos;ani, Berakhlak Mulia, dan Berprestasi Global&rdquo;
                  </p>
                </div>

                {/* Middle Row: Gelombang (Left) + Program & Ekskul Box (Right) */}
                <div className="grid grid-cols-12 gap-2.5 items-stretch mb-3">
                  {/* Gelombang 1 & 2 Stack (4 cols) */}
                  <div className="col-span-4 flex flex-col justify-between gap-2">
                    {/* Gelombang 1 */}
                    <div className="rounded-lg overflow-hidden shadow-sm border border-white/20 bg-white flex-1 flex flex-col">
                      <div className="bg-white text-[#09403E] text-center font-black text-[10px] py-1 tracking-wide uppercase">
                        GELOMBANG 1
                      </div>
                      <div className="bg-gradient-to-b from-[#FDE047] via-[#FACC15] to-[#EAB308] text-[#09403E] text-center py-1.5 px-1.5 flex-1 flex flex-col justify-center">
                        <p className="font-extrabold text-[8.5px] leading-tight">
                          Oktober - Desember 2026
                        </p>
                        <span className="text-[7.5px] font-bold bg-[#09403E] text-[#FACC15] px-1.5 py-0.5 rounded-full mx-auto mt-0.5">
                          Diskon 20% Gedung
                        </span>
                      </div>
                    </div>

                    {/* Gelombang 2 */}
                    <div className="rounded-lg overflow-hidden shadow-sm border border-white/20 bg-white flex-1 flex flex-col">
                      <div className="bg-white text-[#09403E] text-center font-black text-[10px] py-1 tracking-wide uppercase">
                        GELOMBANG 2
                      </div>
                      <div className="bg-gradient-to-b from-[#FDE047] via-[#FACC15] to-[#EAB308] text-[#09403E] text-center py-1.5 px-1.5 flex-1 flex flex-col justify-center">
                        <p className="font-extrabold text-[8.5px] leading-tight">
                          Januari - Maret 2027
                        </p>
                        <span className="text-[7.5px] font-bold bg-[#09403E]/90 text-white px-1.5 py-0.5 rounded-full mx-auto mt-0.5">
                          Diskon 10% Gedung
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashed Box: Unit Pendidikan & Ekstrakurikuler (8 cols) */}
                  <div className="col-span-8 rounded-xl border border-dashed border-white/50 bg-[#09403E]/40 backdrop-blur-xs p-2.5 relative grid grid-cols-12 gap-2">
                    {/* Sub-column 1: Unit & Program Unggulan (7 cols) */}
                    <div className="col-span-7 flex flex-col">
                      <div className="flex items-center justify-center gap-1 mb-1.5">
                        <span className="w-4 h-4 rounded-full bg-[#FACC15] text-[#09403E] flex items-center justify-center shadow-xs shrink-0">
                          <FaBook className="text-[9px]" />
                        </span>
                        <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-white">
                          JENJANG & PROGRAM
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 flex-1">
                        {/* Card SDIT */}
                        <div className="rounded-md overflow-hidden border border-white bg-white flex flex-col shadow-xs">
                          <div className="bg-white text-[#09403E] text-center py-0.5 px-1">
                            <p className="font-black text-[9.5px] leading-none">SDIT</p>
                            <p className="font-bold text-[6.5px] text-[#159893] tracking-tight">
                              (KELAS 1 - 6)
                            </p>
                          </div>
                          <div className="bg-gradient-to-b from-[#FDE047] to-[#EAB308] text-[#09403E] p-1 text-center flex-1 flex flex-col justify-center text-[7px] font-bold leading-[1.3]">
                            <p>Tahfidz 3-5 Juz</p>
                            <p>Kurikulum Terpadu</p>
                            <p>Coding & Robotika</p>
                            <p>Akhlakul Karimah</p>
                          </div>
                        </div>

                        {/* Card SMPIT */}
                        <div className="rounded-md overflow-hidden border border-white bg-white flex flex-col shadow-xs">
                          <div className="bg-white text-[#09403E] text-center py-0.5 px-1">
                            <p className="font-black text-[9.5px] leading-none">SMPIT</p>
                            <p className="font-bold text-[6.5px] text-[#159893] tracking-tight">
                              (& PESANTREN)
                            </p>
                          </div>
                          <div className="bg-gradient-to-b from-[#FDE047] to-[#EAB308] text-[#09403E] p-1 text-center flex-1 flex flex-col justify-center text-[7px] font-bold leading-[1.3]">
                            <p>Tahfidz 10-30 Juz</p>
                            <p>Bhs Arab & Inggris</p>
                            <p>Bahasa Jepang</p>
                            <p>Kajian Kitab Kuning</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-column 2: Ekstrakurikuler (5 cols) */}
                    <div className="col-span-5 flex flex-col">
                      <div className="flex items-center justify-center gap-1 mb-1.5">
                        <span className="w-4 h-4 rounded-full bg-[#FACC15] text-[#09403E] flex items-center justify-center shadow-xs shrink-0">
                          <FaMedal className="text-[9px]" />
                        </span>
                        <span className="text-[8.5px] font-extrabold uppercase tracking-wider text-white">
                          EKSTRAKURIKULER
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1 flex-1 content-between">
                        {ekstrakurikulerList.map((item, idx) => (
                          <div
                            key={idx}
                            className={`text-[6.5px] font-extrabold text-center py-0.5 px-1 rounded-full truncate ${
                              item.gold
                                ? "bg-[#FACC15] text-[#09403E]"
                                : "bg-white text-[#09403E]"
                            }`}
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Location Bar */}
                <div className="flex flex-row items-center rounded-lg overflow-hidden border border-white/20 shadow-sm text-[9px]">
                  <div className="bg-[#FACC15] text-[#09403E] font-extrabold px-2.5 py-1 flex items-center gap-1 shrink-0">
                    <FaMapMarkerAlt className="text-[10px] shrink-0" />
                    <span>Lokasi PP Darut Taufiq</span>
                  </div>
                  <div className="bg-[#07302E] text-white font-semibold px-2.5 py-1 flex-1 truncate">
                    Jl. Kb. Baru Metros No. 59, Semper Barat, Cilincing, Jakarta Utara 14130
                  </div>
                </div>
              </div>

              {/* ================= RIGHT COLUMN (5/12) ================= */}
              <div className="col-span-5 flex flex-col justify-between relative pt-3">
                {/* Top-Right Unit Badges */}
                <div className="flex items-center justify-end gap-1.5 pr-11 mb-1">
                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full px-2.5 py-0.5">
                    <div className="relative w-4 h-4">
                      <Image src="/images/sdit.png" alt="SDIT" fill className="object-contain" />
                    </div>
                    <div className="relative w-4 h-4">
                      <Image src="/images/smpit.png" alt="SMPIT" fill className="object-contain" />
                    </div>
                    <span className="text-[8.5px] font-black tracking-wider text-[#FACC15] uppercase">
                      SDIT & SMPIT
                    </span>
                  </div>
                </div>

                {/* Center Photo Collage + Callout Badges + Ribbon + CTA */}
                <div className="relative flex flex-col items-center justify-center px-3 pt-1 pb-2.5 flex-1">
                  {/* Warm Yellow Circle Backdrop */}
                  <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FDE047] shadow-lg flex items-center justify-center relative overflow-hidden border-3 border-white/30">
                    <Image
                      src="/images/images program/program1.jpg"
                      alt="Santri Pondok Pesantren Darut Taufiq"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Secondary Overlapping Circular Photo */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#FACC15] shadow-lg absolute top-1 right-7 bg-[#09403E]">
                    <Image
                      src="/images/images program/program2.jpg"
                      alt="Kegiatan Santri Darut Taufiq"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Tilted Callout 1 (Left) */}
                  <div className="absolute left-3 top-[30%] -rotate-6 bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-[#09403E] px-2 py-1 rounded-lg shadow-md border border-white/40 text-center">
                    <p className="text-[7.5px] font-bold leading-none">Ingin Jadi</p>
                    <p className="text-[9px] font-black leading-tight">
                      Hafidz Al-Qur&apos;an?
                    </p>
                  </div>

                  {/* Floating Tilted Callout 2 (Right) */}
                  <div className="absolute right-3 top-[40%] rotate-6 bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-[#09403E] px-2 py-1 rounded-lg shadow-md border border-white/40 text-center">
                    <p className="text-[7.5px] font-bold leading-none">Atau Mahir</p>
                    <p className="text-[9px] font-black leading-tight">
                      Bhs Arab & Jepang?
                    </p>
                  </div>

                  {/* Ribbon Banner */}
                  <div className="relative z-20 -mt-3.5 bg-gradient-to-r from-[#09403E] via-[#159893] to-[#09403E] border-2 border-[#FACC15] text-white px-4 py-1 rounded-xl shadow-lg text-center transform -rotate-1">
                    <p className="text-[10px] font-black tracking-wide uppercase text-white leading-tight">
                      PP DARUT TAUFIQ
                    </p>
                    <p className="text-[9px] font-extrabold text-[#FACC15] leading-tight">
                      Solusinya!
                    </p>
                  </div>

                  {/* White CTA Button "DAFTAR SEKARANG" */}
                  <Link
                    href="/ppdb/daftar"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 bg-white hover:bg-[#FACC15] text-[#09403E] font-black text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    DAFTAR SEKARANG
                  </Link>
                </div>

                {/* Bottom White Card Area */}
                <div className="bg-white text-[#09403E] rounded-tl-2xl px-3.5 py-2.5 shadow-inner flex flex-row items-center justify-between gap-2 border-t-3 border-[#FACC15]">
                  {/* Left: Portal Link Box */}
                  <Link
                    href="/ppdb"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 bg-[#09403E] hover:bg-[#0E6663] text-white px-2.5 py-1.5 rounded-lg transition-colors justify-start"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#FACC15] text-[#09403E] flex items-center justify-center shrink-0 font-black text-[9px]">
                      PPDB
                    </div>
                    <div className="text-left">
                      <p className="text-[7.5px] text-white/80 font-medium leading-none">
                        Link Pendaftaran Online
                      </p>
                      <p className="text-[9px] font-extrabold text-[#FACC15] leading-tight mt-0.5">
                        ppdb.arkia.id / Info PPDB
                      </p>
                    </div>
                  </Link>

                  {/* Right: Info Lebih Lanjut */}
                  <div className="text-left">
                    <p className="text-[8px] font-black uppercase tracking-wider text-[#09403E] mb-0.5">
                      INFO LEBIH LANJUT
                    </p>
                    <div className="space-y-0.5 text-[8px] font-bold text-gray-700">
                      <div className="flex items-center justify-start gap-1">
                        <FaWhatsapp className="text-[#159893] text-[10px] shrink-0" />
                        <span>0822-2888-0972</span>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <FaPhoneAlt className="text-[#159893] text-[9px] shrink-0" />
                        <span>(021) 82631191</span>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <FaGlobe className="text-[#159893] text-[10px] shrink-0" />
                        <span>info@daruttaufiq.com</span>
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
