import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { 
  FaLocationDot, 
  FaClock, 
  FaBook, 
  FaAward, 
  FaPhone, 
  FaEnvelope, 
  FaMapLocationDot, 
  FaFileLines, 
  FaListCheck,
  FaBuildingUser
} from "react-icons/fa6";

export const metadata = {
  title: "SMPIT | Pondok Pesantren Darut Taufiq",
  description: "Sekolah Menengah Pertama Islam Terpadu (SMPIT) Pondok Pesantren Darut Taufiq.",
};

export default function SMPITPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6 relative -top-[23px]">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                SMPIT Darut Taufiq
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl line-clamp-3">
                Membangun generasi Qur'ani yang tangguh, cerdas, berakhlak mulia, dan siap menghadapi tantangan zaman di usia remaja melalui pendidikan Islam terpadu.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content & Sidebar Layout */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="w-full lg:w-8/12 flex flex-col gap-8">
            
            {/* Program Details Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Informasi SMPIT</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="font-semibold text-secondary">Kampus Utama Darut Taufiq</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Waktu Belajar</p>
                    <p className="font-semibold text-secondary">Full Day / Boarding School</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FaBook />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kurikulum</p>
                    <p className="font-semibold text-secondary">Diknas & Kepesantrenan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
                    <h3 className="font-bold text-secondary mb-2">Usia dan Lulusan</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Calon siswa/siswi telah lulus dari SD/MI atau sederajat. Memiliki kesiapan fisik, mental, serta kemandirian untuk mengikuti kegiatan belajar mengajar di tingkat Sekolah Menengah Pertama dan kehidupan asrama (jika memilih boarding).
                    </p>
                  </div>
                </div>

                {/* Condition 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-6">
                  <div className="text-primary font-bold text-xl w-6 shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Tes Seleksi dan Wawancara</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Calon siswa wajib mengikuti tes akademik, tes kemampuan baca tulis Al-Qur'an (BTQ), serta tes wawancara kepribadian. Orang tua/wali calon siswa juga diwajibkan mengikuti sesi wawancara dengan tim seleksi penerimaan murid baru.
                    </p>
                  </div>
                </div>
                
                {/* Condition 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex gap-6">
                  <div className="text-primary font-bold text-xl w-6 shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2">Komitmen Pendidikan</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Orang tua/wali bersedia menandatangani surat komitmen untuk mendukung penuh seluruh program sekolah, mematuhi tata tertib pesantren, serta bersinergi dalam pendidikan karakter remaja.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Required Attachments Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Dokumen Persyaratan</h2>
              </div>
              
              <div className="bg-gray-50/80 rounded-xl p-6 lg:p-8">
                <ul className="space-y-4">
                  {[
                    "Fotokopi Ijazah SD/MI yang dilegalisir (2 Lembar)",
                    "Fotokopi SKHUN yang dilegalisir (2 Lembar)",
                    "Fotokopi Akta Kelahiran (2 Lembar)",
                    "Fotokopi Kartu Keluarga (KK) (2 Lembar)",
                    "Fotokopi KTP Orang Tua (Ayah & Ibu) (Masing-masing 2 Lembar)",
                    "Pas foto berwarna 3x4 dan 4x6 (Masing-masing 4 Lembar)",
                    "Surat Keterangan Kelakuan Baik dari sekolah asal",
                    "Surat Keterangan Sehat dari Dokter/Puskesmas"
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
                  <Image src="/icon.png" alt="Logo SMPIT" fill className="object-contain p-2" />
                </div>
                <h3 className="font-bold text-xl text-secondary">SMPIT Darut Taufiq</h3>
                <p className="text-sm text-gray-500 mt-1">Sekolah Menengah Pertama Islam Terpadu</p>
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
                    Tahfidz Al-Qur'an Intensif, Penguasaan Bahasa Arab & Inggris, dan Kepemimpinan (Leadership).
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h3 className="font-bold text-lg text-secondary mb-6">Hubungi Kami</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <FaPhone className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Telepon / WhatsApp</p>
                    <p className="text-sm font-semibold text-secondary">+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-semibold text-secondary">info.smpit@daruttaufiq.com</p>
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
                Jl. Raya Pondok Pesantren No. 1, Kota Santri, Indonesia 12345
              </p>
              <div className="w-full aspect-video bg-gray-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm font-medium">Google Maps Embed</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
