import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { prisma } from "@/lib/prisma";

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
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.thumbnail || "/images/placeholder-news.jpg"}')` }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center pt-24 md:pt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl space-y-4 md:space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                <Link href="/" className="hover:text-white">Beranda</Link>
                <FaChevronRight className="text-[10px]" />
                <Link href="/berita" className="hover:text-white">Berita</Link>
                <FaChevronRight className="text-[10px]" />
                <span className="cursor-default">Artikel</span>
                <FaChevronRight className="text-[10px]" />
                <span className="text-white font-medium line-clamp-1">{post.title}</span>
              </div>
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight md:leading-[1.15]">
                {post.title}
              </h1>
              {/* Category Badge */}
              <span className="inline-block bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <article className="lg:w-2/3 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 text-text-muted text-sm mb-8 pb-6 border-b border-gray-100">
                  <FaCalendarAlt className="text-primary" />
                  <time dateTime={post.publishedAt.toISOString()}>
                    {new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(post.publishedAt)}
                  </time>
                </div>
                
                {/* Content rendered safely since it's from trusted DB seed */}
                <div 
                  className="prose prose-lg max-w-none text-text-muted prose-headings:text-secondary prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>

            {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-28">
              <h3 className="text-xl font-bold text-secondary mb-6 pb-4 border-b border-gray-100 relative">
                Berita Terbaru
                <div className="absolute bottom-[-1px] left-0 w-12 h-0.5 bg-primary" />
              </h3>
              
              <div className="space-y-6">
                {recentPosts.map((recent) => (
                  <div key={recent.id} className="flex gap-4 group">
                    <Link href={`/berita/${recent.slug}`} className="flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={recent.thumbnail || "/images/placeholder-news.jpg"}
                        alt={recent.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </Link>
                    <div>
                      <Link href={`/berita/${recent.slug}`}>
                        <h4 className="text-secondary font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {recent.title}
                        </h4>
                      </Link>
                      <div className="flex items-center gap-1.5 text-text-muted text-xs mt-2">
                        <FaCalendarAlt className="text-primary/70" />
                        <time dateTime={recent.publishedAt.toISOString()}>
                          {new Intl.DateTimeFormat("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }).format(recent.publishedAt)}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
