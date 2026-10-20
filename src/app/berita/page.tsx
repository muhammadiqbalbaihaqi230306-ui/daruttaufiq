import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt, FaArrowRight, FaSearch, FaFileAlt, FaWhatsapp } from "@/components/ui/FlaticonIcons";
import { prisma } from "@/lib/prisma";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainNewsInteractive from "@/components/berita/MainNewsInteractive";

export const metadata = {
  title: "Berita & Kegiatan - Pondok Pesantren Darut Taufiq",
  description: "Kabar terbaru, prestasi, dan kegiatan dari Pondok Pesantren Darut Taufiq.",
};

const SITE_PAGES = [
  { title: "Beranda", url: "/", category: "Halaman Utama", description: "Profil umum dan ringkasan Pondok Pesantren Darut Taufiq" },
  { title: "Profil & Sejarah", url: "/sejarah", category: "Profil", description: "Sejarah berdirinya Pondok Pesantren Darut Taufiq" },
  { title: "Manajemen & Pimpinan", url: "/manajemen", category: "Profil", description: "Struktur manajemen dan dewan pimpinan yayasan" },
  { title: "Tenaga Pengajar (Asatidz)", url: "/pengajar", category: "Profil", description: "Dewan asatidz dan pendidik berdedikasi" },
  { title: "Nilai & Visi Misi", url: "/values", category: "Profil", description: "Nilai dasar Islam dan visi misi pesantren" },
  { title: "Budaya Pesantren", url: "/budaya", category: "Profil", description: "Karakter dan kebiasaan luhur santri sehari-hari" },
  { title: "Program Pendidikan", url: "/program", category: "Akademik", description: "Kurikulum terpadu, tahfidz, dan program unggulan" },
  { title: "Fasilitas Belajar & Asrama", url: "/fasilitas", category: "Akademik", description: "Sarana belajar, asrama, dan sarana olahraga" },
  { title: "Ekstrakurikuler (Ekskul)", url: "/ekskul", category: "Akademik", description: "Pencak silat, panahan, renang, robotika, hadrah" },
  { title: "Biaya Pendidikan & SPP", url: "/biaya", category: "Akademik", description: "Informasi rincian biaya masuk dan infaq bulanan" },
  { title: "Tanya Jawab (FAQ)", url: "/faq", category: "Akademik", description: "Pertanyaan umum seputar pendaftaran santri" },
  { title: "SDIT Darut Taufiq", url: "/sdit", category: "Unit Pendidikan", description: "Sekolah Dasar Islam Terpadu Full Day" },
  { title: "SMPIT Darut Taufiq", url: "/smpit", category: "Unit Pendidikan", description: "SMP Islam Terpadu Boarding & Full Day" },
  { title: "Kontak & Alamat", url: "/kontak", category: "Informasi", description: "Nomor telepon, WhatsApp, dan peta lokasi sekolah" },
  { title: "Penerimaan Santri Baru (PPDB)", url: "/ppdb", category: "PPDB", description: "Informasi alur pendaftaran PPDB dan jadwal gelombang" },
  { title: "Formulir Pendaftaran Online", url: "/ppdb/daftar", category: "PPDB", description: "Formulir registrasi calon santri baru online" },
];

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category, q } = await searchParams;
  
  let mainPosts: any[] = [];
  let posts: any[] = [];

  try {
    mainPosts = await prisma.post.findMany({
      orderBy: { publishedAt: "desc" },
      take: 10,
    });

    const whereCondition: any = {};
    if (category) {
      whereCondition.category = {
        in: [
          category,
          category.toLowerCase(),
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(),
        ],
      };
    }
    if (q) {
      whereCondition.OR = [
        { title: { contains: q } },
        { excerpt: { contains: q } },
        { category: { contains: q } },
      ];
    }

    posts = await prisma.post.findMany({
      where: Object.keys(whereCondition).length > 0 ? whereCondition : undefined,
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

    let filtered = baseDummyPosts;
    if (category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (q) {
      const qLower = q.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(qLower) ||
          p.excerpt.toLowerCase().includes(qLower) ||
          p.category.toLowerCase().includes(qLower)
      );
    }
    posts = filtered as any;
  }

  // Filter Halaman & Menu jika ada query pencarian
  const qTrim = q?.trim() || "";
  const matchedPages = qTrim
    ? SITE_PAGES.filter(
        (p) =>
          p.title.toLowerCase().includes(qTrim.toLowerCase()) ||
          p.description.toLowerCase().includes(qTrim.toLowerCase()) ||
          p.category.toLowerCase().includes(qTrim.toLowerCase())
      )
    : [];

  const totalResults = matchedPages.length + posts.length;
  const isSearchMode = Boolean(qTrim);

  return (
    <main className="min-h-screen bg-white">
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
                {isSearchMode ? "Pencarian Web" : "Berita & Kegiatan"}
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                {isSearchMode
                  ? `Hasil penelusuran kata kunci pencarian di seluruh halaman dan informasi Pondok Pesantren Darut Taufiq.`
                  : `Kabar terbaru, agenda kegiatan, dan dokumentasi aktivitas santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-[13px] sm:px-[21px] lg:px-[29px]">
        <div className="w-full max-w-[1406px] mx-auto bg-white rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-[2.5rem] pt-10 sm:pt-12 lg:pt-16 px-6 lg:px-12 xl:px-16 pb-16 lg:pb-24">

          {/* JIKA DALAM MODE PENCARIAN (q aktif) */}
          {isSearchMode ? (
            <div>
              {/* Header Banner Pencarian */}
              <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-surface border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-bold block mb-1">
                    Hasil Penelusuran Website
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
                    Kata Kunci: <span className="text-primary font-black">"{qTrim}"</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-text-muted mt-1.5">
                    {totalResults > 0
                      ? `Ditemukan ${totalResults} hasil (${matchedPages.length} halaman/menu, ${posts.length} berita)`
                      : "Tidak ada hasil yang sesuai"}
                  </p>
                </div>
                <Link
                  href="/berita"
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-white text-secondary border border-gray-200 hover:bg-gray-50 transition-colors shrink-0 shadow-sm"
                >
                  Reset Pencarian
                </Link>
              </div>

              {/* JIKA HASIL KOSONG (TIDAK DITEMUKAN) */}
              {totalResults === 0 ? (
                <div className="py-16 px-6 text-center max-w-2xl mx-auto my-4 animate-fade-in">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-3xl sm:text-4xl mb-6 shadow-sm border border-primary/20">
                    <FaSearch />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-3">
                    Pencarian Tidak Ditemukan
                  </h3>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8 max-w-lg mx-auto">
                    Maaf, kami tidak menemukan informasi, halaman, atau berita yang cocok dengan kata kunci <span className="font-bold text-secondary">"{qTrim}"</span>.
                  </p>

                  {/* Tips Pencarian */}
                  <div className="bg-surface rounded-2xl p-6 text-left border border-gray-100 mb-8 max-w-lg mx-auto shadow-sm">
                    <p className="text-xs font-bold text-secondary mb-2.5 flex items-center gap-1.5">
                      💡 Saran Pencarian:
                    </p>
                    <ul className="text-xs text-text-muted space-y-2 list-disc list-inside leading-relaxed">
                      <li>Pastikan ejaan kata kunci yang Anda masukkan sudah benar.</li>
                      <li>Gunakan kata yang lebih umum (misal: <em>PPDB, Biaya, SDIT, SMPIT, Fasilitas, Kontak</em>).</li>
                      <li>Atau jelajahi menu halaman utama melalui tombol di bawah.</li>
                    </ul>
                  </div>

                  {/* Tombol Tindakan */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/berita"
                      className="px-5 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg"
                    >
                      Lihat Semua Berita
                    </Link>
                    <Link
                      href="/"
                      className="px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-secondary border border-gray-200 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Kembali ke Beranda
                    </Link>
                    <Link
                      href="https://wa.me/6282228880972?text=Halo%20Admin%2C%20saya%20ingin%20bertanya%20informasi%20tentang%20Pondok%20Pesantren%20Darut%20Taufiq"
                      target="_blank"
                      className="px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <FaWhatsapp /> Tanya via WhatsApp
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  {/* Bagian 1: Halaman & Menu Terkait */}
                  {matchedPages.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                        <FaFileAlt className="text-primary text-base" /> Halaman & Menu Terkait ({matchedPages.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matchedPages.map((page, idx) => (
                          <Link
                            key={idx}
                            href={page.url}
                            className="p-5 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all group flex flex-col justify-between bg-white"
                          >
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full inline-block mb-3">
                                {page.category}
                              </span>
                              <h4 className="font-bold text-secondary text-base group-hover:text-primary transition-colors mb-1.5">
                                {page.title}
                              </h4>
                              <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                                {page.description}
                              </p>
                            </div>
                            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                              <span>Buka Halaman</span>
                              <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bagian 2: Berita & Kegiatan Terkait */}
                  {posts.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                        <FaRegCalendarAlt className="text-primary text-base" /> Berita Terkait ({posts.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
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
                                <h4 className="text-base font-bold text-secondary leading-snug line-clamp-2 group-hover:underline decoration-1 underline-offset-4 decoration-secondary cursor-pointer mb-6">
                                  {post.title}
                                </h4>
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
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* TAMPILAN NORMAL (NON-SEARCH) */
            <>
              {/* Header */}
              <div className="flex justify-between items-center mb-8 mt-6">
                <h2 className="text-3xl font-bold text-secondary">Main News</h2>
              </div>

              <MainNewsInteractive posts={mainPosts} hidePagination={true} />

              {/* Show All Section (Semua Berita Grid) */}
              <div className="mt-16 pt-12 border-t border-gray-100">
                {/* Category Filter ala UQU */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Semua', 'Kegiatan', 'Artikel'].map((cat) => {
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
                    {posts.map((post) => (
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}
