import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaLocationDot, FaClock, FaBook, FaAward, FaPhone, FaEnvelope, FaMapLocationDot, FaFileLines, FaListCheck, FaBuildingUser } from "@/components/ui/FlaticonIcons";

export const metadata = {
  title: "SDIT | Pondok Pesantren Darut Taufiq",
  description: "Sekolah Dasar Islam Terpadu (SDIT) Pondok Pesantren Darut Taufiq.",
};

export default function SDITPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                SDIT Darut Taufiq
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Membangun pondasi karakter Qur'ani yang kokoh, keunggulan akademik terpadu, tahfidz Al-Qur'an, dan pembiasaan akhlakul karimah sejak usia sekolah dasar.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content & Sidebar Layout */}
      <section className="relative z-30 -mt-20 lg:-mt-24 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="w-full lg:w-8/12 flex flex-col gap-8">
            
            {/* Program Details Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Informasi SDIT</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-xl shrink-0 flex items-center justify-center w-6">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="font-semibold text-secondary">Kampus Utama Darut Taufiq</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-xl shrink-0 flex items-center justify-center w-6">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Waktu Belajar</p>
                    <p className="font-semibold text-secondary">Full Day (07.00 - 15.00 WIB)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-xl shrink-0 flex items-center justify-center w-6">
                    <FaBook />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kurikulum</p>
                    <p className="font-semibold text-secondary">Diknas & Kepesantrenan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-xl shrink-0 flex items-center justify-center w-6">
                    <FaBuildingUser />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tipe Siswa</p>
                    <p className="font-semibold text-secondary">Putra & Putri (Terpisah)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditions Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Syarat Pendaftaran</h2>
              </div>
              
              <div className="bg-[#FCFAF5] rounded-xl p-6 lg:p-8 space-y-6">
                
                {/* Condition 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-6">
                  <div className="text-primary font-bold text-xl w-6 shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Usia dan Kesiapan</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Calon siswa/siswi berusia minimal 6 tahun pada bulan Juli tahun ajaran berjalan. Telah lulus dari TK/RA atau memiliki kesiapan fisik dan mental untuk mengikuti kegiatan belajar mengajar di tingkat Sekolah Dasar.
                    </p>
                  </div>
                </div>

                {/* Condition 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-6">
                  <div className="text-primary font-bold text-xl w-6 shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Tes Seleksi dan Wawancara</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Calon siswa wajib mengikuti tes observasi psikologi (kematangan belajar) dan baca tulis dasar. Selain itu, orang tua/wali calon siswa diwajibkan mengikuti sesi wawancara dengan tim seleksi penerimaan murid baru SDIT Darut Taufiq.
                    </p>
                  </div>
                </div>
                
                {/* Condition 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-6">
                  <div className="text-primary font-bold text-xl w-6 shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Komitmen Pendidikan</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Orang tua/wali bersedia menandatangani surat komitmen untuk mendukung penuh seluruh program sekolah, mematuhi tata tertib, serta ikut berperan aktif dalam pendidikan karakter anak di rumah.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Required Attachments Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Persyaratan Pendaftaran</h2>
              </div>
              
              <div className="bg-gray-50/80 rounded-xl p-6 lg:p-8">
                <ul className="space-y-4">
                  {[
                    "Mengisi formulir pendaftaran Lengkap",
                    "Foto diri dengan ukuran 3×4, 4 lembar",
                    "Foto copy KTP wali santri ( 2 lembar)",
                    "Foto copy Akte Kelahiran ( 2 lembar)",
                    "Foto copy ijazah terleglisir ( 2 lembar)",
                    "Foto copy SKL ( 2 lembar)",
                    "Foto copy kartu Indonesia pintar (KJP) (2 lembar jika sudah memiliki)",
                    "Surat pindah sekolah dan daftar nilai/Raport siswa (bagi siswa pindahan)"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 text-primary shrink-0"><FaFileLines /></div>
                      <span className="text-gray-700 text-sm font-medium">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="w-full lg:w-4/12 flex flex-col gap-6">
            
            {/* School Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="flex flex-col items-center text-center pb-6 border-b border-gray-100 mb-6">
                <div className="w-24 h-24 rounded-full bg-surface mb-4 p-4 border border-gray-100 relative overflow-hidden flex items-center justify-center">
                  <Image src="/images/sdit.png" alt="Logo SDIT" fill className="object-contain p-2" />
                </div>
                <h3 className="font-bold text-xl text-secondary">SDIT Darut Taufiq</h3>
                <p className="text-sm text-gray-500 mt-1">Sekolah Dasar Islam Terpadu</p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-secondary font-bold">
                    <FaAward className="text-primary" />
                    <h4>Akreditasi</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">
                    A (Amat Baik) <br/>
                    <span className="text-xs text-gray-400">Terakreditasi oleh BAN-S/M</span>
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2 text-secondary font-bold">
                    <FaListCheck className="text-primary" />
                    <h4>Program Unggulan</h4>
                  </div>
                  <p className="text-sm text-gray-600 pl-6">
                    Tahfidz Al-Qur'an, Bina Pribadi Islami (BPI), dan Kurikulum Berbasis Karakter.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h3 className="font-bold text-lg text-secondary mb-6">Hubungi Kami</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="text-primary text-base shrink-0 mt-1">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Telepon / WhatsApp</p>
                    <p className="text-sm font-semibold text-secondary">+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3.5">
                  <div className="text-primary text-base shrink-0 mt-1">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-semibold text-secondary">info.sdit@daruttaufiq.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4 text-secondary font-bold">
                <FaMapLocationDot className="text-primary" />
                <h3>Lokasi</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Jl. Kb. Baru Metros No. 59, Semper Barat, Cilincing, Jakarta Utara, DKI Jakarta 14130
              </p>
              <div className="w-full aspect-video bg-gray-100 rounded-xl relative overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.098078387264!2d106.92056227428117!3d-6.117498259988558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a21ac8c2f48a5%3A0x713f98f89dd3ae44!2sPondok%20Pesantren%20Darut%20Taufiq!5e0!3m2!1sid!2sid!4v1790176840926!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Pondok Pesantren Darut Taufiq"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
