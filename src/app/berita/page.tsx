import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { prisma } from "@/lib/prisma";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CategoryFilter from "@/components/berita/CategoryFilter";

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
  
  let posts = await prisma.post.findMany({
    where: category ? { category } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  // Gunakan data dummy jika database masih kosong agar desain tetap terlihat
  if (posts.length === 0) {
    const allDummyPosts = [
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

          {/* Filters */}
          <CategoryFilter currentCategory={category} />

          {/* Featured Post (Urutan Pertama) */}
          {posts.length > 0 && (
            <div className="mb-12">
              <div className="group flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {/* Thumbnail */}
                <div className="relative h-[300px] lg:h-[400px] lg:w-3/5 overflow-hidden block shrink-0">
                  <Image
                    src={posts[0].thumbnail || "/images/placeholder-news.jpg"}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-2/5">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold font-sans mb-4 w-fit">
                    Sorotan Utama
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 group-hover:text-primary-dark transition-colors leading-snug line-clamp-3">
                      {posts[0].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <FaRegCalendarAlt className="text-gray-400" />
                    <time dateTime={posts[0].publishedAt.toISOString()}>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(posts[0].publishedAt)}
                    </time>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-8 line-clamp-3">
                    {posts[0].excerpt}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-block border border-primary text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white px-8 py-3 text-sm transition-colors rounded-md font-medium cursor-pointer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid (Sisa Berita) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Thumbnail */}
                <div
                  className="relative h-[240px] overflow-hidden block shrink-0"
                >
                  <Image
                    src={post.thumbnail || "/images/placeholder-news.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary-dark transition-colors leading-snug line-clamp-3">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <FaRegCalendarAlt className="text-gray-400" />
                    <time dateTime={post.publishedAt.toISOString()}>
                      {new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(post.publishedAt)}
                    </time>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-block border border-primary text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white px-6 py-2 text-sm transition-colors rounded-md font-medium cursor-pointer">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-24 text-text-muted bg-surface rounded-2xl mt-8">
              Belum ada berita dalam kategori ini.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
