import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaPrint, FaTwitter, FaFacebook } from "@/components/ui/FlaticonIcons";
import { prisma } from "@/lib/prisma";
import ImageSlider from "@/components/ImageSlider";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = null;
  try {
    post = await prisma.post.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Prisma error in generateMetadata:", error);
  }
  
  if (!post) {
    const dummyPosts = [
      { slug: "semarak-hari-santri-nasional-pondok-pesantren-darut-taufiq", title: "Semarak Hari Santri Nasional: Santri Pondok Pesantren Darut Taufiq Ikuti Apel Akbar di Jakarta Islamic Centre", excerpt: "Memperingati Hari Santri Nasional, santri dan dewan asatidz Pondok Pesantren Darut Taufiq bergabung bersama ribuan santri se-Jakarta Utara mengikuti Apel Akbar khidmat di pelataran Jakarta Islamic Centre." },
      { slug: "latihan-seni-bela-diri-pencak-silat-santri-darut-taufiq", title: "Latihan Seni Bela Diri Pencak Silat Santri Darut Taufiq: Membentuk Karakter Tangguh, Disiplin, dan Berakhlak", excerpt: "Membina kebugaran fisik sekaligus menanamkan adab, kemandirian, dan sportivitas Islami, para santri Pondok Pesantren Darut Taufiq antusias mengikuti latihan rutin bela diri Pencak Silat." },
      { slug: "keseruan-kegiatan-renang-santri-darut-taufiq", title: "Keseruan Kegiatan Renang Santri Darut Taufiq: Melatih Kebugaran dan Menghidupkan Olahraga Sunnah", excerpt: "Dalam rangka menjaga kebugaran jasmani sekaligus mengamalkan anjuran Rasulullah SAW, santri Pondok Pesantren Darut Taufiq antusias mengikuti agenda renang ceria bersama." },
      { slug: "keseruan-mpls-dan-senam-pagi-santri-baru", title: "Keseruan Masa Pengenalan Lingkungan Sekolah (MPLS) dan Senam Pagi Bersama Santri Baru", excerpt: "Penuh semangat dan keceriaan, para santri baru Pondok Pesantren Darut Taufiq mengikuti kegiatan senam pagi bersama..." },
      { slug: "upacara-pembukaan-tahun-ajaran-baru-dan-peresmian-fasilitas", title: "Upacara Pembukaan Tahun Ajaran Baru 2026/2027 dan Peresmian Fasilitas Belajar Darut Taufiq", excerpt: "Pondok Pesantren Darut Taufiq mengawali Tahun Ajaran 2026/2027 dengan menggelar upacara bendera khidmat..." },
      { slug: "pertemuan-wali-santri-dan-apresiasi-prestasi-siswa", title: "Pertemuan Wali Santri dan Penyerahan Apresiasi Prestasi Siswa Pondok Pesantren Darut Taufiq", excerpt: "Mempererat sinergi antara sekolah dan orang tua, Pondok Pesantren Darut Taufiq mengadakan agenda temu silaturahmi..." }
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
  
  let post: any = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug },
    });
  } catch (error) {
    console.error("Prisma error in BeritaDetailPage:", error);
  }
  if (!post) {
    // Fallback ke dummy data jika database kosong (untuk demo di beranda)
    const dummyPosts = [
      {
        id: "dummy-5",
        slug: "semarak-hari-santri-nasional-pondok-pesantren-darut-taufiq",
        title: "Semarak Hari Santri Nasional: Santri Pondok Pesantren Darut Taufiq Ikuti Apel Akbar di Jakarta Islamic Centre",
        thumbnail: "/images/berita6.jpg",
        publishedAt: new Date("2026-10-22T08:00:00.000Z"),
        updatedAt: new Date("2026-10-22T08:00:00.000Z"),
        excerpt: "Memperingati Hari Santri Nasional, santri dan dewan asatidz Pondok Pesantren Darut Taufiq bergabung bersama ribuan santri se-Jakarta Utara mengikuti Apel Akbar khidmat di pelataran Jakarta Islamic Centre.",
        content: "<p><strong>Jakarta Utara, 22 Oktober 2026</strong> — Peringatan Hari Santri Nasional (HSN) tahun ini berlangsung dengan penuh khidmat dan gegap gempita. Ratusan santri dan dewan asatidz Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq bergabung bersama ribuan santri dari berbagai pondok pesantren se-Jakarta Utara untuk mengikuti agenda Apel Akbar Peringatan Hari Santri Nasional yang dipusatkan di pelataran Jakarta Islamic Centre (JIC), Koja.</p><br/><p>Dengan mengenakan pakaian serba putih, peci hitam, dan balutan sarung khas santri Nusantara, para santri Darut Taufiq tampak antusias dan berbaris rapi di bawah naungan menara megah Jakarta Islamic Centre. Berbagai spanduk ucapan selamat dan panji kebanggaan pesantren turut dikibarkan sebagai simbol soliditas dan kecintaan santri terhadap tanah air.</p><br/><p>Peringatan Hari Santri Nasional mengenang peristiwa bersejarah Resolusi Jihad 22 Oktober 1945 yang dicetuskan oleh para ulama untuk mempertahankan kedaulatan bangsa. Dalam amanat apel akbar, ditekankan pentingnya peran santri masa kini untuk terus meneladani semangat patriotisme, menjaga marwah keislaman yang rahmatan lil 'alamin, serta aktif memberikan kontribusi nyata bagi kemajuan bangsa melalui ilmu pengetahuan dan teknologi.</p><br/><p>Keikutsertaan para santri Pondok Pesantren Darut Taufiq dalam apel akbar ini diharapkan semakin memupuk jiwa nasionalisme, kemandirian, dan ukhuwah islamiyah dalam sanubari setiap santri.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-6",
        slug: "latihan-seni-bela-diri-pencak-silat-santri-darut-taufiq",
        title: "Latihan Seni Bela Diri Pencak Silat Santri Darut Taufiq: Membentuk Karakter Tangguh, Disiplin, dan Berakhlak",
        thumbnail: "/images/berita5.jpg",
        publishedAt: new Date("2026-10-20T08:00:00.000Z"),
        updatedAt: new Date("2026-10-20T08:00:00.000Z"),
        excerpt: "Membina kebugaran fisik sekaligus menanamkan adab, kemandirian, dan sportivitas Islami, para santri Pondok Pesantren Darut Taufiq antusias mengikuti latihan rutin bela diri Pencak Silat.",
        content: "<p><strong>Jakarta Utara, 20 Oktober 2026</strong> — Di bawah hangatnya sinar matahari pagi di lapangan serbaguna kampus pesantren, para santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq tampak bersemangat memperagakan gerakan jurus dalam latihan rutin ekstrakurikuler seni bela diri Pencak Silat.</p><br/><p>Mengenakan seragam khas bela diri berwarna hitam lengkap dengan sabuk putih, para santri dibimbing langsung oleh instruktur berpengalaman. Latihan diawali dengan pemanasan fisik intensif, peregangan otot, lalu dilanjutkan dengan penguasaan kuda-kuda (stance), teknik tangkisan, pukulan presisi, hingga pola langkah pertahanan diri.</p><br/><p>Bagi santri Darut Taufiq, pencak silat bukan sekadar olahraga fisik atau ajang pertarungan, melainkan sarana olah batin untuk menempa kedisiplinan, mengendalikan emosi, dan memupuk rasa saling menghargai. Nilai-nilai luhur silat Nusantara yang bersinergi dengan adab kepesantrenan mengajarkan santri untuk senantiasa rendah hati, pantang menyerah, dan hanya menggunakan kekuatan fisik untuk membela kebenaran serta menolong sesama.</p><br/><p>Melalui kegiatan ekstrakurikuler ini, Pondok Pesantren Darut Taufiq terus berkomitmen melahirkan generasi santri yang tidak hanya unggul dalam hafalan Al-Qur'an dan ilmu syar'i, namun juga memiliki jasmani yang bugar, tangguh, dan berdaya saing tinggi.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-4",
        slug: "keseruan-kegiatan-renang-santri-darut-taufiq",
        title: "Keseruan Kegiatan Renang Santri Darut Taufiq: Melatih Kebugaran dan Menghidupkan Olahraga Sunnah",
        thumbnail: "/images/berita4.jpeg",
        publishedAt: new Date("2026-07-18T08:30:00.000Z"),
        updatedAt: new Date("2026-07-18T08:30:00.000Z"),
        excerpt: "Dalam rangka menjaga kebugaran jasmani sekaligus mengamalkan anjuran Rasulullah SAW, santri Pondok Pesantren Darut Taufiq antusias mengikuti agenda renang ceria bersama.",
        content: "<p><strong>Jakarta Utara, 18 Juli 2026</strong> — Suasana ceria dan penuh semangat tampak terpancar dari wajah para santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq. Bertempat di kolam renang dengan pendampingan penuh dari dewan asatidz dan pembimbing, para santri antusias mengikuti agenda kegiatan renang ceria dan pembinaan fisik santri.</p><br/><p>Olahraga renang merupakan salah satu olahraga sunnah yang sangat dianjurkan oleh Rasulullah SAW dalam mendidik generasi muda, di samping berkuda dan memanah. Melalui kegiatan ini, santri diajarkan teknik-teknik dasar berenang seperti mengapung, pernapasan, serta gerakan dasar gaya dada dan gaya bebas yang dipandu secara bertahap dan teratur.</p><br/><p>Selain membangun kebugaran jasmani, stamina, dan daya tahan tubuh santri, kegiatan ini juga menjadi momen rekreasi edukatif untuk menyegarkan pikiran santri setelah menjalani aktivitas belajar dan menghafal Al-Qur'an secara intensif di pesantren. Tawa dan kebersamaan antar-santri semakin mempererat ukhuwah islamiyah di antara mereka.</p><br/><p>Pondok Pesantren Darut Taufiq terus berkomitmen menghadirkan keseimbangan antara pendidikan ruhiyah, intelektual, dan pembinaan jasmani santri agar terwujud generasi Qur'ani yang sehat, tangguh, dan berakhlak mulia.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-1",
        slug: "keseruan-mpls-dan-senam-pagi-santri-baru",
        title: "Keseruan Masa Pengenalan Lingkungan Sekolah (MPLS) dan Senam Pagi Bersama Santri Baru",
        thumbnail: "/images/berita3.jpg",
        publishedAt: new Date("2026-07-15T08:15:00.000Z"),
        excerpt: "Penuh semangat dan keceriaan, para santri baru Pondok Pesantren Darut Taufiq mengikuti kegiatan senam pagi bersama dan outbound edukatif dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS).",
        content: "<p><strong>Jakarta Utara, 15 Juli 2026</strong> — Suasana pagi di lapangan Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq tampak begitu semarak dan penuh kegembiraan. Ratusan santri baru dari berbagai jenjang berkumpul bersama untuk mengikuti agenda senam kebugaran jasmani dan <em>fun games</em> dalam rangkaian kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) Tahun Ajaran 2026/2027.</p><br/><p>Dengan mengenakan seragam olahraga dan kartu identitas peserta (nametag) berkalung di leher, para santri tampak antusias mengikuti setiap instruksi gerakan senam yang dipandu oleh para ustadz dan ustadzah. Senyum ceria terpancar di wajah mereka saat saling berkenalan dan berbaur dengan teman-teman baru.</p><br/><p>Kegiatan ini dirancang khusus untuk membangun kebersamaan, melatih kekompakan, serta menumbuhkan rasa percaya diri pada santri baru sebelum memasuki rutinitas kegiatan belajar mengajar dan kepesantrenan. Selain senam pagi, agenda MPLS hari ini juga diisi dengan permainan ketangkasan berkelompok (outbound ceria) dan pengenalan nilai-nilai kedisiplinan serta adab santri.</p><br/><p>Semoga keceriaan dan semangat di hari-hari awal ini terus menyertai para santri dalam menuntut ilmu, menghafal Al-Qur'an, dan meraih prestasi gemilang di Pondok Pesantren Darut Taufiq.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-2",
        slug: "upacara-pembukaan-tahun-ajaran-baru-dan-peresmian-fasilitas",
        title: "Upacara Pembukaan Tahun Ajaran Baru 2026/2027 dan Peresmian Fasilitas Belajar Darut Taufiq",
        thumbnail: "/images/berita2.jpg",
        publishedAt: new Date("2026-07-13T08:01:00.000Z"),
        excerpt: "Pondok Pesantren Darut Taufiq mengawali Tahun Ajaran 2026/2027 dengan menggelar upacara bendera khidmat yang dirangkai dengan simbolis pemotongan pita peresmian sarana ruang belajar baru.",
        content: "<p><strong>Jakarta Utara, 13 Juli 2026</strong> — Mengawali langkah di Tahun Pelajaran 2026/2027, Pondok Pesantren Darut Taufiq menyelenggarakan Upacara Bendera Pembukaan Tahun Ajaran Baru di halaman kampus pesantren. Upacara ini dihadiri oleh jajaran pimpinan yayasan, dewan asatidz, tenaga kependidikan, serta seluruh santri dari unit SDIT dan SMPIT.</p><br/><p>Bertindak sebagai pembina upacara di mimbar kehormatan, pimpinan pesantren menyampaikan pesan motivasi dan amanat berharga mengenai pentingnya menata niat dalam menuntut ilmu, menjaga integritas akhlakul karimah, serta menegakkan kedisiplinan selama menempuh pendidikan di pesantren.</p><br/><p>Momen istimewa pada upacara kali ini ditandai dengan prosesi simbolis pemotongan pita hijau peresmian sarana dan fasilitas ruang belajar baru. Peresmian fasilitas ini merupakan wujud komitmen berkelanjutan Pondok Pesantren Darut Taufiq dalam menghadirkan lingkungan belajar yang representatif, nyaman, dan kondusif bagi tumbuh kembang santri.</p><br/><p>Upacara ditutup dengan doa bersama untuk memohon keberkahan, kemudahan, dan kelancaran bagi seluruh civitas akademika dalam menjalani seluruh proses pendidikan di tahun ajaran baru ini.</p>",
        category: "Kegiatan",
      },
      {
        id: "dummy-3",
        slug: "pertemuan-wali-santri-dan-apresiasi-prestasi-siswa",
        title: "Pertemuan Wali Santri dan Penyerahan Apresiasi Prestasi Siswa Pondok Pesantren Darut Taufiq",
        thumbnail: "/images/berita1.jpg",
        publishedAt: new Date("2026-06-26T10:44:00.000Z"),
        excerpt: "Mempererat sinergi antara sekolah dan orang tua, Pondok Pesantren Darut Taufiq mengadakan agenda temu silaturahmi wali santri sekaligus penyerahan kado apresiasi bagi santri berprestasi.",
        content: "<p><strong>Jakarta Utara, 26 Juni 2026</strong> — Hubungan sinergis antara madrasah/pesantren dan orang tua merupakan kunci utama keberhasilan pendidikan anak. Menyadari hal tersebut, Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq menggelar agenda Pertemuan Silaturahmi Wali Santri yang bertempat di ruang kelas pesantren.</p><br/><p>Ruang kelas dipenuhi kehangatan saat para wali santri duduk mendampingi putra-putri tercinta untuk menyimak pemaparan dari dewan asatidz terkait evaluasi capaian kurikulum, laporan perkembangan hafalan tahfidz Al-Qur'an, serta program pembinaan karakter santri yang telah berjalan.</p><br/><p>Sebagai bentuk penghargaan atas dedikasi dan kerja keras para santri selama semester berjalan, pihak pesantren juga menyerahkan kado bingkisan apresiasi prestasi. Hadiah tersebut diserahkan langsung di hadapan para orang tua sebagai wujud rasa bangga atas ketekunan para santri dalam belajar dan berakhlak mulia.</p><br/><p>Melalui pertemuan berkala ini, diharapkan komunikasi dan kerja sama yang harmonis antara pihak sekolah dan keluarga semakin erat demi mengantarkan santri menjadi generasi Qur'ani yang cerdas dan berkarakter unggul.</p>",
        category: "Prestasi",
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
    <main className="min-h-screen bg-white relative font-sans text-gray-800">
      
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
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Berita", href: "/berita" },
                ]}
              />

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
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 5L25 15L15 25L5 15ZM0 0h10L0 10ZM30 0H20L30 10ZM0 30h10L0 20ZM30 30H20L30 20Z' fill='%231A202C'/%3E%3C/svg%3E")`,
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
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 5L25 15L15 25L5 15ZM0 0h10L0 10ZM30 0H20L30 10ZM0 30h10L0 20ZM30 30H20L30 20Z' fill='%231A202C'/%3E%3C/svg%3E")`,
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
              }).format(post.updatedAt || post.publishedAt || new Date()).replace(/\//g, '/')} - {new Intl.DateTimeFormat("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }).format(post.updatedAt || post.publishedAt || new Date()).replace('.', ':')} WIB
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
