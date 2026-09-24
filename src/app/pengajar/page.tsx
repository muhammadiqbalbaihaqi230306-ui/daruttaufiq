import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaUserGraduate, FaBrain, FaLaptopCode, FaBookQuran, FaHandHoldingHeart, FaUsers } from "react-icons/fa6";
import StatsSection from "@/components/pengajar/StatsSection";

export const metadata = {
  title: "Pengajar & Staff | Pondok Pesantren Darut Taufiq",
  description: "Profil pengajar dan staff Pondok Pesantren Darut Taufiq yang berdedikasi.",
};

export default function PengajarPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260625-WA0117.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6 relative -top-[23px]">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]" data-aos="fade-up">
                Pengajar & Staff
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl line-clamp-3" data-aos="fade-up" data-aos-delay="100">
                Mendidik dengan Hati, Membimbing dengan Ilmu. Kami percaya bahwa keberhasilan pendidikan tidak hanya ditentukan oleh kurikulum yang baik, tetapi juga oleh guru dan staff yang berdedikasi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Teks Kiri */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-10">
                Pengajar & Staff
              </h2>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaUserGraduate />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Guru Bersertifikasi :</span>
                    <span className="text-text-muted ml-1">Para pengajar kami memiliki latar belakang pendidikan terbaik dan kompetensi di bidangnya.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaBrain />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Pendekatan Islami :</span>
                    <span className="text-text-muted ml-1">Tidak hanya mengajarkan ilmu akademik, tetapi juga membimbing akhlak dan karakter siswa sesuai ajaran Islam.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Metode Pembelajaran Modern :</span>
                    <span className="text-text-muted ml-1">Menggunakan teknik pengajaran inovatif dan berbasis teknologi untuk mendukung perkembangan siswa.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaBookQuran />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Pengajar Tahfidz & Keislaman :</span>
                    <span className="text-text-muted ml-1">Ustadz/Ustadzah berpengalaman yang membimbing hafalan dan pemahaman Al-Qur'an.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaHandHoldingHeart />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary">Pembinaan Personal :</span>
                    <span className="text-text-muted ml-1">Guru dan wali kelas memberikan bimbingan individual agar setiap siswa dapat berkembang secara optimal.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
                Staff Administrasi & Pendukung
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-secondary text-xl">
                    <FaUsers />
                  </div>
                  <div>
                    <span className="text-text-muted">Di balik kelancaran operasional sekolah, terdapat tim administrasi dan staff pendukung yang siap melayani dengan profesionalisme dan keramahan. Mereka bertugas memastikan lingkungan belajar yang nyaman, aman, dan kondusif bagi seluruh siswa.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gambar Kanan */}
            <div className="w-full lg:w-5/12 sticky top-32">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden shadow-xl">
                <Image 
                  src="/images/images halaman pp/IMG_20260921_074106.jpg" 
                  alt="Fasilitas Pondok Pesantren" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <StatsSection />

    </main>
  );
}
