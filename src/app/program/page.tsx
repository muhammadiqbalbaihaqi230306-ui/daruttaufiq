import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaBookQuran, FaGraduationCap, FaSchool, FaBuildingUser, FaMedal, FaLaptopCode } from "react-icons/fa6";

export const metadata = {
  title: "Program | Pondok Pesantren Darut Taufiq",
  description: "Program unggulan dan unit pendidikan di Pondok Pesantren Darut Taufiq.",
};

const programs = [
  {
    title: "Tahfidz Al-Qur'an",
    description: "Program hafalan Al-Qur'an dengan metode mutqin (kuat), didampingi oleh musyrif/musyrifah berpengalaman yang berfokus pada tahsin dan tajwid.",
    icon: FaBookQuran,
    image: "/images/images program/IMG-20250427-WA0012.jpg",
  },
  {
    title: "SDIT (Sekolah Dasar Islam Terpadu)",
    description: "Pendidikan dasar yang memadukan kurikulum nasional dan nilai-nilai keislaman untuk membangun pondasi karakter anak sejak usia dini.",
    icon: FaSchool,
    image: "/images/images program/IMG-20260714-WA0110.jpg",
  },
  {
    title: "SMPIT (Sekolah Menengah Pertama Islam Terpadu)",
    description: "Lanjutan pendidikan menengah yang menyeimbangkan kecerdasan akademik, spiritual, dan emosional (ESQ) untuk menyambut usia remaja.",
    icon: FaGraduationCap,
    image: "/images/images program/IMG-20260714-WA0092.jpg",
  },
  {
    title: "Boarding School (Asrama)",
    description: "Program pendidikan berasrama dengan pembiasaan ibadah harian, adab Islami, kemandirian, dan bahasa Arab/Inggris dalam keseharian.",
    icon: FaBuildingUser,
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
  },
  {
    title: "Keterampilan Teknologi & Bahasa",
    description: "Membekali santri dengan kemampuan bahasa asing (Arab & Inggris) dan literasi digital agar siap menghadapi tantangan zaman.",
    icon: FaLaptopCode,
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
  },
  {
    title: "Pengembangan Bakat & Prestasi",
    description: "Mewadahi potensi santri melalui kegiatan ekstrakurikuler seperti memanah, bela diri, pramuka, dan karya tulis.",
    icon: FaMedal,
    image: "/images/images program/IMG-20260625-WA0117.jpg",
  }
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section (Sesuai dengan template manajemen) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our Programs
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Menghadirkan program pendidikan komprehensif yang mengintegrasikan nilai-nilai keislaman, tahfidz Al-Qur'an, dan keunggulan pengetahuan akademik.
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
                Program Pendidikan
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
              Kami merancang sistem pendidikan yang holistik untuk melahirkan generasi yang tidak hanya cerdas secara akademik, namun juga kuat akidahnya dan mulia akhlaknya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon floating over image */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary text-xl shadow-lg shadow-black/20 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <program.icon />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm lg:text-[15px] mb-6 flex-1">
                    {program.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <span className="inline-flex items-center text-primary font-medium text-sm hover:text-secondary transition-colors duration-300 cursor-pointer">
                      Pelajari Lebih Lanjut
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
