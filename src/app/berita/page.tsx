import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { prisma } from "@/lib/prisma";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainNewsInteractive from "@/components/berita/MainNewsInteractive";


export const metadata = {
  title: "Berita & Kegiatan - Pondok Pesantren Darut Taufiq",
  description: "Kabar terbaru, prestasi, dan kegiatan dari Pondok Pesantren Darut Taufiq.",
};

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  
  let mainPosts = await prisma.post.findMany({
    orderBy: { publishedAt: "desc" },
    take: 10,
  });

  let posts = await prisma.post.findMany({
    where: category ? { category } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  // Gunakan data dummy jika database masih kosong agar desain tetap terlihat
  if (mainPosts.length === 0) {
    const baseDummyPosts = [
      {
        id: "dummy-1",
        slug: "juara-1-yonkomlekad",
        title: "Peserta Didik SDIT Arkan Cendekia Raih Juara 1 pada YONKOMLEKAD Archery Championship 2026",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.10.jpeg",
        publishedAt: new Date("2026-07-28"),
        excerpt: "Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih oleh peserta didik SDIT Arkan Cendekia...",
        category: "Prestasi",
      },
      {
        id: "dummy-2",
        slug: "26-medali-msc",
        title: "26 Medali Berhasil Diraih SDIT Arkan Cendekia di Mentari Science Competition (MSC) 2026",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.11-2.jpeg",
        publishedAt: new Date("2026-07-21"),
        excerpt: "Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan oleh peserta didik SDIT Arkan...",
        category: "Prestasi",
      },
      {
        id: "dummy-3",
        slug: "training-guru",
        title: "Yayasan Pendidikan Arkan Cendekia Selenggarakan Professional Development Training 2026 untuk Tingkatkan Kompetensi Guru",
        thumbnail: "/images/WhatsApp-Image-2022-05-30-at-16.22.13.jpeg",
        publishedAt: new Date("2026-07-14"),
        excerpt: "Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali menunjukkan komitmennya dalam...",
        category: "Kegiatan",
      },
      {
        id: "dummy-4",
        slug: "artikel-pentingnya-pendidikan",
        title: "Pentingnya Pendidikan Karakter di Era Digital",
        thumbnail: "/images/placeholder-news.jpg",
        publishedAt: new Date("2026-07-10"),
        excerpt: "Pendidikan karakter menjadi fondasi yang sangat krusial bagi generasi muda di tengah pesatnya perkembangan teknologi dan informasi.",
        category: "Artikel",
      },
    ];

    const allDummyPosts = Array.from({ length: 10 }).map((_, i) => ({
      ...baseDummyPosts[i % baseDummyPosts.length],
      id: `dummy-${i + 1}`,
      title: `${baseDummyPosts[i % baseDummyPosts.length].title} ${i > 3 ? `(Bagian ${i + 1})` : ""}`,
    }));

    mainPosts = allDummyPosts as any;

    if (category) {
      posts = allDummyPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase()) as any;
    } else {
      posts = allDummyPosts as any;
    }
  }

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

          {/* Header */}
          <div className="flex justify-between items-center mb-8 mt-6">
            <h2 className="text-3xl font-bold text-secondary">Main News</h2>
          </div>

          <MainNewsInteractive posts={mainPosts} hidePagination={true} />

          {/* Show All Section (Semua Berita Grid) */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            {/* Category Filter ala UQU */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Semua', 'Prestasi', 'Artikel', 'Kegiatan'].map(cat => {
                const isActive = category ? category === cat.toLowerCase() : cat === 'Semua';
                return (
                  <Link
                    key={cat}
                    href={cat === 'Semua' ? '/berita' : `?category=${cat.toLowerCase()}`}
                    scroll={false}
                    className={`px-5 py-2 text-sm font-bold rounded-md transition-colors ${
                      isActive 
                        ? 'bg-primary text-white' 
                        : 'bg-[#EAF6ED] text-primary hover:bg-[#D5EEDB]'
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>

              {/* Grid 3 Kolom */}
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map(post => (
                    <div key={post.id} className="group flex flex-col border border-gray-200 rounded-[1.25rem] overflow-hidden bg-white p-2">
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-50">
                        <Image
                          src={post.thumbnail || "/images/placeholder-news.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col flex-grow px-2 pb-2">
                        <Link href={`/berita/${post.slug}`}>
                          <h3 className="text-base font-bold text-secondary leading-snug line-clamp-2 group-hover:underline decoration-1 underline-offset-4 decoration-secondary cursor-pointer mb-6">
                            {post.title}
                          </h3>
                        </Link>
                        <div className="flex justify-between items-end mt-auto border-t border-gray-50 pt-4">
                          <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
                            <FaRegCalendarAlt className="text-gray-400" />
                            <time dateTime={post.publishedAt.toISOString()}>
                              {new Intl.DateTimeFormat("en-CA", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                              }).format(post.publishedAt).replace(/-/g, '/')}
                            </time>
                          </div>
                          <Link href={`/berita/${post.slug}`} className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors shrink-0">
                            <FaArrowRight className="text-xs" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-text-muted bg-gray-50 rounded-2xl border border-gray-100">
                  Belum ada berita dalam kategori ini.
                </div>
              )}
            </div>
        </div>
      </section>
    </main>
  );
}
