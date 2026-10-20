import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Ekstrakurikuler | Pondok Pesantren Darut Taufiq",
  description: "Kegiatan Ekstrakurikuler santri di Pondok Pesantren Darut Taufiq: Bahasa Jepang, Berenang, Bulu Tangkis, Pencak Silat, Futsal, dan Basket.",
};

const ekstrakurikuler = [
  {
    title: "Bahasa Jepang",
    description: "Mengenal bahasa dan budaya Jepang melalui pembelajaran huruf Hiragana, Katakana, percakapan praktis (Kaiwa), dan pemahaman etika kedisiplinan.",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    details: [
      "Pengenalan huruf dasar Hiragana dan Katakana",
      "Latihan percakapan bahasa Jepang praktis sehari-hari (Kaiwa)",
      "Wawasan budaya, etika kesantunan, dan kedisiplinan khas Jepang"
    ]
  },
  {
    title: "Berenang",
    description: "Olahraga sunnah yang melatih kebugaran jasmani, kekuatan stamina, ketahanan pernapasan, dan kelenturan tubuh di bawah bimbingan pelatih profesional.",
    image: "/images/images program/IMG-20260625-WA0117.jpg",
    details: [
      "Penguasaan teknik gaya dada, gaya bebas, dan gaya punggung",
      "Latihan pernapasan, ketahanan stamina, dan keselamatan di air",
      "Jadwal rutin ke kolam renang dengan pendampingan intensif"
    ]
  },
  {
    title: "Bulu Tangkis",
    description: "Melatih kelincahan, refleks cepat, koordinasi motorik, serta sportivitas santri melalui olahraga bulu tangkis yang seru dan dinamis.",
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
    details: [
      "Latihan servis presisi, smash, dropshot, dan netting",
      "Latihan footwork dan kelincahan gerak di lapangan",
      "Turnamen bulu tangkis antar-santri dan asrama secara berkala"
    ]
  },
  {
    title: "Pencak Silat",
    description: "Seni bela diri warisan luhur nusantara untuk membentuk ketangguhan fisik, pengendalian diri, adab akhlakul karimah, dan pertahanan diri santri.",
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
    details: [
      "Latihan ketahanan fisik, kuda-kuda, dan jurus dasar pesilat",
      "Penguatan mental spiritual, kedisiplinan, dan adab akhlak pesilat",
      "Ujian kenaikan tingkat sabuk dan peragaan seni silat berkala"
    ]
  },
  {
    title: "Futsal",
    description: "Wadah menyalurkan hobi sepak bola santri, mengasah kelincahan dribbling, ketepatan tendangan, strategi taktik, dan kekompakan kerjasama tim.",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    details: [
      "Latihan teknik dasar passing, dribbling, controlling, dan shooting",
      "Pemahaman taktik formasi pertandingan dan rotasi permainan tim",
      "Laga persahabatan (sparring) dan kompetisi turnamen pelajar"
    ]
  },
  {
    title: "Basket",
    description: "Mengembangkan ketangkasan gerak, postur fisik yang tegap, strategi kerjasama tim, serta pengambilan keputusan yang cepat dan tepat di lapangan.",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    details: [
      "Latihan fundamental dribble, passing, lay-up shoot, dan free throw",
      "Latihan ketahanan fisik, kecepatan gerak, dan vertical jump",
      "Pertandingan internal mingguan untuk mengasah mental bertanding"
    ]
  }
];

export default function EskulPage() {
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
                Ekstrakurikuler
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Mewadahi minat, bakat, kebugaran fisik, dan karakter kepemimpinan santri melalui beragam kegiatan ekstrakurikuler yang aktif, positif, dan menyenangkan.
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
                Pilihan Ekstrakurikuler
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
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
                  <p className="text-text-muted leading-relaxed text-[15px] mb-5 min-h-[4rem]">
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
