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

function EthnicBottomStrip() {
  return (
    <div
      className="absolute left-0 right-0 bottom-0 h-[11px] sm:h-[13px] z-10 pointer-events-none select-none bg-repeat-x bg-bottom"
      style={{ backgroundImage: "url('/images/ethnic-strip-bottom.svg')", backgroundSize: "auto 100%" }}
    />
  );
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Gemini_Generated_Image_fn9tt2fn9tt2fn9t.jpeg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/40 to-transparent" />

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
      <section className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-[13px] sm:px-[21px] lg:px-[29px]">
        <div className="w-full max-w-[1406px] mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem] pt-10 sm:pt-12 lg:pt-16 px-6 lg:px-12 xl:px-16 pb-16 lg:pb-24">
          
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
                className="group relative flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm border border-gray-100"
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
                <div className="p-6 lg:p-8 pb-8 lg:pb-10 flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold text-secondary mb-3">
                    {program.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm lg:text-[15px] flex-1">
                    {program.description}
                  </p>
                </div>

                {/* Pita Motif Sisi Bawah (Sama seperti Card Review) */}
                <EthnicBottomStrip />
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
