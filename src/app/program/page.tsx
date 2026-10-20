import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Program Unggulan | Pondok Pesantren Darut Taufiq",
  description: "Program unggulan di Pondok Pesantren Darut Taufiq: Kelas Tahfidz Al-Qur'an, Baca Kitab Kuning, Bahasa Arab, Bahasa Inggris, Pidato 3 Bahasa, dan Ilmu Teknologi.",
};

const programs = [
  {
    title: "Kelas Tahfidz Al-Qur'an",
    description: "Program hafalan Al-Qur'an intensif dengan metode mutqin, didampingi asatidz dan musyrif/musyrifah berpengalaman dengan fokus pada tahsin, tajwid, dan muraja'ah berkala.",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
  },
  {
    title: "Baca Kitab Kuning",
    description: "Pembelajaran dan pengkajian kitab kuning / turats Islam klasik mencakup ilmu nahwu, sharaf, fiqih, aqidah, dan akhlak untuk menanamkan pemahaman agama yang mendalam dan bersanad.",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
  },
  {
    title: "Bahasa Arab",
    description: "Pembiasaan percakapan (muhadatsah) dan penguasaan tata bahasa Arab intensif sebagai bahasa ilmu dan Al-Qur'an dalam komunikasi keseharian santri di lingkungan pesantren.",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
  },
  {
    title: "Bahasa Inggris",
    description: "Pengembangan keterampilan aktif berbahasa Inggris santri melalui program English Area, conversation practice, grammar, dan vocabulary untuk memperluas wawasan global.",
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
  },
  {
    title: "Pidato 3 Bahasa",
    description: "Pelatihan public speaking dan muhadhoroh rutin dalam 3 bahasa (Arab, Inggris, dan Indonesia) untuk mengasah kepercayaan diri, retorika, vokal, dan jiwa kepemimpinan santri.",
    image: "/images/images program/IMG-20260714-WA0095.jpg",
  },
  {
    title: "Ilmu Teknologi",
    description: "Membekali santri dengan literasi digital, pengoperasian komputer, dasar pemrograman (coding), dan teknologi informasi terapan agar santri adaptif terhadap kemajuan zaman.",
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
  }
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
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
                Program Unggulan
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Menghadirkan program pendidikan unggulan yang mengintegrasikan nilai-nilai keislaman, tahfidz Al-Qur'an, tradisi kitab kuning, kecakapan bahasa internasional, dan literasi teknologi modern.
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
                Daftar Program Unggulan
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
              Kami merancang kurikulum unggulan untuk melahirkan santri yang mutafaqqih fiddin, berwawasan global, fasih berbahasa internasional, dan terampil menguasai ilmu teknologi.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
