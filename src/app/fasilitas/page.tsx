import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Fasilitas | Pondok Pesantren Darut Taufiq",
  description: "Fasilitas Asrama dan Pesantren di Pondok Pesantren Darut Taufiq: Perlengkapan Kamar, Gedung Aula, Ruang Kelas, Kantin, Masjid, Lapangan, dan Kamar Mandi.",
};

const facilities = [
  {
    title: "Perlengkapan Kamar (Kasur & Lemari)",
    description: "Kamar asrama santri yang tertata rapi, bersih, dan nyaman, dilengkapi kasur empuk, ranjang kokoh, serta lemari pakaian pribadi santri.",
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
    details: [
      "Kasur dan bantal tidur berkualitas untuk istirahat optimal santri",
      "Lemari pakaian dan loker pribadi dengan kunci masing-masing",
      "Sirkulasi udara sejuk, pencahayaan alami, dan kebersihan yang terkontrol"
    ]
  },
  {
    title: "Gedung Aula",
    description: "Aula serbaguna luas untuk kegiatan akbar kepesantrenan, tabligh akbar, seminar motivasi, dan pertemuan orang tua/wali santri.",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    details: [
      "Daya tampung luas untuk ratusan santri dan tamu undangan",
      "Dilengkapi sound system modern, panggung, dan proyektor layar lebar",
      "Ruangan berpendingin udara (AC) untuk kenyamanan seluruh kegiatan"
    ]
  },
  {
    title: "Ruang Kelas",
    description: "Ruang belajar representatif, bersih, dan berpendingin udara (AC) yang didesain ergonomis guna menciptakan suasana belajar mengajar yang kondusif.",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    details: [
      "Meja dan kursi belajar ergonomis yang nyaman",
      "Fasilitas proyektor LCD dan papan tulis interaktif",
      "Pencahayaan terang dan sirkulasi udara yang sangat baik"
    ]
  },
  {
    title: "Kantin Pesantren",
    description: "Kantin higienis yang menyediakan aneka makanan bergizi seimbang, minuman sehat, dan perlengkapan harian santri dengan pengawasan mutu berkala.",
    image: "/images/images program/IMG-20260714-WA0095.jpg",
    details: [
      "Penyediaan menu makanan halal, sehat, dan bergizi seimbang",
      "Area makan santri yang bersih, tertib, dan nyaman",
      "Pengawasan kebersihan berkala oleh pengelola pondok"
    ]
  },
  {
    title: "Masjid Pesantren",
    description: "Pusat spiritual dan jantung kehidupan pesantren sebagai sarana shalat berjamaah 5 waktu, kajian tafsir, halaqah tahfidz Al-Qur'an, dan dzikir bersama.",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    details: [
      "Ruang shalat utama ikhwan dan akhwat yang luas dan nyaman",
      "Tempat wudhu yang luas, bersih, dan kran air memadai",
      "Dilengkapi karpet tebal, pendingin ruangan, dan tata suara jernih"
    ]
  },
  {
    title: "Lapangan Olahraga",
    description: "Sarana ruang terbuka multifungsi untuk menunjang kebugaran fisik santri, apel upacara mingguan, futsal, basket, bulu tangkis, dan kegiatan outdoor.",
    image: "/images/images program/IMG-20260625-WA0117.jpg",
    details: [
      "Lapangan multifungsi untuk futsal, basket, dan bulu tangkis",
      "Area terbuka luas untuk apel upacara dan senam kebugaran santri",
      "Peralatan olahraga lengkap dengan standar keamanan yang baik"
    ]
  },
  {
    title: "Kamar Mandi & Sanitasi",
    description: "Fasilitas sanitasi dan kamar mandi yang bersih, higienis, dan terpisah secara ketat antara kawasan asrama putra dan asrama putri.",
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
    details: [
      "Ketersediaan air bersih mengalir jernih 24 jam nonstop",
      "Jumlah bilik mandi dan toilet yang proporsional untuk seluruh santri",
      "Jadwal pembersihan dan sterilisasi rutin setiap hari"
    ]
  }
];

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images halaman pp/IMG_20260921_074106.jpg')" }}
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
                Fasilitas Pesantren
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Kami menyediakan sarana dan prasarana asrama yang lengkap, modern, dan nyaman untuk mendukung kegiatan ibadah, belajar, serta aktivitas harian seluruh santri.
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
                Fasilitas Asrama & Lingkungan Pesantren
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
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
                  <p className="text-text-muted leading-relaxed text-[15px] mb-5 min-h-[4rem]">
                    {facility.description}
                  </p>

                  {/* List Detail Fasilitas */}
                  <div className="border-t border-gray-100 pt-5 flex-1">
                    <p className="font-semibold text-secondary mb-3">Fasilitas meliputi :</p>
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
