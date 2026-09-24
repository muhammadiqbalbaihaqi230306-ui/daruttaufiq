import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaMosque, FaKey, FaUserTie, FaHandHoldingHeart, FaMedal } from "react-icons/fa6";

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
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6 relative -top-[23px]">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Nilai & Budaya
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Menjadi pedoman dalam setiap langkah dan pembelajaran santri, membentuk karakter Islami yang tangguh dan berprestasi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Teks Kiri */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-10">
                Nilai Utama
              </h2>
              
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
                    src="/images/images halaman pp/IMG_20260921_074120.jpg"
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
