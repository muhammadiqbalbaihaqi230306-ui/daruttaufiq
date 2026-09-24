import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Manajemen | Pondok Pesantren Darut Taufiq",
  description: "Susunan manajemen dan struktur organisasi Pondok Pesantren Darut Taufiq.",
};

const managementTeam = [
  {
    name: "K.H. Ahmad Bisri",
    role: "Mudir Pondok Pesantren",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    description: "Memimpin dan mengarahkan visi misi pesantren untuk mencetak generasi Qurani yang tangguh dan berakhlak mulia."
  },
  {
    name: "Ust. Tarmizi Fahmi",
    role: "Kepala Sekolah SMPIT",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    description: "Bertanggung jawab atas jalannya kurikulum terpadu dan pembinaan akademik maupun karakter siswa tingkat menengah."
  },
  {
    name: "Ustazah Rahma",
    role: "Kepala Sekolah SDIT",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    description: "Mengelola pendidikan dasar dengan pendekatan kecerdasan majemuk yang menyenangkan dan Islami bagi anak-anak."
  },
  {
    name: "Ust. Fulan bin Fulan",
    role: "Kepala Asrama Putra",
    image: "/images/images program/IMG-20250427-WA0012.jpg",
    description: "Membimbing santri putra dalam disiplin harian, kemandirian, serta penerapan adab Islami di lingkungan asrama."
  },
  {
    name: "Ustazah Fulanah",
    role: "Kepala Asrama Putri",
    image: "/images/images program/IMG-20260714-WA0092.jpg",
    description: "Mendampingi santri putri untuk menjadi muslimah yang taat, menjaga adab, dan berprestasi selama di asrama."
  },
  {
    name: "Ust. Abdullah",
    role: "Koordinator Tahfidz",
    image: "/images/images program/IMG-20260714-WA0110.jpg",
    description: "Memastikan target hafalan Al-Qur'an santri tercapai dengan kualitas bacaan dan tajwid yang mutqin (kuat)."
  },
];

export default function ManajemenPage() {
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
      
      {/* Konten Sambutan */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          {/* Sambutan Ketua Yayasan */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Foto Ketua Yayasan */}
            <div className="w-full lg:w-4/12 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group shrink-0 bg-gray-100">
              <Image 
                src="/images/images program/IMG-20250427-WA0012.jpg" 
                alt="Ketua Yayasan" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Teks Sambutan */}
            <div className="w-full lg:w-8/12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Sambutan Ketua Yayasan
              </h2>
              <div className="text-text-muted text-justify space-y-5 leading-relaxed text-[15px] lg:text-base">
                <p>
                  Assalamualaikum warahmatullahi wabarakatuh
                  <br /><br />
                  Segala puji dan syukur kepada Allah yang Maha Esa, Serta sholawat kita curahkan kepada nabi besar Muhammad Shalallahu Alaihi Wassalam. Di era global dan pesatnya Teknologi Informasi sekarang ini, tidak dipungkiri bahwa keberadaan sebuah website untuk suatu organisasi, termasuk Pondok Pesantren Darut Taufiq sangatlah penting.
                </p>
                <p>
                  Website dapat digunakan sebagai media penyebarluasan informasi-informasi dari pondok, yang memang harus diketahui oleh stake holder secara luas. Disamping itu, website juga dapat menjadi sarana promosi yang sangat efektif. Berbagai kegiatan positif pondok dapat diunggah, pengumuman disertai gambar-gambar yang relevan, sehingga masyarakat dapat mengetahui prestasi-prestasi yang telah berhasil diraih oleh Pondok Pesantren Darut Taufiq.
                </p>
                <p>
                  Maka diharapkan seluruh civitas khususnya peserta didik bisa menjadi generasi yang cerdas dan arif dalam memanfaatkan teknologi yang terus berkembang dalam menuju generasi masa depan yang berakhlak dan bermartabat. Tentu semua obsesi dan asa tersebut bisa diraih dengan bimbingan serta suri tauladan para guru/pendidik atau orang dewasa yang ada disekitarnya. Sehingga bisa mewujudkan Darut Taufiq sebagai lembaga pendidikan yang mampu mencetak generasi terbaik di masanya.
                  <br /><br />
                  Billahittaufiq wal hidayah, wal hamdu lillahi robbil alamiin.
                </p>
                <p className="font-bold text-secondary pt-4">
                  Ir. Lukman Hakim, M.Sc., MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Manajemen */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-24">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Susunan Manajemen
            </h2>
            <p className="text-gray-600">
              Tim manajemen profesional kami berkomitmen untuk memberikan pelayanan pendidikan terbaik dan lingkungan yang kondusif bagi seluruh santri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="100">
            {managementTeam.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col group relative max-w-[240px] mx-auto w-full"
              >
                {/* Image Container with Teardrop Shape */}
                <div className="relative w-full aspect-[3/4] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-2xl overflow-hidden bg-gray-200 mb-5 shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:shadow-black/20 transition-all duration-300">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Name & Role (Left aligned as in screenshot) */}
                <div className="text-left px-2">
                  <p className="text-primary font-medium text-sm mb-1 line-clamp-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold text-secondary line-clamp-2">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
