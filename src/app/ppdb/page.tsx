import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaWhatsapp, FaFileAlt, FaUserGraduate, FaCheckCircle, FaCalendarAlt, FaClipboardList, FaPhoneAlt, FaMoneyBillWave, FaArrowRight, FaExternalLinkAlt, FaAward, FaBookQuran, FaBuildingColumns, FaUserCheck, FaClock } from "@/components/ui/FlaticonIcons";

export const metadata = {
  title: "PPDB 2027/2028 | Pondok Pesantren Darut Taufiq",
  description: "Informasi Pendaftaran Peserta Didik Baru (PPDB) Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq Tahun Ajaran 2027/2028.",
};

const gelombang = [
  {
    nama: "Gelombang 1 (Early Bird)",
    periode: "Oktober - Desember 2026",
    status: "Dibuka",
    isActive: true,
    promo: "Potongan Uang Gedung 20%",
    kuota: "Kuota Terbatas (30 Santri/Kelas)",
    keterangan: "Pendaftaran gelombang utama dengan fasilitas prioritas pemilihan kamar & beasiswa prestasi.",
  },
  {
    nama: "Gelombang 2 (Reguler)",
    periode: "Januari - Maret 2027",
    status: "Segera Dibuka",
    isActive: false,
    promo: "Potongan Uang Gedung 10%",
    kuota: "Sisa Kuota Gelombang 1",
    keterangan: "Pendaftaran gelombang reguler sesuai sisa kuota yang tersedia.",
  },
  {
    nama: "Gelombang 3 (Terakhir)",
    periode: "April - Mei 2027",
    status: "Akan Datang",
    isActive: false,
    promo: "Biaya Normal",
    kuota: "Sisa Kuota Terakhir",
    keterangan: "Pendaftaran ditutup sewaktu-waktu apabila kuota seluruh kelas telah terpenuhi.",
  },
];

const alurPendaftaran = [
  {
    step: "01",
    label: "Langkah 01",
    title: "Pendaftaran Online",
    desc: "Akses website resmi PPDB di ppdb.arkia.id, buat akun baru, dan isi formulir biodata calon santri secara lengkap.",
    icon: FaFileAlt,
  },
  {
    step: "02",
    label: "Langkah 02",
    title: "Biaya Formulir",
    desc: "Lakukan pembayaran biaya formulir dan administrasi pendaftaran melalui transfer bank virtual account resmi.",
    icon: FaMoneyBillWave,
  },
  {
    step: "03",
    label: "Langkah 03",
    title: "Unggah Dokumen",
    desc: "Upload berkas persyaratan seperti Kartu Keluarga, Akta Kelahiran, Pas Foto, dan surat keterangan sehat.",
    icon: FaClipboardList,
  },
  {
    step: "04",
    label: "Langkah 04",
    title: "Tes Seleksi & Wawancara",
    desc: "Mengikuti tes pemetaan tahsin/tahfidz Al-Qur'an, tes akademik dasar, serta wawancara komitmen santri dan wali.",
    icon: FaBookQuran,
  },
  {
    step: "05",
    label: "Langkah 05",
    title: "Pengumuman Hasil",
    desc: "Hasil kelulusan diumumkan melalui portal akun PPDB masing-masing dan pesan konfirmasi WhatsApp resmi.",
    icon: FaUserCheck,
  },
  {
    step: "06",
    label: "Langkah 06",
    title: "Daftar Ulang & Orientasi",
    desc: "Penyelesaian administrasi daftar ulang, seragam, dan persiapan masuk pesantren (Khutbatul Arsy).",
    icon: FaBuildingColumns,
  },
];

