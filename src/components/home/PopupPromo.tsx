"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaInstagram,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/65 backdrop-blur-sm animate-popup-fade overflow-y-auto"
        onClick={() => setIsOpen(false)}
      >
        {/* Main Banner Container (Landscape Banner Ratio seperti referensi) */}
        <div
          className="relative w-full max-w-[1060px] rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] overflow-hidden animate-popup-scale font-sans bg-gradient-to-br from-[#09403E] via-[#0E6663] to-[#062928] text-white border border-white/15 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Tutup Banner"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 bg-white/95 hover:bg-white text-[#09403E] w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all hover:rotate-90 shadow-lg cursor-pointer"
          >
            <FaTimes size={15} />
          </button>

          {/* Decorative 3D Spheres (seperti bola-bola gradasi pada referensi) */}
          <div className="pointer-events-none select-none overflow-hidden absolute inset-0">
            <div className="absolute top-[14%] left-[41%] w-12 h-12 rounded-full bg-gradient-to-br from-[#159893]/60 to-[#062928]/90 shadow-lg opacity-80" />
            <div className="absolute top-[19%] left-[49%] w-16 h-16 rounded-full bg-gradient-to-br from-[#159893]/50 to-[#052221]/95 shadow-xl opacity-80" />
            <div className="absolute bottom-[28%] left-[57%] w-12 h-12 rounded-full bg-gradient-to-br from-[#159893]/60 to-[#052221]/90 shadow-md opacity-75" />
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#159893]/15 blur-3xl" />
          </div>

          {/* MAIN GRID: Left Content (7 cols) + Right Visual & Footer (5 cols) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            {/* ================= LEFT COLUMN (7/12) ================= */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:pr-4 flex flex-col justify-between">
              {/* Top Institution Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 bg-white/10 rounded-full p-1 backdrop-blur-xs">
                  <Image
                    src="/images/logo-pondokk.png"
                    alt="Logo Pondok Pesantren Darut Taufiq"
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase text-white leading-tight">
                    PONDOK PESANTREN & SEKOLAH ISLAM TERPADU
                  </p>
                  <p className="text-xs sm:text-sm font-black tracking-wide uppercase text-[#FFC107] leading-tight">
                    DARUT TAUFIQ JAKARTA UTARA
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-white/80 mt-0.5">
                    QUR&apos;ANI • BERAKHLAK MULIA • BERPRESTASI GLOBAL
                  </p>
                </div>
              </div>

              {/* Main Headline Block */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-2xl font-extrabold uppercase tracking-wider text-[#FFC107] leading-none mb-1">
                  PENDAFTARAN
                </h3>
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-black uppercase tracking-tight text-white leading-[1.05] drop-shadow-sm">
                  SANTRI & SISWA BARU
                </h2>

                {/* Tahun Ajaran White Pill */}
                <div className="mt-2.5 inline-block bg-white text-[#09403E] font-extrabold text-xs sm:text-base px-4 sm:px-5 py-1 rounded-full shadow-md">
                  Tahun Ajaran 2027/2028
                </div>

                {/* Motto Quote */}
                <p className="mt-2.5 text-[11px] sm:text-xs md:text-[13px] font-bold italic text-white/95">
                  &ldquo;Wujudkan Generasi Qur&apos;ani, Berakhlak Mulia, dan Berprestasi Global&rdquo;
                </p>
              </div>

              {/* Middle Row: Gelombang (Left) + Program & Ekskul Box (Right) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch mb-4">
                {/* Gelombang 1 & 2 Stack (4 cols) */}
                <div className="sm:col-span-4 flex flex-col justify-between gap-2.5">
                  {/* Gelombang 1 */}
                  <div className="rounded-xl overflow-hidden shadow-md border border-white/20 bg-white flex-1 flex flex-col">
                    <div className="bg-white text-[#09403E] text-center font-black text-xs sm:text-sm py-1.5 tracking-wide uppercase">
                      GELOMBANG 1
                    </div>
                    <div className="bg-gradient-to-b from-[#FDE047] via-[#FACC15] to-[#EAB308] text-[#09403E] text-center py-2 px-2 flex-1 flex flex-col justify-center">
                      <p className="font-extrabold text-[10px] sm:text-[11px] leading-tight">
                        Oktober - Desember 2026
                      </p>
                      <span className="text-[9px] font-bold bg-[#09403E] text-[#FACC15] px-2 py-0.5 rounded-full mx-auto mt-1">
                        Diskon 20% Uang Gedung
                      </span>
                    </div>
                  </div>

                  {/* Gelombang 2 */}
                  <div className="rounded-xl overflow-hidden shadow-md border border-white/20 bg-white flex-1 flex flex-col">
                    <div className="bg-white text-[#09403E] text-center font-black text-xs sm:text-sm py-1.5 tracking-wide uppercase">
                      GELOMBANG 2
                    </div>
                    <div className="bg-gradient-to-b from-[#FDE047] via-[#FACC15] to-[#EAB308] text-[#09403E] text-center py-2 px-2 flex-1 flex flex-col justify-center">
                      <p className="font-extrabold text-[10px] sm:text-[11px] leading-tight">
                        Januari - Maret 2027
                      </p>
                      <span className="text-[9px] font-bold bg-[#09403E]/90 text-white px-2 py-0.5 rounded-full mx-auto mt-1">
                        Diskon 10% Uang Gedung
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dashed Box: Unit Pendidikan & Ekstrakurikuler (8 cols) */}
                <div className="sm:col-span-8 rounded-2xl border border-dashed border-white/50 bg-[#09403E]/40 backdrop-blur-xs p-3 pt-4 relative grid grid-cols-1 sm:grid-cols-12 gap-3">
                  {/* Sub-column 1: Unit & Program Unggulan (7 cols) */}
                  <div className="sm:col-span-7 flex flex-col">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#FACC15] text-[#09403E] flex items-center justify-center shadow-sm shrink-0">
                        <FaBook className="text-xs" />
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                        JENJANG & PROGRAM
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 flex-1">
                      {/* Card SDIT */}
                      <div className="rounded-lg overflow-hidden border-2 border-white bg-white flex flex-col shadow-sm">
                        <div className="bg-white text-[#09403E] text-center py-1 px-1">
                          <p className="font-black text-[11px] leading-none">SDIT</p>
                          <p className="font-bold text-[7px] text-[#159893] tracking-tight mt-0.5">
                            (KELAS 1 - 6)
                          </p>
                        </div>
                        <div className="bg-gradient-to-b from-[#FDE047] to-[#EAB308] text-[#09403E] p-1.5 text-center flex-1 flex flex-col justify-center text-[8px] font-bold leading-[1.35]">
                          <p>Tahfidz 3-5 Juz</p>
                          <p>Kurikulum Terpadu</p>
                          <p>Coding & Robotika</p>
                          <p>Akhlakul Karimah</p>
                          <p>Putra/Putri Terpisah</p>
                        </div>
                      </div>

                      {/* Card SMPIT */}
                      <div className="rounded-lg overflow-hidden border-2 border-white bg-white flex flex-col shadow-sm">
                        <div className="bg-white text-[#09403E] text-center py-1 px-1">
                          <p className="font-black text-[11px] leading-none">SMPIT</p>
                          <p className="font-bold text-[7px] text-[#159893] tracking-tight mt-0.5">
                            (& PESANTREN)
                          </p>
                        </div>
                        <div className="bg-gradient-to-b from-[#FDE047] to-[#EAB308] text-[#09403E] p-1.5 text-center flex-1 flex flex-col justify-center text-[8px] font-bold leading-[1.35]">
                          <p>Tahfidz 10-30 Juz</p>
                          <p>Bhs Arab & Inggris</p>
                          <p>Bahasa Jepang</p>
                          <p>Kajian Kitab Kuning</p>
                          <p>Asrama Mandiri</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-column 2: Ekstrakurikuler (5 cols) */}
                  <div className="sm:col-span-5 flex flex-col">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#FACC15] text-[#09403E] flex items-center justify-center shadow-sm shrink-0">
                        <FaMedal className="text-xs" />
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                        EKSTRAKURIKULER
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1 flex-1 content-between">
                      {ekstrakurikulerList.map((item, idx) => (
                        <div
                          key={idx}
                          className={`text-[7.5px] font-extrabold text-center py-1 px-1 rounded-full truncate shadow-2xs ${
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-xl overflow-hidden border border-white/20 shadow-md text-[10px] sm:text-[11px]">
                <div className="bg-[#FACC15] text-[#09403E] font-extrabold px-3 py-1.5 flex items-center gap-1.5 shrink-0">
                  <FaMapMarkerAlt className="text-xs shrink-0" />
                  <span>Lokasi PP Darut Taufiq</span>
                </div>
                <div className="bg-[#07302E] text-white font-semibold px-3 py-1.5 flex-1 truncate">
                  Jl. Kb. Baru Metros No. 59, Semper Barat, Cilincing, Jakarta Utara 14130
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN (5/12) ================= */}
            <div className="lg:col-span-5 flex flex-col justify-between relative pt-2 lg:pt-5">
              {/* Top-Right Unit Badges (seperti logo SMK Bisa-Hebat di pojok kanan atas) */}
              <div className="hidden lg:flex items-center justify-end gap-2 pr-14 mb-2">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/20 rounded-full px-3 py-1">
                  <div className="relative w-5 h-5">
                    <Image src="/images/sdit.png" alt="SDIT" fill className="object-contain" />
                  </div>
                  <div className="relative w-5 h-5">
                    <Image src="/images/smpit.png" alt="SMPIT" fill className="object-contain" />
                  </div>
                  <span className="text-[10px] font-black tracking-wider text-[#FACC15] uppercase">
                    SDIT & SMPIT
                  </span>
                </div>
              </div>

              {/* Center Photo Collage + Callout Badges + Ribbon + CTA */}
              <div className="relative flex flex-col items-center justify-center px-4 pt-2 pb-4 flex-1">
                {/* Warm Yellow Circle Backdrop */}
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#F59E0B] to-[#FDE047] shadow-xl flex items-center justify-center relative overflow-hidden border-4 border-white/30">
                  <Image
                    src="/images/images program/program1.jpg"
                    alt="Santri Pondok Pesantren Darut Taufiq"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Overlapping Circular Photo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#FACC15] shadow-xl absolute top-2 right-6 sm:right-10 bg-[#09403E]">
                  <Image
                    src="/images/images program/program2.jpg"
                    alt="Kegiatan Santri Darut Taufiq"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Tilted Callout 1 (Left) */}
                <div className="absolute left-3 sm:left-5 top-1/3 -rotate-6 bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-[#09403E] px-3 py-1.5 rounded-xl shadow-lg border border-white/40 text-center">
                  <p className="text-[9px] font-bold leading-none">Ingin Jadi</p>
                  <p className="text-[11px] sm:text-xs font-black leading-tight">
                    Hafidz Al-Qur&apos;an?
                  </p>
                </div>

                {/* Floating Tilted Callout 2 (Right) */}
                <div className="absolute right-3 sm:right-5 top-[42%] rotate-6 bg-gradient-to-r from-[#FACC15] to-[#F59E0B] text-[#09403E] px-3 py-1.5 rounded-xl shadow-lg border border-white/40 text-center">
                  <p className="text-[9px] font-bold leading-none">Atau Mahir</p>
                  <p className="text-[11px] sm:text-xs font-black leading-tight">
                    Bhs Arab & Jepang?
                  </p>
                </div>

                {/* Ribbon Banner (seperti pita ungu "SMK NU MIFTAHUL FALAH Solusinya!") */}
                <div className="relative z-20 -mt-5 bg-gradient-to-r from-[#09403E] via-[#159893] to-[#09403E] border-2 border-[#FACC15] text-white px-5 py-2 rounded-2xl shadow-xl text-center transform -rotate-1">
                  <p className="text-xs sm:text-sm font-black tracking-wide uppercase text-white">
                    PP DARUT TAUFIQ
                  </p>
                  <p className="text-[11px] sm:text-xs font-extrabold text-[#FACC15]">
                    Solusinya!
                  </p>
                </div>

                {/* White CTA Button "DAFTAR SEKARANG" */}
                <Link
                  href="/ppdb/daftar"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 bg-white hover:bg-[#FACC15] text-[#09403E] font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  DAFTAR SEKARANG
                </Link>
              </div>

              {/* Bottom White Card Area (Link Pendaftaran & Info Lebih Lanjut) */}
              <div className="bg-white text-[#09403E] rounded-tl-3xl p-4 sm:px-5 sm:py-3.5 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-3 border-t-4 border-[#FACC15]">
                {/* Left: Portal Link Box */}
                <Link
                  href="/ppdb"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 bg-[#09403E] hover:bg-[#0E6663] text-white px-3.5 py-2 rounded-xl transition-colors w-full sm:w-auto justify-center sm:justify-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FACC15] text-[#09403E] flex items-center justify-center shrink-0 font-black text-xs">
                    PPDB
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-white/80 font-medium leading-none">
                      Link Pendaftaran Online
                    </p>
                    <p className="text-[11px] font-extrabold text-[#FACC15] leading-tight mt-0.5">
                      ppdb.arkia.id / Info PPDB
                    </p>
                  </div>
                </Link>

                {/* Right: Info Lebih Lanjut */}
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#09403E] mb-1">
                    INFO LEBIH LANJUT
                  </p>
                  <div className="space-y-0.5 text-[10px] font-bold text-gray-700">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <FaWhatsapp className="text-[#159893] text-xs shrink-0" />
                      <span>0822-2888-0972 (Admin PPDB)</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <FaPhoneAlt className="text-[#159893] text-[11px] shrink-0" />
                      <span>(021) 82631191</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <FaGlobe className="text-[#159893] text-xs shrink-0" />
                      <span>info@daruttaufiq.com</span>
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
