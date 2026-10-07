import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FaqAccordion from "./FaqAccordion";

export const metadata = {
  title: "FAQ | Pondok Pesantren Darut Taufiq",
  description: "Pertanyaan yang sering diajukan mengenai Pondok Pesantren Darut Taufiq.",
};

const faqs = [
  {
    question: "Bagaimana cara mendaftar menjadi santri baru?",
    answer: "Pendaftaran dapat dilakukan secara online melalui website PPDB kami di ppdb.arkia.id atau datang langsung ke sekretariat pendaftaran di Pondok Pesantren Darut Taufiq. Pastikan untuk menyiapkan berkas dokumen seperti pas foto, fotokopi KK, Akte Kelahiran, dan rapor terakhir."
  },
  {
    question: "Kapan jadwal pendaftaran santri baru dibuka?",
    answer: "Pendaftaran santri baru Gelombang 1 biasanya dibuka mulai bulan Oktober hingga Desember, dan Gelombang 2 mulai bulan Januari hingga Maret (jika kuota masih tersedia). Informasi lengkap selalu kami perbarui di website dan sosial media resmi kami."
  },
  {
    question: "Apakah santri diperbolehkan membawa HP atau Laptop?",
    answer: "Santri tidak diperkenankan membawa HP (Handphone) selama berada di lingkungan pondok pesantren untuk menjaga fokus belajar. Laptop hanya diperbolehkan bagi santri yang membutuhkan untuk keperluan praktikum atau ekstrakurikuler tertentu dengan izin dan pengawasan ketat dari ustadz pembimbing."
  },
  {
    question: "Apa saja bahasa yang digunakan sehari-hari?",
    answer: "Pondok Pesantren Darut Taufiq menerapkan sistem bilingual. Bahasa resmi yang digunakan sehari-hari adalah Bahasa Arab dan Bahasa Inggris. Santri baru akan diberikan masa penyesuaian (language training) selama beberapa bulan pertama."
  },
  {
    question: "Bagaimana aturan penjengukan santri oleh orang tua?",
    answer: "Orang tua atau wali dapat menjenguk santri pada hari Ahad minggu ke-2 dan ke-4 setiap bulannya, mulai pukul 08.00 hingga 16.00 WIB. Penjengukan di luar jadwal tersebut harus dengan izin khusus dari pengurus kesantrian."
  },
  {
    question: "Apakah tersedia program beasiswa pendidikan?",
    answer: "Ya, kami menyediakan beasiswa prestasi bagi santri yang memiliki hafalan Al-Qur'an minimal 5 juz, beasiswa akademik, serta beasiswa keringanan biaya bagi santri yatim dan dhuafa yang lulus seleksi administrasi."
  }
];

export default function FaqPage() {
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
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our Management
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Mengenal sosok penuh dedikasi di balik pengelolaan Pondok Pesantren Darut Taufiq yang berkomitmen penuh dalam membangun institusi pendidikan Islam terpadu berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 border-l-4 border-primary pl-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Pusat Informasi
              </h2>
            </div>
            <p className="text-text-muted leading-relaxed max-w-2xl">
              Punya pertanyaan lain? Jangan ragu untuk menghubungi kami melalui halaman Kontak atau WhatsApp admin PPDB.
            </p>
          </div>

          {/* Accordion Component */}
          <FaqAccordion faqs={faqs} />

          <div className="mt-12 p-6 bg-surface rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold text-secondary mb-1">Masih ada pertanyaan?</h3>
              <p className="text-text-muted text-sm">Tim PPDB kami siap membantu menjawab pertanyaan Anda dengan senang hati.</p>
            </div>
            <a 
              href="https://wa.me/6282228880972" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Hubungi Admin PPDB
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