const syaratDokumen = [
  {
    title: "Identitas Diri & Formulir",
    items: [
      "Mengisi formulir pendaftaran Lengkap",
      "Foto diri dengan ukuran 3×4, 4 lembar",
      "Foto copy KTP wali santri ( 2 lembar)",
      "Foto copy Akte Kelahiran ( 2 lembar)",
    ],
  },
  {
    title: "Dokumen Akademik",
    items: [
      "Foto copy ijazah terleglisir ( 2 lembar)",
      "Foto copy SKL ( 2 lembar)",
      "Surat pindah sekolah dan daftar nilai/Raport siswa (bagi siswa pindahan)",
    ],
  },
  {
    title: "Bantuan & Berkas Tambahan",
    items: [
      "Foto copy kartu Indonesia pintar (KJP) (2 lembar jika sudah memiliki)",
      "Surat keterangan sehat dari dokter/Puskesmas",
      "Surat komitmen dan tata tertib pesantren",
    ],
  },
];

const unitPilihan = [
  {
    nama: "SDIT Darut Taufiq",
    jenjang: "Sekolah Dasar Islam Terpadu (Kelas 1 - 6)",
    fokus: ["Target Tahfidz 3-5 Juz", "Kurikulum Terpadu & Cambridge", "Dasar Coding & Robotika", "Kelas Terpisah Putra/Putri"],
    href: "/sdit",
    tag: "Fullday School",
    logo: "/images/sdit.png",
  },
  {
    nama: "SMPIT & Pesantren",
    jenjang: "Sekolah Menengah Pertama (Kelas 7 - 9)",
    fokus: ["Target Tahfidz 10-30 Juz", "Bahasa Arab & Inggris Aktif", "Asrama Putra & Putri Mandiri", "Kajian Kitab & Kurikulum Nasional"],
    href: "/smpit",
    tag: "Boarding & Fullday",
    logo: "/images/smpit.png",
  },
];

