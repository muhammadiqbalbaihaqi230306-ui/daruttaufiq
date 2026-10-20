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

  const posts = dbPosts.length > 0 ? dbPosts : baseDummyPosts as any;

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
