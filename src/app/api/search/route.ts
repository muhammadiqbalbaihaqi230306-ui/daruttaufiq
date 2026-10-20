import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SITE_PAGES = [
  { title: "Beranda", url: "/", category: "Halaman", description: "Halaman utama Pondok Pesantren Darut Taufiq" },
  { title: "Profil & Sejarah", url: "/sejarah", category: "Profil", description: "Sejarah berdirinya Pondok Pesantren Darut Taufiq" },
  { title: "Manajemen & Pimpinan", url: "/manajemen", category: "Profil", description: "Struktur manajemen dan pimpinan yayasan" },
  { title: "Tenaga Pengajar (Asatidz)", url: "/pengajar", category: "Profil", description: "Dewan asatidz dan pengajar berdedikasi" },
  { title: "Nilai & Visi Misi", url: "/values", category: "Profil", description: "Nilai dasar dan visi misi pesantren" },
  { title: "Budaya Pesantren", url: "/budaya", category: "Profil", description: "Karakter dan kebiasaan luhur santri" },
  { title: "Program Pendidikan", url: "/program", category: "Akademik", description: "Kurikulum terpadu dan program unggulan" },
  { title: "Fasilitas Belajar & Asrama", url: "/fasilitas", category: "Akademik", description: "Sarana belajar, asrama, dan olahraga modern" },
  { title: "Ekstrakurikuler (Ekskul)", url: "/ekskul", category: "Akademik", description: "Pencak silat, panahan, renang, hadrah, robotik" },
  { title: "Biaya Pendidikan & SPP", url: "/biaya", category: "Akademik", description: "Informasi rincian biaya masuk dan infaq" },
  { title: "Tanya Jawab (FAQ)", url: "/faq", category: "Akademik", description: "Pertanyaan umum seputar pendaftaran santri" },
  { title: "SDIT Darut Taufiq", url: "/sdit", category: "Unit Pendidikan", description: "Sekolah Dasar Islam Terpadu Full Day" },
  { title: "SMPIT Darut Taufiq", url: "/smpit", category: "Unit Pendidikan", description: "SMP Islam Terpadu Boarding & Full Day" },
  { title: "Berita & Kegiatan", url: "/berita", category: "Berita", description: "Kabar terbaru dan agenda santri" },
  { title: "Kontak & Alamat", url: "/kontak", category: "Informasi", description: "Nomor telepon, WhatsApp, dan lokasi" },
  { title: "Penerimaan Santri Baru (PPDB)", url: "/ppdb", category: "PPDB", description: "Informasi alur PPDB dan jadwal gelombang" },
  { title: "Formulir Pendaftaran Online", url: "/ppdb/daftar", category: "PPDB", description: "Isi formulir registrasi santri baru online" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";

  if (!q) {
    return NextResponse.json({ pages: [], posts: [] });
  }

  const queryLower = q.toLowerCase();

  // 1. Search site pages
  const matchedPages = SITE_PAGES.filter(
    (p) =>
      p.title.toLowerCase().includes(queryLower) ||
      p.category.toLowerCase().includes(queryLower) ||
      p.description.toLowerCase().includes(queryLower)
  ).slice(0, 4);

  // 2. Search database posts
  let matchedPosts: any[] = [];
  try {
    matchedPosts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: q } },
          { excerpt: { contains: q } },
          { category: { contains: q } },
        ],
      },
      orderBy: { publishedAt: "desc" },
      take: 4,
      select: {
        id: true,
        slug: true,
        title: true,
        category: true,
        thumbnail: true,
      },
    });
  } catch (error) {
    // Fallback dummy posts if DB error
    const dummyPosts = [
      {
        id: "dummy-5",
        slug: "semarak-hari-santri-nasional-pondok-pesantren-darut-taufiq",
        title: "Semarak Hari Santri Nasional: Santri Ikuti Apel Akbar",
        category: "Kegiatan",
        thumbnail: "/images/berita6.jpg",
      },
      {
        id: "dummy-6",
        slug: "latihan-seni-bela-diri-pencak-silat-santri-darut-taufiq",
        title: "Latihan Seni Bela Diri Pencak Silat Santri Darut Taufiq",
        category: "Kegiatan",
        thumbnail: "/images/berita5.jpg",
      },
      {
        id: "dummy-4",
        slug: "keseruan-kegiatan-renang-santri-darut-taufiq",
        title: "Keseruan Kegiatan Renang Santri Darut Taufiq",
        category: "Kegiatan",
        thumbnail: "/images/berita4.jpeg",
      },
      {
        id: "dummy-1",
        slug: "keseruan-mpls-dan-senam-pagi-santri-baru",
        title: "Keseruan Masa Pengenalan Lingkungan Sekolah (MPLS)",
        category: "Kegiatan",
        thumbnail: "/images/berita3.jpg",
      },
    ];

    matchedPosts = dummyPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(queryLower) ||
        p.category.toLowerCase().includes(queryLower)
    ).slice(0, 4);
  }

  return NextResponse.json({
    pages: matchedPages,
    posts: matchedPosts,
  });
}