export default function PPDBPage() {
  return (
    <main className="min-h-screen bg-white font-inter">
      {/* Hero Section (Mengikuti template hero standar) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images%20halaman%20pp/IMG_20260921_074120.jpg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Pendaftaran Santri (PPDB)
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Wujudkan generasi Qurani berakhlak mulia dan berprestasi global bersama Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-[13px] sm:px-[21px] lg:px-[29px]">
        <div className="w-full max-w-[1406px] mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem] pt-10 sm:pt-12 lg:pt-16 px-6 lg:px-12 xl:px-16 space-y-16 lg:space-y-20">

          {/* Section: Status Gelombang */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-2">Jadwal & Kuota</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                Gelombang Pendaftaran Santri Baru
              </h2>
              <p className="text-text-muted text-sm mt-2">
                Pendaftaran dapat ditutup lebih awal jika kuota kelas telah terpenuhi. Daftarkan putra-putri Anda segera!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {gelombang.map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-between border transition-all relative ${
                    item.isActive
                      ? "border-primary bg-primary/5 shadow-xl scale-[1.02]"
                      : "border-gray-100 bg-white shadow-sm hover:border-gray-200"
                  }`}
                >
                  {item.isActive && (
                    <span className="absolute -top-3.5 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                      Sedang Aktif
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1 font-medium">
                        <FaCalendarAlt className="text-primary" /> {item.periode}
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-bold text-secondary mb-2">
                      {item.nama}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed mb-4">
                      {item.keterangan}
                    </p>

                    <div className="space-y-2 py-3 border-t border-b border-gray-100 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Keuntungan:</span>
                        <span className="font-bold text-emerald-600">{item.promo}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Kapasitas:</span>
                        <span className="font-semibold text-secondary">{item.kuota}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    {item.isActive ? (
                      <Link
                        href={`/ppdb/daftar?gelombang=${idx + 1}`}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all shadow-md text-center block text-sm"
                      >
                        Daftar Gelombang Ini
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-gray-100 text-gray-400 font-medium py-3 rounded-xl text-center block text-sm cursor-not-allowed"
                      >
                        {item.status}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pilihan Jenjang Pendidikan */}
          <div className="pt-16 lg:pt-20 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-2">Jenjang Pendidikan</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                  Pilihan Unit Sekolah & Pesantren
                </h2>
                <p className="text-text-muted text-sm mt-1 max-w-xl">
                  Tersedia jenjang pendidikan Sekolah Dasar (SDIT) dan Menengah Pertama (SMPIT & Pesantren) dengan kurikulum terpadu.
                </p>
              </div>
              <Link
                href="/program"
                className="text-primary hover:text-primary-dark font-semibold text-sm flex items-center gap-2 group self-start md:self-auto"
              >
                Lihat Semua Program Unggulan
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {unitPilihan.map((unit, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-gray-100 hover:border-primary/40 bg-surface/50 hover:bg-white p-7 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {unit.tag}
                      </span>
                      <div className="w-10 h-10 relative bg-white rounded-xl p-1 shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                        <Image src={unit.logo} alt={unit.nama} fill className="object-contain p-1" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {unit.nama}
                    </h3>
                    <p className="text-xs text-text-muted mb-5">
                      {unit.jenjang}
                    </p>

                    <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                      Program Unggulan:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {unit.fokus.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={unit.href}
                      className="text-xs font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      Profil Lengkap Unit <FaArrowRight className="text-[10px]" />
                    </Link>
                    <Link
                      href="/ppdb/daftar"
                      target="_blank"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Daftar <FaExternalLinkAlt className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Alur Pendaftaran (Full-Width White Background with Subtle Web-Themed Line Art) */}
      <section id="alur" className="w-full bg-white pt-20 lg:pt-28 pb-0 relative overflow-hidden border-t border-gray-100">
        {/* Background Decorative Lines & Geometric Wave Art (Subtle Web Colors) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Subtle geometric line grid accent in primary teal */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(#159893 1px, transparent 1px), linear-gradient(to right, rgba(21, 152, 147, 0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px, 80px 80px'
            }}
          />

          {/* Flowing abstract wave lines top-left (low opacity primary teal) */}
          <svg className="absolute -top-12 -left-16 w-[550px] h-[550px] text-primary/[0.09]" viewBox="0 0 550 550" fill="none">
            <path d="M-40,180 C120,40 220,320 400,130 C490,40 570,220 620,90" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            <path d="M-20,230 C140,90 240,370 420,180 C510,90 590,270 640,140" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0,280 C160,140 260,420 440,230 C530,140 610,320 660,190" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
            <circle cx="220" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="220" cy="200" r="210" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Flowing abstract wave lines bottom-right (low opacity primary teal) */}
          <svg className="absolute -bottom-20 -right-20 w-[650px] h-[650px] text-primary/[0.09]" viewBox="0 0 650 650" fill="none">
            <path d="M0,420 C180,280 270,560 460,370 C550,280 640,460 740,320" stroke="currentColor" strokeWidth="2" />
            <path d="M40,470 C220,330 310,610 500,420 C590,330 680,510 780,370" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 8" />
            <path d="M80,520 C260,380 350,660 540,470 C630,380 720,560 820,420" stroke="currentColor" strokeWidth="1" />
            <circle cx="420" cy="450" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="420" cy="450" r="260" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Ambient soft glow accents */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/[0.025] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
        </div>

        {/* Content Container (No Box wrapping) */}
        <div className="w-full max-w-[1406px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Header: Tag Pill & Title */}
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
            <span className="inline-block bg-[#EAF5F0] text-primary font-semibold text-xs px-4 py-1 rounded-full uppercase tracking-wider mb-3">
              Timeline
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
              Alur & Tahapan Pendaftaran Santri
            </h2>
            <p className="text-text-muted text-sm mt-2">
              Ikuti 6 langkah terstruktur berikut dari pengisian formulir hingga resmi bergabung menjadi santri baru Darut Taufiq.
            </p>
          </div>

          {/* Desktop Horizontal Timeline (>= lg screens) */}
          <div className="hidden lg:block">
            <div className="pt-2 pb-4">
              {/* Row 1: Step Labels */}
              <div className="grid grid-cols-6 gap-3 xl:gap-5 text-center mb-3">
                {alurPendaftaran.map((item) => (
                  <span key={item.step} className="text-xs font-bold text-primary tracking-wide">
                    {item.label}
                  </span>
                ))}
              </div>

              {/* Row 2: Connecting Line & Nodes */}
              <div className="relative flex items-center mb-2">
                <div className="absolute left-[8.33%] right-[8.33%] h-[2px] bg-primary/25 z-0" />
                <div className="w-full grid grid-cols-6 gap-3 xl:gap-5 relative z-10">
                  {alurPendaftaran.map((item) => (
                    <div key={item.step} className="flex justify-center">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md ring-2 ring-primary/25 shrink-0 hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: Vertical Drop Ticks */}
              <div className="grid grid-cols-6 gap-3 xl:gap-5 mb-2.5">
                {alurPendaftaran.map((item) => (
                  <div key={item.step} className="flex justify-center">
                    <div className="w-[1.5px] h-6 bg-primary/40" />
                  </div>
                ))}
              </div>

              {/* Row 4: Titles & Descriptions */}
              <div className="grid grid-cols-6 gap-3 xl:gap-5 text-center">
                {alurPendaftaran.map((item) => (
                  <div key={item.step} className="px-1">
                    <h3 className="text-xs xl:text-sm font-bold text-secondary mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Vertical Timeline (< lg screens) */}
          <div className="lg:hidden max-w-md mx-auto my-2">
            <div className="relative space-y-7">
              {/* Continuous vertical connecting line */}
              <div className="absolute top-2 bottom-2 left-[9px] w-[2px] bg-primary/25 z-0" />

              {alurPendaftaran.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 z-10">
                  {/* Node circle on the vertical line */}
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md ring-2 ring-primary/25 shrink-0 mt-0.5" />

                  {/* Step Details */}
                  <div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {item.label}
                    </span>
                    <h3 className="text-sm font-bold text-secondary mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 lg:mt-16 text-center">
            <Link
              href="/ppdb/daftar"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm md:text-base group"
            >
              Mulai Pendaftaran Online Sekarang
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Garis Abu-abu Panjang di Bawah Tombol Hijau */}
          <div className="mt-12 lg:mt-16 border-t border-gray-200" />
        </div>
      </section>

      {/* Konten Utama (Bagian 2: Persyaratan, Biaya, Konsultasi) */}
      <section className="w-full bg-white pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="w-full max-w-[1406px] mx-auto px-6 lg:px-12 xl:px-16 space-y-16 lg:space-y-20">

          {/* Section: Syarat & Dokumen Pendaftaran */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-2">Persyaratan</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                Berkas & Dokumen Persyaratan
              </h2>
              <p className="text-text-muted text-sm mt-2">
                Persiapkan dokumen-dokumen berikut untuk diunggah pada saat pengisian formulir online atau diserahkan saat verifikasi berkas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {syaratDokumen.map((syarat, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-200"
                >
                  <h3 className="text-base lg:text-lg font-bold text-secondary mb-4 pb-3 border-b border-gray-200">
                    {syarat.title}
                  </h3>
                  <ul className="space-y-3">
                    {syarat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                        <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <FaAward className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 text-sm">Jalur Beasiswa Prestasi & Tahfidz</h4>
                  <p className="text-xs text-amber-800">
                    Bagi calon santri yang memiliki hafalan minimal 3 Juz atau juara olimpiade/kejuaraan tingkat kota/provinsi, tersedia beasiswa khusus uang pangkal.
                  </p>
                </div>
              </div>
              <Link
                href="https://wa.me/6282228880972?text=Halo%20Admin,%20saya%20ingin%20tanya%20mengenai%20Jalur%20Beasiswa%20PPDB%20Darut%20Taufiq"
                target="_blank"
                className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap self-start md:self-auto"
              >
                Konsultasi Beasiswa
              </Link>
            </div>
          </div>

          {/* Section: Biaya Pendidikan & Link */}
          <div className="pt-16 lg:pt-20 border-t border-gray-100">
            <div className="bg-gradient-to-r from-secondary via-[#144741] to-secondary text-white rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Side: 3D Element + Text */}
              <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left max-w-3xl">
                {/* 3D Education Badge Element */}
                <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                  <div className="relative w-full h-full hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
                    <Image
                      src="/images/rincian-biaya-badge.webp"
                      alt="Rincian Biaya Pendidikan"
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <span className="text-primary-light font-bold text-xs uppercase tracking-wider block">
                    Transparan & Terjangkau
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Rincian Biaya Pendidikan
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                    Informasi detail mengenai biaya formulir pendaftaran, uang gedung, seragam, buku, serta SPP bulanan dapat Anda lihat pada laman rincian biaya resmi kami.
                  </p>
                </div>
              </div>

              {/* Right Side: CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto justify-center">
                <Link
                  href="/biaya"
                  className="bg-white hover:bg-gray-100 text-secondary font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-center text-sm flex items-center justify-center gap-2"
                >
                  <FaMoneyBillWave className="text-primary text-base" />
                  Lihat Rincian Biaya
                </Link>
                <Link
                  href="/ppdb/daftar"
                  target="_blank"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md text-center text-sm flex items-center justify-center gap-2"
                >
                  Daftar Online
                  <FaExternalLinkAlt className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section: Sekretariat & Layanan Bantuan PPDB */}
          <div className="pt-16 lg:pt-20 border-t border-gray-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-2">Layanan Konsultasi</span>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  Butuh Bantuan Pendaftaran?
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Tim Panitia PPDB Pondok Pesantren Darut Taufiq siap melayani dan mendampingi orang tua/wali santri dalam proses pendaftaran online maupun konsultasi langsung di sekretariat.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 text-base">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm">Jam Operasional Sekretariat</h4>
                      <p className="text-xs text-text-muted">Senin - Sabtu: 08.00 - 16.00 WIB | Ahad: 09.00 - 14.00 WIB</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 text-base">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm">WhatsApp Admin PPDB</h4>
                      <p className="text-xs text-text-muted">+62 822-2888-0972 (Respon cepat jam kerja)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 text-base">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm">Telepon Kantor</h4>
                      <p className="text-xs text-text-muted">(021) 82631191</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="https://wa.me/6282228880972?text=Assalamu%27alaikum%20Panitia%20PPDB%20Darut%20Taufiq"
                    target="_blank"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-base" /> Chat Panitia Sekarang
                  </Link>
                  <Link
                    href="/faq"
                    className="border border-gray-200 hover:border-primary text-secondary hover:text-primary text-sm font-semibold px-6 py-3 rounded-xl transition-all"
                  >
                    Tanya Jawab (FAQ)
                  </Link>
                </div>
              </div>

              {/* Box Ilustrasi Lokasi / Kantor */}
              <div className="bg-surface rounded-2xl p-6 lg:p-8 border border-gray-100 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-2">Sekretariat Pendaftaran Langsung</h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    Ayah/Bunda juga dapat datang langsung ke kampus Darut Taufiq untuk berkonsultasi, melihat lingkungan asrama, dan dibantu langsung oleh tim kami dalam pengisian formulir.
                  </p>
                  <div className="p-4 bg-white rounded-xl border border-gray-100 text-xs text-gray-700 space-y-1">
                    <p className="font-bold text-secondary">Pondok Pesantren Darut Taufiq</p>
                    <p>Jl. Kb. Baru Metros No. 59, Semper Barat, Cilincing</p>
                    <p>Jakarta Utara, DKI Jakarta 14130</p>
                  </div>
                </div>

                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 shadow-sm relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.098078387264!2d106.92056227428117!3d-6.117498259988558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a21ac8c2f48a5%3A0x713f98f89dd3ae44!2sPondok%20Pesantren%20Darut%20Taufiq!5e0!3m2!1sid!2sid!4v1790176840926!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Sekretariat PPDB"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
