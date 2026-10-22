import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EkskulCard, { EkskulItem } from "@/components/ekskul/EkskulCard";

export const metadata = {
  title: "Ekstrakurikuler | Pondok Pesantren Darut Taufiq",
  description: "Kegiatan Ekstrakurikuler santri di Pondok Pesantren Darut Taufiq: Bahasa Jepang, Berenang, Bulu Tangkis, Pencak Silat, Futsal, dan Basket.",
};

const ekstrakurikuler: EkskulItem[] = [
  {
    title: "Bahasa Jepang",
    description: "Mengenal bahasa dan budaya Jepang melalui pembelajaran huruf Hiragana, Katakana, percakapan praktis (Kaiwa), dan pemahaman etika kedisiplinan.",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
  },
  {
    title: "Berenang",
    description: "Olahraga sunnah yang melatih kebugaran jasmani, kekuatan stamina, ketahanan pernapasan, dan kelenturan tubuh di bawah bimbingan pelatih profesional.",
    image: "/images/images program/IMG-20260625-WA0117.jpg",
  },
  {
    title: "Bulu Tangkis",
    description: "Melatih kelincahan, refleks cepat, koordinasi motorik, serta sportivitas santri melalui olahraga bulu tangkis yang seru dan dinamis.",
    image: "/images/images halaman pp/IMG_20260921_074120.jpg",
  },
  {
    title: "Pencak Silat",
    description: "Seni bela diri warisan luhur nusantara untuk membentuk ketangguhan fisik, pengendalian diri, adab akhlakul karimah, dan pertahanan diri santri.",
    image: "/images/images halaman pp/IMG_20260921_074106.jpg",
  },
  {
    title: "Futsal",
    description: "Wadah menyalurkan hobi sepak bola santri, mengasah kelincahan dribbling, ketepatan tendangan, strategi taktik, dan kekompakan kerjasama tim.",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
  },
  {
    title: "Basket",
    description: "Mengembangkan ketangkasan gerak, postur fisik yang tegap, strategi kerjasama tim, serta pengambilan keputusan yang cepat dan tepat di lapangan.",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
  }
];

export default function EskulPage() {
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
      <section className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-[13px] sm:px-[21px] lg:px-[29px]">
        <div className="w-full max-w-[1406px] mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem] pt-10 sm:pt-12 lg:pt-16 px-6 lg:px-12 xl:px-16 pb-16 lg:pb-24">
          
          <div className="mb-14 sm:mb-16">
            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Pilihan Ekstrakurikuler
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed text-[15px] lg:text-base max-w-3xl">
              Berbagai kegiatan tambahan yang diselenggarakan untuk menggali dan mengembangkan potensi kreatif, olahraga, dan keterampilan leadership para santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {ekstrakurikuler.map((eskul, idx) => (
              <EkskulCard key={idx} eskul={eskul} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
