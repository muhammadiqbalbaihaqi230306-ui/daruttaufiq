import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { FaMosque, FaBuildingUser, FaBookOpen, FaFutbol, FaComputer, FaChalkboardUser } from "react-icons/fa6";

export const metadata = {
  title: "Fasilitas | Pondok Pesantren Darut Taufiq",
  description: "Fasilitas dan sarana prasarana penunjang kegiatan santri di Pondok Pesantren Darut Taufiq.",
};

const facilities = [
  {
    title: "Masjid Utama",
    description: "Pusat kegiatan ibadah, tahfidz, dan kajian keislaman yang luas, nyaman, dan menjadi jantung kehidupan spiritual santri.",
    icon: FaMosque,
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    details: [
      "Tempat Wudhu Ikhwan & Akhwat yang terpisah dengan kondisi bersih dan nyaman",
      "Toilet Ikhwan & Akhwat yang terpisah dengan kondisi bersih dan nyaman",
      "Halaman yang luas dan bersih untuk kegiatan kajian dan ibadah sholat"
    ]
  },
  {
    title: "Asrama Santri (Dormitory)",
    description: "Asrama putra dan putri yang terpisah dengan pengawasan ketat 24 jam, dilengkapi fasilitas kamar yang nyaman dan bersih.",
    icon: FaBuildingUser,
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
    details: [
      "Kamar tidur luas dengan sirkulasi udara yang baik",
      "Loker pribadi untuk menyimpan perlengkapan santri",
      "Ruang jemur pakaian dan fasilitas kebersihan terpadu"
    ]
  },
  {
    title: "Ruang Kelas Modern",
    description: "Ruang belajar yang representatif, ber-AC, dan dilengkapi proyektor untuk mendukung suasana KBM yang kondusif.",
    icon: FaChalkboardUser,
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    details: [
      "Meja dan kursi belajar yang ergonomis",
      "Proyektor LCD dan ruang yang nyaman",
      "Pencahayaan dan sirkulasi udara yang sangat baik"
    ]
  },
  {
    title: "Perpustakaan",
    description: "Koleksi buku literatur Islam, sains, dan umum untuk menumbuhkan minat baca dan wawasan pengetahuan santri.",
    icon: FaBookOpen,
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    details: [
      "Rak buku terklasifikasi dengan koleksi ribuan judul",
      "Ruang baca lesehan dan meja baca yang tenang",
      "Sistem sirkulasi peminjaman buku yang tertata rapi"
    ]
  },
  {
    title: "Laboratorium Komputer",
    description: "Fasilitas komputer untuk mendukung literasi digital, pelatihan desain, dan pembelajaran teknologi informasi.",
    icon: FaComputer,
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
    details: [
      "PC spesifikasi memadai dengan koneksi internet",
      "Ruangan full AC untuk kenyamanan belajar",
      "Software untuk desain, coding, dan literasi digital"
    ]
  },
  {
    title: "Lapangan Olahraga",
    description: "Area olahraga terbuka untuk menjaga kebugaran fisik santri, mencakup lapangan futsal, basket, dan area memanah.",
    icon: FaFutbol,
    image: "/images/images program/IMG-20260625-WA0117.jpg",
    details: [
      "Lapangan multifungsi untuk futsal dan basket",
      "Area khusus memanah dengan peralatan memadai",
      "Tribun penonton dan perlengkapan olahraga"
    ]
  }
];

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section (Mengikuti gaya Sejarah/Manajemen) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images halaman pp/IMG_20260921_074106.jpg')" }}
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
                Our Facilities
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl line-clamp-3">
                Kami menyediakan sarana dan prasarana yang lengkap, modern, dan nyaman untuk mendukung kegiatan ibadah, belajar, serta aktivitas harian seluruh santri.
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
              Fasilitas Pesantren
            </h2>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base">
              Berkomitmen memberikan kenyamanan dan lingkungan yang asri sebagai rumah kedua bagi para santri dalam menuntut ilmu dan menghafal Al-Qur'an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {facilities.map((facility, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                  <Image 
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Title overlay on image */}
                  <h3 className="absolute bottom-6 left-6 text-xl lg:text-2xl font-bold text-white z-10 drop-shadow-md pr-6">
                    {facility.title}
                  </h3>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col bg-white relative">
                  {/* Floating Icon */}
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-black/20 transform group-hover:rotate-12 transition-transform duration-300">
                    <facility.icon />
                  </div>

                  <p className="text-text-muted leading-relaxed text-[15px] mt-4 mb-5 min-h-[5rem]">
                    {facility.description}
                  </p>

                  {/* List Detail Fasilitas */}
                  <div className="border-t border-gray-100 pt-5 flex-1">
                    <p className="font-semibold text-secondary mb-3">Fasilitas :</p>
                    <ol className="list-decimal pl-4 space-y-2 text-text-muted text-[14px]">
                      {facility.details.map((detail, dIdx) => (
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
