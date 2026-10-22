import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaHandsPraying, FaMosque, FaBookQuran, FaClock, FaLanguage } from "@/components/ui/FlaticonIcons";

export const metadata = {
  title: "Budaya Pesantren | Pondok Pesantren Darut Taufiq",
  description: "Budaya sekolah dan kebiasaan Islami santri di Pondok Pesantren Darut Taufiq.",
};

const schoolCultures = [
  {
    title: "Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun)",
    description: "Membiasakan adab mulia dalam berinteraksi: menghormati guru dan asatidz, menyayangi sesama santri, serta ramah kepada siapapun.",
    icon: FaHandsPraying,
  },
  {
    title: "Sholat Berjamaah di Awal Waktu",
    description: "Menjaga disiplin sholat lima waktu berjamaah di masjid tepat waktu, dilengkapi dengan sholat sunnah rawatib dan qiyamul lail.",
    icon: FaMosque,
  },
  {
    title: "Halaqah Qur'an Harian",
    description: "Rutinitas menghafal (ziyadah) dan mengulang hafalan (muroja'ah) bersama pembimbing setiap ba'da Shubuh dan ba'da Ashar.",
    icon: FaBookQuran,
  },
  {
    title: "Kedisiplinan & Hidup Mandiri",
    description: "Membiasakan hidup tertib dan mandiri, mulai dari menjaga kebersihan kamar, merapikan perlengkapan pribadi, hingga manajemen waktu belajar.",
    icon: FaClock,
  },
  {
    title: "Lingkungan Berbahasa (Arab & Inggris)",
    description: "Membiasakan percakapan harian dalam Bahasa Arab dan Bahasa Inggris untuk mengasah rasa percaya diri dan wawasan global santri.",
    icon: FaLanguage,
  }
];

export default function BudayaPage() {
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
                Budaya Pesantren
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Membentuk karakter santri melalui pembiasaan positif dan adab Islami yang dijalankan secara konsisten dalam kehidupan sehari-hari di lingkungan pesantren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-[13px] sm:px-[21px] lg:px-[29px]">
        <div className="w-full max-w-[1406px] mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem] pt-10 sm:pt-12 lg:pt-16 px-6 lg:px-12 xl:px-16 pb-16 lg:pb-24">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

            {/* Teks Kiri */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10 border-l-4 border-primary pl-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-secondary">
                  Budaya Sekolah & Pesantren
                </h2>
              </div>

              <div className="space-y-8">
                {schoolCultures.map((culture, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center text-2xl shadow-md">
                      <culture.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {culture.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed text-[15px]">
                        {culture.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Kanan */}
            <div className="w-full lg:w-1/2">
              {/* 2x2 Grid */}
              <div className="grid grid-cols-2 h-full min-h-[600px] overflow-hidden rounded-2xl">

                {/* Top Left: Blue Box */}
                <div className="bg-secondary p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Pembiasaan Positif
                  </h3>
                  <p className="text-white/90 text-[15px] leading-relaxed">
                    Setiap aktivitas di Darut Taufiq dirancang menjadi sarana <strong>pembentukan adab dan karakter mulia</strong> yang melekat seumur hidup.
                  </p>
                </div>

                {/* Top Right: Image */}
                <div className="relative bg-gray-200">
                  <Image
                    src="/images/images halaman pp/IMG_20260921_074120.jpg"
                    alt="Budaya Santri"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Left: Image */}
                <div className="relative bg-gray-200">
                  <Image
                    src="/images/budaya2.jpg"
                    alt="Aktivitas Belajar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Right: Yellow Box */}
                <div className="bg-[#F8C145] p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    Kemandirian Santri
                  </h3>
                  <p className="text-secondary/90 text-[15px] leading-relaxed font-medium">
                    Melatih santri hidup tertib, mandiri, dan berakhlak mulia melalui kebiasaan disiplin sejak dini.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
