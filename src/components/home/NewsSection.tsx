import { prisma } from "@/lib/prisma";
import NewsCarousel from "./NewsCarousel";

export default async function NewsSection() {
  const dbPosts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      publishedAt: "desc",
    },
  });

  // Gunakan data dummy jika database masih kosong agar desain tetap terlihat
  const posts = dbPosts.length > 0 ? dbPosts : [
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
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondary mb-4">
            Berita & Informasi Sekolah
          </h2>
          <p className="text-gray-600">
            Dapatkan informasi terbaru seputar kegiatan dan prestasi santri Pondok Pesantren Darut Taufiq
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <NewsCarousel posts={posts} />
        </div>
      </div>
    </section>
  );
}
