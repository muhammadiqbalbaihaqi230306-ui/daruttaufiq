import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Sejarah | Pondok Pesantren Darut Taufiq",
  description: "Sejarah berdirinya Pondok Pesantren Darut Taufiq.",
};

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section Khusus Sejarah */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images%20halaman%20pp/IMG_20260921_074120.jpg')" }}
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
                Our History
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Menelusuri jejak perjalanan Pondok Pesantren Darut Taufiq dalam dedikasinya membangun institusi pendidikan Islam terpadu yang berkualitas di Kota Bekasi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Sejarah */}
      <section className="relative z-30 -mt-16 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-24">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Kolom Kiri - Gambar */}
            <div className="w-full lg:w-5/12 grid grid-cols-2 gap-3 lg:sticky lg:top-32">
              <div className="col-span-2 relative aspect-[2/1] rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src="/images/images program/IMG-20250427-WA0012.jpg" 
                  alt="Sejarah Darut Taufiq 1" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src="/images/images program/IMG-20260714-WA0092.jpg" 
                  alt="Sejarah Darut Taufiq 2" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src="/images/images program/IMG-20260714-WA0110.jpg" 
                  alt="Sejarah Darut Taufiq 3" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Kolom Kanan - Teks */}
            <div className="w-full lg:w-7/12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
                Sejarah Berdirinya Darut Taufiq
              </h2>
              
              <div className="text-text-muted text-justify space-y-6 leading-relaxed">
                <p>
                  <strong>Pondok Pesantren Darut Taufiq</strong> didirikan pada tahun 2016 dengan tujuan mulia untuk menghadirkan institusi pendidikan Islam yang unggul dan berkualitas di Kota Bekasi. Gagasan pendirian pondok pesantren ini berawal dari keinginan kuat untuk membangun lembaga pendidikan yang tidak hanya berfokus pada keunggulan aspek akademik semata, tetapi juga sangat mengedepankan pembentukan karakter Islami yang kokoh bagi para santrinya.
                </p>
                <p>
                  Sejak awal berdirinya, Pondok Pesantren Darut Taufiq berkomitmen secara penuh untuk mengintegrasikan kurikulum nasional dengan nilai-nilai murni Al-Qur'an dan As-Sunnah sesuai dengan pemahaman Salafush Shalih. Dalam perjalanannya, pondok pesantren ini terus mengalami perkembangan pesat melalui penambahan jenjang pendidikan terpadu, peningkatan sarana prasarana belajar mengajar, serta penerapan metode pembelajaran yang inovatif.
                </p>
                
                <h3 className="text-2xl font-bold text-secondary mt-10 mb-4">Ciri Khas & Fokus Pendidikan</h3>
                <p>
                  Untuk mencapai visi dan misi pendidikan tersebut, Pondok Pesantren Darut Taufiq mengusung konsep pendidikan terpadu dengan beberapa ciri khas utama, antara lain:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Multiple Intelligence:</strong> Kami meyakini bahwa setiap anak memiliki keistimewaan. Kami menerapkan pendekatan kecerdasan majemuk untuk menggali, menemukan, dan mengembangkan potensi serta bakat masing-masing santri.
                  </li>
                  <li>
                    <strong>Pendidikan Karakter (ADMK):</strong> Fokus utama kami adalah membentuk generasi yang berprestasi sekaligus berakhlak mulia melalui pilar ADMK: <em>Akhlaqul Karimah, Disiplin, Mandiri, dan Kreatif</em>.
                  </li>
                  <li>
                    <strong>Sistem Kelas Terpisah:</strong> Guna menciptakan lingkungan belajar yang lebih fokus, nyaman, kondusif, dan sesuai dengan batasan syariat Islam, kami menerapkan sistem kelas terpisah antara santriwan (laki-laki) dan santriwati (perempuan).
                  </li>
                </ul>
                
                <p className="mt-8 pt-6 border-t border-gray-100">
                  Dengan manajemen dan yayasan yang menaungi secara profesional, kami terus berupaya menjaga komitmen untuk senantiasa menyelenggarakan berbagai program pengembangan kompetensi pendidik dan memaksimalkan kegiatan kesiswaan. Pengelolaan pendidikan di Darut Taufiq selalu diupayakan agar tetap amanah, efektif, dan efisien demi melahirkan generasi pembangun umat.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
