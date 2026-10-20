import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaMosque, FaKey, FaUserTie, FaHandHoldingHeart, FaMedal } from "@/components/ui/FlaticonIcons";

export const metadata = {
  title: "Nilai & Budaya | Pondok Pesantren Darut Taufiq",
  description: "Nilai utama dan budaya sekolah di Pondok Pesantren Darut Taufiq.",
};

const coreValues = [
  {
    title: "Iman & Taqwa",
    description: "Menanamkan kecintaan kepada Allah dan Rasul-Nya melalui ibadah yang konsisten dan akhlak Islami.",
    icon: FaMosque,
  },
  {
    title: "Kejujuran & Amanah",
    description: "Mendidik siswa untuk selalu berkata dan bertindak jujur serta bertanggung jawab dalam setiap amanah yang diberikan.",
    icon: FaKey,
  },
  {
    title: "Kedisiplinan & Kemandirian",
    description: "Membangun kebiasaan disiplin dalam belajar, beribadah, dan menjalankan tugas sehari-hari",
    icon: FaUserTie,
  },
  {
    title: "Rasa Hormat & Kepedulian",
    description: "Mengajarkan sikap hormat kepada orang tua, guru, dan sesama, serta peduli terhadap lingkungan dan masyarakat.",
    icon: FaHandHoldingHeart,
  },
  {
    title: "Semangat Belajar & Berprestasi",
    description: "Mendorong siswa untuk selalu berusaha menjadi lebih baik dan mengembangkan potensi mereka.",
    icon: FaMedal,
  }
];

export default function ValuesPage() {
  return (
    <main className="min-h-screen bg-white">
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
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our Values
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Menanamkan nilai-nilai luhur dan prinsip keislaman sebagai fondasi utama dalam pembentukan karakter, akhlak, dan kepribadian santri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="relative z-30 -mt-20 lg:-mt-24 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

            {/* Teks Kiri */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10 border-l-4 border-primary pl-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-secondary">
                  Nilai Utama
                </h2>
              </div>

              <div className="space-y-8">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center text-2xl shadow-md">
                      <value.icon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {value.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed text-[15px]">
                        {value.description}
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
                    Nilai Utama
                  </h3>
                  <p className="text-white/90 text-[15px] leading-relaxed">
                    Kami menerapkan <strong>nilai-nilai Islam</strong> yang menjadi pedoman dalam setiap aspek pembelajaran dan kehidupan siswa.
                  </p>
                </div>

                {/* Top Right: Image */}
                <div className="relative bg-gray-200">
                  <Image
                    src="/images/nilai1.jpg"
                    alt="Siswa"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Left: Image */}
                <div className="relative bg-gray-200">
                  <Image
                    src="/images/images program/IMG-20250427-WA0012.jpg"
                    alt="Belajar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Right: Yellow Box */}
                <div className="bg-[#F8C145] p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    Budaya Sekolah
                  </h3>
                  <p className="text-secondary/90 text-[15px] leading-relaxed font-medium">
                    Kami menerapkan budaya sekolah yang Islami dan positif untuk membangun lingkungan yang mendukung perkembangan karakter siswa.
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
