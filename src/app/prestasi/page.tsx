import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaTrophy, FaPlay } from "react-icons/fa";

export const metadata = {
  title: "Prestasi Siswa | Pondok Pesantren Darut Taufiq",
  description: "Prestasi membanggakan siswa Pondok Pesantren Darut Taufiq di bidang akademik, keislaman, dan non-akademik.",
};

export default function PrestasiPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section (Mengikuti gaya Sejarah) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6 relative -top-[23px]">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our Management
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl line-clamp-3">
                Mengenal sosok penuh dedikasi di balik pengelolaan Pondok Pesantren Darut Taufiq yang berkomitmen penuh dalam membangun institusi pendidikan Islam terpadu berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Prestasi */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Kolom Kiri - Teks */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4 leading-tight">
                Prestasi Siswa
              </h2>
              
              <div className="text-text-muted text-justify leading-relaxed mb-8">
                <p>
                  Kami berkomitmen untuk mencetak generasi unggul yang tidak hanya berprestasi dalam akademik, tetapi juga memiliki akhlak mulia dan keterampilan yang bermanfaat. Berkat dedikasi guru, semangat belajar siswa, dan dukungan penuh dari orang tua, kami terus mencatat berbagai pencapaian membanggakan di tingkat lokal, nasional, maupun internasional.
                </p>
              </div>

              {/* Prestasi Akademik */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">Prestasi Akademik</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Olimpiade Matematika tingkat nasional</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Lomba Sains tingkat kota/provinsi</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Prestasi di bidang literasi dan karya tulis ilmiah</span>
                  </li>
                </ul>
              </div>

              {/* Prestasi Keislaman */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">Prestasi Keislaman</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Lomba Tahfidz Al-Qur'an tingkat nasional</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Lomba Adzan dan Tilawah tingkat kota</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Peserta terbaik dalam Musabaqah Hifdzil Qur'an</span>
                  </li>
                </ul>
              </div>

              {/* Prestasi Non-Akademik */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-secondary mb-4">Prestasi Non-Akademik</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Futsal tingkat sekolah Islam se-kota</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Lomba Kaligrafi Islami</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-muted">
                    <FaTrophy className="text-primary mt-1 flex-shrink-0" />
                    <span>Juara Lomba Cerdas Cermat Keagamaan</span>
                  </li>
                </ul>
              </div>

              {/* Stats & Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-8 border-t border-gray-100 gap-8">
                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-secondary flex items-start">
                      900 <span className="text-2xl lg:text-3xl text-primary font-bold ml-1">+</span>
                    </div>
                    <div className="text-text-muted text-sm font-medium mt-1">Siswa</div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-secondary flex items-start">
                      580 <span className="text-2xl lg:text-3xl text-primary font-bold ml-1">+</span>
                    </div>
                    <div className="text-text-muted text-sm font-medium mt-1">Prestasi</div>
                  </div>
                </div>
                
                <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors duration-300">
                  Selengkapnya
                </button>
              </div>

            </div>

            {/* Kolom Kanan - Gambar Besar */}
            <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/images/images program/IMG-20250427-WA0018.jpg" 
                alt="Prestasi Darut Taufiq" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm pointer-events-auto cursor-pointer hover:bg-primary hover:scale-110 transition-all duration-300">
                  <FaPlay className="ml-1 text-xl" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
