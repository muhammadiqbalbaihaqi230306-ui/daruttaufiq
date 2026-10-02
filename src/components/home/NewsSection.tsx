import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { prisma } from "@/lib/prisma";
import MainNewsInteractive from "@/components/berita/MainNewsInteractive";

export default async function NewsSection() {
  let dbPosts: any[] = [];
  try {
    dbPosts = await prisma.post.findMany({
      take: 10,
      orderBy: {
        publishedAt: "desc",
      },
    });
  } catch (error) {
    console.error("Database connection error on Homepage. Falling back to dummy data.");
  }

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

  const posts = dbPosts.length > 0 ? dbPosts : allDummyPosts as any;

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF5]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Header with Left Accent & Show All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary border-l-4 border-primary pl-4 leading-tight">
              Berita & Informasi Sekolah
            </h2>
            <p className="text-gray-600 max-w-2xl pl-5">
              Dapatkan informasi terbaru seputar kegiatan dan prestasi santri Pondok Pesantren Darut Taufiq
            </p>
          </div>
          <Link href="/berita" className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-secondary hover:bg-gray-50 transition-colors whitespace-nowrap w-fit">
            Show All <FaArrowRight />
          </Link>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <MainNewsInteractive posts={posts} />
        </div>
      </div>
    </section>
  );
}
