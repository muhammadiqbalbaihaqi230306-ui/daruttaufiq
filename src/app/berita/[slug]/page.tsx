import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaChevronRight, FaPrint, FaTwitter, FaFacebook } from "react-icons/fa";
import { prisma } from "@/lib/prisma";
import ImageSlider from "@/components/ImageSlider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = await prisma.post.findUnique({ where: { slug } });
  
  if (!post) {
    const dummyPosts = [
      { slug: "juara-1-yonkomlekad", title: "Peserta Didik SDIT Arkan Cendekia Raih Juara 1 pada YONKOMLEKAD Archery Championship 2026", excerpt: "Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih..." },
      { slug: "26-medali-msc", title: "26 Medali Berhasil Diraih SDIT Arkan Cendekia di Mentari Science Competition (MSC) 2026", excerpt: "Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan..." },
      { slug: "training-guru", title: "Yayasan Pendidikan Arkan Cendekia Selenggarakan Professional Development Training 2026 untuk Tingkatkan Kompetensi Guru", excerpt: "Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali..." },
      { slug: "artikel-pentingnya-pendidikan", title: "Pentingnya Pendidikan Karakter di Era Digital", excerpt: "Pendidikan karakter menjadi fondasi yang sangat krusial bagi generasi muda..." }
    ];
    post = dummyPosts.find((p) => p.slug === slug);
  }
  
  if (!post) return { title: "Not Found" };
  
  return {
    title: `${post.title} - Pondok Pesantren Darut Taufiq`,
    description: post.excerpt,
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let post: any = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    // Fallback ke dummy data jika database kosong (untuk demo di beranda)
    const dummyPosts = [
      {
        id: "dummy-1",
        slug: "juara-1-yonkomlekad",
        title: "Peserta Didik SDIT Arkan Cendekia Raih Juara 1 pada YONKOMLEKAD Archery Championship 2026",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.10.jpeg",
        publishedAt: new Date("2026-07-28"),
        excerpt: "Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih oleh peserta didik SDIT Arkan Cendekia...",
        content: "<p>Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih oleh peserta didik SDIT Arkan Cendekia dalam ajang perlombaan panahan YONKOMLEKAD Archery Championship 2026. Pertandingan yang berlangsung sengit ini berhasil dimenangkan berkat kedisiplinan dan latihan keras para santri.</p><br/><p>Keberhasilan ini tidak lepas dari doa dan dukungan penuh para orang tua serta dedikasi pelatih ekstrakurikuler panahan di sekolah.</p><p>Selamat kepada para juara, semoga prestasi ini menjadi motivasi untuk terus berprestasi di masa depan dan menjadi kebanggaan bagi Pondok Pesantren Darut Taufiq!</p>",
        category: "Prestasi",
      },
      {
        id: "dummy-2",
        slug: "26-medali-msc",
        title: "26 Medali Berhasil Diraih SDIT Arkan Cendekia di Mentari Science Competition (MSC) 2026",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.11-2.jpeg",
        publishedAt: new Date("2026-07-21"),
        excerpt: "Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan oleh peserta didik SDIT Arkan...",
        content: "<p>Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan oleh peserta didik SDIT Arkan Cendekia di ajang Mentari Science Competition (MSC) 2026. Sebanyak 26 medali berhasil dibawa pulang oleh para santri yang berbakat di bidang sains dan matematika.</p><br/><p>Alhamdulillah, prestasi ini membuktikan bahwa pendidikan Islam terpadu yang diterapkan di Darut Taufiq mampu menghasilkan generasi yang tidak hanya kuat hafalan Qur'annya, tapi juga sangat unggul dalam ilmu pengetahuan dan sains.</p>",
        category: "Prestasi",
      },
      {
        id: "dummy-3",
        slug: "training-guru",
        title: "Yayasan Pendidikan Arkan Cendekia Selenggarakan Professional Development Training 2026 untuk Tingkatkan Kompetensi Guru",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.13.jpeg",
        publishedAt: new Date("2026-07-14"),
        excerpt: "Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali menunjukkan komitmennya dalam...",
        content: "<p>Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali menunjukkan komitmennya dalam meningkatkan kualitas pendidikan dengan menyelenggarakan Professional Development Training 2026.</p><br/><p>Pelatihan ini diikuti oleh seluruh dewan asatidz dan guru, dengan menghadirkan para ahli di bidang pendidikan. Tujuannya adalah untuk meningkatkan kompetensi pedagogik dan profesionalisme dalam mengajar, serta mengadopsi metode pembelajaran modern yang interaktif.</p><p>Dengan kualitas guru yang terus ditingkatkan, kami yakin dapat memberikan pelayanan pendidikan terbaik dan mencetak santri yang cerdas, kreatif, serta berakhlak mulia.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-4",
        slug: "artikel-pentingnya-pendidikan",
        title: "Pentingnya Pendidikan Karakter di Era Digital",
        thumbnail: "/images/placeholder-news.jpg",
        publishedAt: new Date("2026-07-10"),
        excerpt: "Pendidikan karakter menjadi fondasi yang sangat krusial bagi generasi muda di tengah pesatnya perkembangan teknologi dan informasi.",
        content: "<p>Pendidikan karakter menjadi fondasi yang sangat krusial bagi generasi muda di tengah pesatnya perkembangan teknologi dan informasi.</p><br/><p>Di era digital ini, informasi dapat diakses dengan sangat mudah. Namun, kemudahan ini harus diimbangi dengan filter karakter dan akhlak yang kuat agar generasi muda tidak terpengaruh oleh dampak negatif dunia maya.</p><p>Oleh karena itu, peran pendidikan Islam terpadu menjadi semakin penting untuk mencetak generasi yang cerdas secara intelektual, sekaligus memiliki fondasi keimanan dan akhlakul karimah yang tangguh.</p>",
        category: "Artikel",
      },
    ];
    post = dummyPosts.find((p) => p.slug === slug);
  }

  if (!post) {
    notFound();
  }

  // Fetch recent posts for sidebar (skip for dummy posts)
  const isDummy = String(post.id).startsWith("dummy");
  const recentPosts = isDummy
    ? []
    : await prisma.post.findMany({
        where: { NOT: { id: post.id } },
        take: 4,
        orderBy: { publishedAt: "desc" },
      });

  return (
    <main className="min-h-screen bg-surface relative font-sans text-gray-800">
      
      {/* Hero Section (Mengikuti gaya Manajemen) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.thumbnail || "/images/placeholder-news.jpg"}')` }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl space-y-5">
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/80 text-[13px] font-medium">
                <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
                <span><FaChevronRight className="text-[10px]" /></span>
                <span className="text-white/60">Manajemen Komunikasi Institusi</span>
                <span><FaChevronRight className="text-[10px]" /></span>
                <Link href="/berita" className="hover:text-white transition-colors">Berita</Link>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-[1.4] text-left">
                {post.title}
              </h1>

              {/* Date & Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <FaCalendarAlt className="text-white/80 text-base" />
                  <time dateTime={post.publishedAt.toISOString()}>
                    Diterbitkan pada {new Intl.DateTimeFormat("id-ID", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(post.publishedAt).replace(/\//g, '/')}
                  </time>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-white/20 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[13px] rounded shadow-sm">
                    {post.category}
                  </span>
                  <span className="border border-white/20 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[13px] rounded shadow-sm">
                    Berita Sorotan
                  </span>
                  <span className="border border-white/20 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[13px] rounded shadow-sm">
                    Acara
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Konten Artikel Overlap */}
      <section className="relative z-30 -mt-16 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Main Content Area */}
          <article className="w-full max-w-[750px] mx-auto overflow-hidden">

          {/* Featured Image 1 */}
          <div className="mb-8 w-full max-w-[750px] mx-auto flex flex-col items-center">
            <div 
              className="w-full h-[30px] opacity-[0.2] mb-6" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3L27 15L15 27L3 15ZM0 0h12L0 12ZM30 0H18L30 12ZM0 30h12L0 18ZM30 30H18L30 18Z' fill='%231A202C'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center',
                backgroundSize: '30px 30px'
              }} 
            />
            
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-100">
              <Image 
                src={post.thumbnail || "/images/placeholder-news.jpg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div 
              className="w-full h-[30px] opacity-[0.2] mt-6" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3L27 15L15 27L3 15ZM0 0h12L0 12ZM30 0H18L30 12ZM0 30h12L0 18ZM30 30H18L30 18Z' fill='%231A202C'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'center',
                backgroundSize: '30px 30px'
              }} 
            />
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-[#4A5568] prose-headings:text-[#1A202C] prose-p:leading-[2.2] prose-p:text-[17px] prose-a:text-primary text-justify font-normal mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Featured Image 2 (Gallery) */}
          <ImageSlider 
            images={[
              post.thumbnail || "/images/placeholder-news.jpg",
              "/images/images program/IMG-20260714-WA0092.jpg",
              "/images/images program/IMG-20260714-WA0110.jpg",
              "/images/images program/IMG-20250427-WA0012.jpg"
            ]} 
          />
          </article>
        </div>

        {/* Last Updated Footer (Full Width Border) */}
        <div className="w-full mt-8 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex justify-end">
            <p className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
              Terakhir diubah: {new Intl.DateTimeFormat("id-ID", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(post.updatedAt).replace(/\//g, '/')} - {new Intl.DateTimeFormat("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }).format(post.updatedAt).replace('.', ':')} WIB
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
