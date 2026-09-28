import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaCampground, FaMicrophone, FaDrum, FaShieldHalved, FaFutbol, FaPenNib } from "react-icons/fa6";

export const metadata = {
  title: "Ekstrakurikuler | Pondok Pesantren Darut Taufiq",
  description: "Kegiatan Ekstrakurikuler santri di Pondok Pesantren Darut Taufiq untuk mengembangkan minat dan bakat.",
};

const ekstrakurikuler = [
  {
    title: "Pramuka",
    description: "Membentuk karakter santri yang mandiri, disiplin, berjiwa pemimpin, dan memiliki kepedulian sosial yang tinggi.",
    icon: FaCampground,
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    details: [
      "Latihan baris-berbaris dan tali-temali",
      "Perkemahan dan outbound tahunan",
      "Pendidikan survival dan kepemimpinan"
    ]
  },
  {
    title: "Muhadhoroh (Public Speaking)",
    description: "Melatih kepercayaan diri dan kemampuan santri dalam berpidato menggunakan tiga bahasa: Arab, Inggris, dan Indonesia.",
    icon: FaMicrophone,
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    details: [
      "Praktik pidato mingguan",
      "Teknik vokal dan penguasaan panggung",
      "Lomba pidato antar santri (Language Festival)"
    ]
  },
  {
    title: "Seni Hadroh",
    description: "Mengembangkan bakat seni islami santri dalam menabuh alat musik rebana serta melantunkan shalawat.",
    icon: FaDrum,
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    details: [
      "Pelatihan dasar alat musik rebana",
      "Latihan vokal dan aransemen shalawat",
      "Penampilan pada acara peringatan hari besar Islam"
    ]
  },
  {
    title: "Seni Beladiri",
    description: "Membekali santri dengan kemampuan bela diri untuk menjaga kesehatan fisik, mental, dan kedisiplinan.",
    icon: FaShieldHalved,
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
    details: [
      "Latihan fisik dan ketahanan tubuh",
      "Jurus dasar dan seni pertarungan",
      "Ujian kenaikan sabuk berkala"
    ]
  },
  {
    title: "Klub Olahraga",
    description: "Wadah bagi santri untuk menyalurkan minat dan bakat di bidang olahraga seperti futsal, basket, voli, dan bulu tangkis.",
    icon: FaFutbol,
    image: "/images/images program/IMG-20260625-WA0117.jpg",
    details: [
      "Jadwal latihan rutin per cabang olahraga",
      "Turnamen antar angkatan dan asrama (Class Meeting)",
      "Peningkatan skill dan kerjasama tim"
    ]
  },
  {
    title: "Kaligrafi (Khot)",
    description: "Mempelajari keindahan seni tulis huruf Arab dengan berbagai jenis khat seperti Naskhi, Tsuluts, dan Diwani.",
    icon: FaPenNib,
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
    details: [
      "Pengenalan dasar-dasar kaidah huruf",
      "Praktik penulisan pada berbagai media",
      "Pameran karya seni kaligrafi santri"
    ]
  }
];

export default function EskulPage() {
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
      
      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
              Pilihan Ekstrakurikuler
            </h2>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base">
              Berbagai kegiatan tambahan yang diselenggarakan untuk menggali dan mengembangkan potensi kreatif, olahraga, dan keterampilan leadership para santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {ekstrakurikuler.map((eskul, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                  <Image 
                    src={eskul.image}
                    alt={eskul.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Title overlay on image */}
                  <h3 className="absolute bottom-6 left-6 text-xl lg:text-2xl font-bold text-white z-10 drop-shadow-md pr-6">
                    {eskul.title}
                  </h3>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col bg-white relative">
                  {/* Floating Icon */}
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-black/20 transform group-hover:rotate-12 transition-transform duration-300">
                    <eskul.icon />
                  </div>

                  <p className="text-text-muted leading-relaxed text-[15px] mt-4 mb-5 min-h-[5rem]">
                    {eskul.description}
                  </p>

                  {/* List Detail Eskul */}
                  <div className="border-t border-gray-100 pt-5 flex-1">
                    <p className="font-semibold text-secondary mb-3">Kegiatan meliputi :</p>
                    <ol className="list-decimal pl-4 space-y-2 text-text-muted text-[14px]">
                      {eskul.details.map((detail, dIdx) => (
                        <li key={dIdx} className="leading-relaxed pl-1">
                          {detail}
                        </li>
                      ))}
                    </ol>
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
