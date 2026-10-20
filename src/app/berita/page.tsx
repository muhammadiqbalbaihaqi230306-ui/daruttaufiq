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
  
  let mainPosts: any[] = [];
  let posts: any[] = [];

  try {
    mainPosts = await prisma.post.findMany({
      orderBy: { publishedAt: "desc" },
      take: 10,
    });

    posts = await prisma.post.findMany({
      where: category
        ? {
            category: {
              in: [
                category,
                category.toLowerCase(),
                category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(),
              ],
            },
          }
        : undefined,
      orderBy: { publishedAt: "desc" },
    });
  } catch (error) {
    console.error("Database connection error (Vercel SQLite issue). Falling back to dummy data.");
  }

  // Gunakan data dummy jika database masih kosong agar desain tetap terlihat
  if (mainPosts.length === 0) {
    const baseDummyPosts = [
      {
        id: "dummy-5",
        slug: "semarak-hari-santri-nasional-pondok-pesantren-darut-taufiq",
        title: "Semarak Hari Santri Nasional: Santri Pondok Pesantren Darut Taufiq Ikuti Apel Akbar di Jakarta Islamic Centre",
        thumbnail: "/images/berita6.jpg",
        publishedAt: new Date("2026-10-22T08:00:00.000Z"),
        excerpt: "Memperingati Hari Santri Nasional, santri dan dewan asatidz Pondok Pesantren Darut Taufiq bergabung bersama ribuan santri se-Jakarta Utara mengikuti Apel Akbar khidmat di pelataran Jakarta Islamic Centre.",
        category: "Kegiatan",
      },
      {
        id: "dummy-6",
        slug: "latihan-seni-bela-diri-pencak-silat-santri-darut-taufiq",
        title: "Latihan Seni Bela Diri Pencak Silat Santri Darut Taufiq: Membentuk Karakter Tangguh, Disiplin, dan Berakhlak",
        thumbnail: "/images/berita5.jpg",
        publishedAt: new Date("2026-10-20T08:00:00.000Z"),
        excerpt: "Membina kebugaran fisik sekaligus menanamkan adab, kemandirian, dan sportivitas Islami, para santri Pondok Pesantren Darut Taufiq antusias mengikuti latihan rutin bela diri Pencak Silat.",
        category: "Kegiatan",
      },
      {
        id: "dummy-4",
        slug: "keseruan-kegiatan-renang-santri-darut-taufiq",
        title: "Keseruan Kegiatan Renang Santri Darut Taufiq: Melatih Kebugaran dan Menghidupkan Olahraga Sunnah",
        thumbnail: "/images/berita4.jpeg",
        publishedAt: new Date("2026-07-18T08:30:00.000Z"),
        excerpt: "Dalam rangka menjaga kebugaran jasmani sekaligus mengamalkan anjuran Rasulullah SAW, santri Pondok Pesantren Darut Taufiq antusias mengikuti agenda renang ceria bersama.",
        category: "Kegiatan",
      },
      {
        id: "dummy-1",
        slug: "keseruan-mpls-dan-senam-pagi-santri-baru",
        title: "Keseruan Masa Pengenalan Lingkungan Sekolah (MPLS) dan Senam Pagi Bersama Santri Baru",
        thumbnail: "/images/berita3.jpg",
        publishedAt: new Date("2026-07-15T08:15:00.000Z"),
        excerpt: "Penuh semangat dan keceriaan, para santri baru Pondok Pesantren Darut Taufiq mengikuti kegiatan senam pagi bersama dan outbound edukatif dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS).",
        category: "Kegiatan",
      },
      {
        id: "dummy-2",
        slug: "upacara-pembukaan-tahun-ajaran-baru-dan-peresmian-fasilitas",
        title: "Upacara Pembukaan Tahun Ajaran Baru 2026/2027 dan Peresmian Fasilitas Belajar Darut Taufiq",
        thumbnail: "/images/berita2.jpg",
        publishedAt: new Date("2026-07-13T08:01:00.000Z"),
        excerpt: "Pondok Pesantren Darut Taufiq mengawali Tahun Ajaran 2026/2027 dengan menggelar upacara bendera khidmat yang dirangkai dengan simbolis pemotongan pita peresmian sarana ruang belajar baru.",
        category: "Kegiatan",
      },
      {
        id: "dummy-3",
        slug: "pertemuan-wali-santri-dan-apresiasi-prestasi-siswa",
        title: "Pertemuan Wali Santri dan Penyerahan Apresiasi Prestasi Siswa Pondok Pesantren Darut Taufiq",
        thumbnail: "/images/berita1.jpg",
        publishedAt: new Date("2026-06-26T10:44:00.000Z"),
        excerpt: "Mempererat sinergi antara sekolah dan orang tua, Pondok Pesantren Darut Taufiq mengadakan agenda temu silaturahmi wali santri sekaligus penyerahan kado apresiasi bagi santri berprestasi.",
        category: "Prestasi",
      },
    ];

    mainPosts = baseDummyPosts as any;

    if (category) {
      posts = baseDummyPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase()) as any;
    } else {
      posts = baseDummyPosts as any;
    }
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/berita2.jpg')" }}
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
                Berita & Kegiatan
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl ">
                Kabar terbaru, agenda kegiatan, dan dokumentasi aktivitas santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq.
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
              {['Semua', 'Kegiatan', 'Artikel'].map(cat => {
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
