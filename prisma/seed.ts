import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Akhmad Bisri",
        role: "Local Guide",
        rating: 5,
        comment:
          "Bersih.. Rapi.. Nyaman buat sekolah.. Insya Allah berkah barokah ilmu dan para gurunya. Masjidnya bersih, rapi..nyaman buat sholat. Sekolah TK, SD, dan SMP Islam Terpadu yg berada di Bekasi. Lengkap dan mantapp",
      },
      {
        name: "Tarmizi Fahmi",
        role: "Local Guide",
        rating: 5,
        comment:
          "Ya, sekolah Islami yg seperti ini yang harus di dukung oleh Umat Islam, sesuai dgn cita cita pemiliknya. Pelayanan petugas cukup ramah dan cukup bersahabat. 👍👍👍",
      },
      {
        name: "Rahma Ummuaiza",
        role: "Local Guide",
        rating: 5,
        comment:
          "Salaf school mashaa Allah alhamdulillah... banyak ngadain acara sekolah yg memberi banyak kesempatan untuk siswanya berani tampil... sekolah sangat mendukung siswanya utk mengasah skill nya... recommended... my son is in here!",
      },
      {
        name: "Siti Nurhaliza",
        role: "Wali Murid",
        rating: 5,
        comment:
          "Alhamdulillah, anak saya senang bersekolah di sini. Guru-gurunya sangat perhatian dan lingkungannya sangat Islami. Anak jadi rajin sholat dan mengaji.",
      },
      {
        name: "Ahmad Fauzan",
        role: "Wali Murid",
        rating: 5,
        comment:
          "Fasilitas lengkap dan program unggulannya bagus banget. Tahfidz, bilingual, plus ekskul yang variatif. Recommended!",
      },
    ],
  });

  // Seed Posts
  await prisma.post.createMany({
    data: [
      {
        title: "Semarak Hari Santri Nasional: Santri Pondok Pesantren Darut Taufiq Ikuti Apel Akbar di Jakarta Islamic Centre",
        slug: "semarak-hari-santri-nasional-pondok-pesantren-darut-taufiq",
        excerpt: "Memperingati Hari Santri Nasional, santri dan dewan asatidz Pondok Pesantren Darut Taufiq bergabung bersama ribuan santri se-Jakarta Utara mengikuti Apel Akbar khidmat di pelataran Jakarta Islamic Centre.",
        content: `<p><strong>Jakarta Utara, 22 Oktober 2026</strong> — Peringatan Hari Santri Nasional (HSN) tahun ini berlangsung dengan penuh khidmat dan gegap gempita. Ratusan santri dan dewan asatidz Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq bergabung bersama ribuan santri dari berbagai pondok pesantren se-Jakarta Utara untuk mengikuti agenda Apel Akbar Peringatan Hari Santri Nasional yang dipusatkan di pelataran Jakarta Islamic Centre (JIC), Koja.</p>
<br/>
<p>Dengan mengenakan pakaian serba putih, peci hitam, dan balutan sarung khas santri Nusantara, para santri Darut Taufiq tampak antusias dan berbaris rapi di bawah naungan menara megah Jakarta Islamic Centre. Berbagai spanduk ucapan selamat dan panji kebanggaan pesantren turut dikibarkan sebagai simbol soliditas dan kecintaan santri terhadap tanah air.</p>
<br/>
<p>Peringatan Hari Santri Nasional mengenang peristiwa bersejarah Resolusi Jihad 22 Oktober 1945 yang dicetuskan oleh para ulama untuk mempertahankan kedaulatan bangsa. Dalam amanat apel akbar, ditekankan pentingnya peran santri masa kini untuk terus meneladani semangat patriotisme, menjaga marwah keislaman yang rahmatan lil 'alamin, serta aktif memberikan kontribusi nyata bagi kemajuan bangsa melalui ilmu pengetahuan dan teknologi.</p>
<br/>
<p>Keikutsertaan para santri Pondok Pesantren Darut Taufiq dalam apel akbar ini diharapkan semakin memupuk jiwa nasionalisme, kemandirian, dan ukhuwah islamiyah dalam sanubari setiap santri.</p>`,
        category: "Kegiatan",
        thumbnail: "/images/berita6.jpg",
        publishedAt: new Date("2026-10-22T08:00:00.000Z"),
      },
      {
        title: "Latihan Seni Bela Diri Pencak Silat Santri Darut Taufiq: Membentuk Karakter Tangguh, Disiplin, dan Berakhlak",
        slug: "latihan-seni-bela-diri-pencak-silat-santri-darut-taufiq",
        excerpt: "Membina kebugaran fisik sekaligus menanamkan adab, kemandirian, dan sportivitas Islami, para santri Pondok Pesantren Darut Taufiq antusias mengikuti latihan rutin bela diri Pencak Silat.",
        content: `<p><strong>Jakarta Utara, 20 Oktober 2026</strong> — Di bawah hangatnya sinar matahari pagi di lapangan serbaguna kampus pesantren, para santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq tampak bersemangat memperagakan gerakan jurus dalam latihan rutin ekstrakurikuler seni bela diri Pencak Silat.</p>
<br/>
<p>Mengenakan seragam khas bela diri berwarna hitam lengkap dengan sabuk putih, para santri dibimbing langsung oleh instruktur berpengalaman. Latihan diawali dengan pemanasan fisik intensif, peregangan otot, lalu dilanjutkan dengan penguasaan kuda-kuda (stance), teknik tangkisan, pukulan presisi, hingga pola langkah pertahanan diri.</p>
<br/>
<p>Bagi santri Darut Taufiq, pencak silat bukan sekadar olahraga fisik atau ajang pertarungan, melainkan sarana olah batin untuk menempa kedisiplinan, mengendalikan emosi, dan memupuk rasa saling menghargai. Nilai-nilai luhur silat Nusantara yang bersinergi dengan adab kepesantrenan mengajarkan santri untuk senantiasa rendah hati, pantang menyerah, dan hanya menggunakan kekuatan fisik untuk membela kebenaran serta menolong sesama.</p>
<br/>
<p>Melalui kegiatan ekstrakurikuler ini, Pondok Pesantren Darut Taufiq terus berkomitmen melahirkan generasi santri yang tidak hanya unggul dalam hafalan Al-Qur'an dan ilmu syar'i, namun juga memiliki jasmani yang bugar, tangguh, dan berdaya saing tinggi.</p>`,
        category: "Kegiatan",
        thumbnail: "/images/berita5.jpg",
        publishedAt: new Date("2026-10-20T08:00:00.000Z"),
      },
      {
        title: "Keseruan Kegiatan Renang Santri Darut Taufiq: Melatih Kebugaran dan Menghidupkan Olahraga Sunnah",
        slug: "keseruan-kegiatan-renang-santri-darut-taufiq",
        excerpt: "Dalam rangka menjaga kebugaran jasmani sekaligus mengamalkan anjuran Rasulullah SAW, santri Pondok Pesantren Darut Taufiq antusias mengikuti agenda renang ceria bersama.",
        content: `<p><strong>Jakarta Utara, 18 Juli 2026</strong> — Suasana ceria dan penuh semangat tampak terpancar dari wajah para santri Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq. Bertempat di kolam renang dengan pendampingan penuh dari dewan asatidz dan pembimbing, para santri antusias mengikuti agenda kegiatan renang ceria dan pembinaan fisik santri.</p>
<br/>
<p>Olahraga renang merupakan salah satu olahraga sunnah yang sangat dianjurkan oleh Rasulullah SAW dalam mendidik generasi muda, di samping berkuda dan memanah. Melalui kegiatan ini, santri diajarkan teknik-teknik dasar berenang seperti mengapung, pernapasan, serta gerakan dasar gaya dada dan gaya bebas yang dipandu secara bertahap dan teratur.</p>
<br/>
<p>Selain membangun kebugaran jasmani, stamina, dan daya tahan tubuh santri, kegiatan ini juga menjadi momen rekreasi edukatif untuk menyegarkan pikiran santri setelah menjalani aktivitas belajar dan menghafal Al-Qur'an secara intensif di pesantren. Tawa dan kebersamaan antar-santri semakin mempererat ukhuwah islamiyah di antara mereka.</p>
<br/>
<p>Pondok Pesantren Darut Taufiq terus berkomitmen menghadirkan keseimbangan antara pendidikan ruhiyah, intelektual, dan pembinaan jasmani santri agar terwujud generasi Qur'ani yang sehat, tangguh, dan berakhlak mulia.</p>`,
        category: "Kegiatan",
        thumbnail: "/images/berita4.jpeg",
        publishedAt: new Date("2026-07-18T08:30:00.000Z"),
      },
      {
        title: "Keseruan Masa Pengenalan Lingkungan Sekolah (MPLS) dan Senam Pagi Bersama Santri Baru",
        slug: "keseruan-mpls-dan-senam-pagi-santri-baru",
        excerpt: "Penuh semangat dan keceriaan, para santri baru Pondok Pesantren Darut Taufiq mengikuti kegiatan senam pagi bersama dan outbound edukatif dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS).",
        content: `<p><strong>Jakarta Utara, 15 Juli 2026</strong> — Suasana pagi di lapangan Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq tampak begitu semarak dan penuh kegembiraan. Ratusan santri baru dari berbagai jenjang berkumpul bersama untuk mengikuti agenda senam kebugaran jasmani dan <em>fun games</em> dalam rangkaian kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) Tahun Ajaran 2026/2027.</p>
<br/>
<p>Dengan mengenakan seragam olahraga dan kartu identitas peserta (nametag) berkalung di leher, para santri tampak antusias mengikuti setiap instruksi gerakan senam yang dipandu oleh para ustadz dan ustadzah. Senyum ceria terpancar di wajah mereka saat saling berkenalan dan berbaur dengan teman-teman baru.</p>
<br/>
<p>Kegiatan ini dirancang khusus untuk membangun kebersamaan, melatih kekompakan, serta menumbuhkan rasa percaya diri pada santri baru sebelum memasuki rutinitas kegiatan belajar mengajar dan kepesantrenan. Selain senam pagi, agenda MPLS hari ini juga diisi dengan permainan ketangkasan berkelompok (outbound ceria) dan pengenalan nilai-nilai kedisiplinan serta adab santri.</p>
<br/>
<p>Semoga keceriaan dan semangat di hari-hari awal ini terus menyertai para santri dalam menuntut ilmu, menghafal Al-Qur'an, dan meraih prestasi gemilang di Pondok Pesantren Darut Taufiq.</p>`,
        category: "Kegiatan",
        thumbnail: "/images/berita3.jpg",
        publishedAt: new Date("2026-07-15T08:15:00.000Z"),
      },
      {
        title: "Upacara Pembukaan Tahun Ajaran Baru 2026/2027 dan Peresmian Fasilitas Belajar Darut Taufiq",
        slug: "upacara-pembukaan-tahun-ajaran-baru-dan-peresmian-fasilitas",
        excerpt: "Pondok Pesantren Darut Taufiq mengawali Tahun Ajaran 2026/2027 dengan menggelar upacara bendera khidmat yang dirangkai dengan simbolis pemotongan pita peresmian sarana ruang belajar baru.",
        content: `<p><strong>Jakarta Utara, 13 Juli 2026</strong> — Mengawali langkah di Tahun Pelajaran 2026/2027, Pondok Pesantren Darut Taufiq menyelenggarakan Upacara Bendera Pembukaan Tahun Ajaran Baru di halaman kampus pesantren. Upacara ini dihadiri oleh jajaran pimpinan yayasan, dewan asatidz, tenaga kependidikan, serta seluruh santri dari unit SDIT dan SMPIT.</p>
<br/>
<p>Bertindak sebagai pembina upacara di mimbar kehormatan, pimpinan pesantren menyampaikan pesan motivasi dan amanat berharga mengenai pentingnya menata niat dalam menuntut ilmu, menjaga integritas akhlakul karimah, serta menegakkan kedisiplinan selama menempuh pendidikan di pesantren.</p>
<br/>
<p>Momen istimewa pada upacara kali ini ditandai dengan prosesi simbolis pemotongan pita hijau peresmian sarana dan fasilitas ruang belajar baru. Peresmian fasilitas ini merupakan wujud komitmen berkelanjutan Pondok Pesantren Darut Taufiq dalam menghadirkan lingkungan belajar yang representatif, nyaman, dan kondusif bagi tumbuh kembang santri.</p>
<br/>
<p>Upacara ditutup dengan doa bersama untuk memohon keberkahan, kemudahan, dan kelancaran bagi seluruh civitas akademika dalam menjalani seluruh proses pendidikan di tahun ajaran baru ini.</p>`,
        category: "Kegiatan",
        thumbnail: "/images/berita2.jpg",
        publishedAt: new Date("2026-07-13T08:01:00.000Z"),
      },
      {
        title: "Pertemuan Wali Santri dan Penyerahan Apresiasi Prestasi Siswa Pondok Pesantren Darut Taufiq",
        slug: "pertemuan-wali-santri-dan-apresiasi-prestasi-siswa",
        excerpt: "Mempererat sinergi antara sekolah dan orang tua, Pondok Pesantren Darut Taufiq mengadakan agenda temu silaturahmi wali santri sekaligus penyerahan kado apresiasi bagi santri berprestasi.",
        content: `<p><strong>Jakarta Utara, 26 Juni 2026</strong> — Hubungan sinergis antara madrasah/pesantren dan orang tua merupakan kunci utama keberhasilan pendidikan anak. Menyadari hal tersebut, Pondok Pesantren & Sekolah Islam Terpadu Darut Taufiq menggelar agenda Pertemuan Silaturahmi Wali Santri yang bertempat di ruang kelas pesantren.</p>
<br/>
<p>Ruang kelas dipenuhi kehangatan saat para wali santri duduk mendampingi putra-putri tercinta untuk menyimak pemaparan dari dewan asatidz terkait evaluasi capaian kurikulum, laporan perkembangan hafalan tahfidz Al-Qur'an, serta program pembinaan karakter santri yang telah berjalan.</p>
<br/>
<p>Sebagai bentuk penghargaan atas dedikasi dan kerja keras para santri selama semester berjalan, pihak pesantren juga menyerahkan kado bingkisan apresiasi prestasi. Hadiah tersebut diserahkan langsung di hadapan para orang tua sebagai wujud rasa bangga atas ketekunan para santri dalam belajar dan berakhlak mulia.</p>
<br/>
<p>Melalui pertemuan berkala ini, diharapkan komunikasi dan kerja sama yang harmonis antara pihak sekolah dan keluarga semakin erat demi mengantarkan santri menjadi generasi Qur'ani yang cerdas dan berkarakter unggul.</p>`,
        category: "Prestasi",
        thumbnail: "/images/berita1.jpg",
        publishedAt: new Date("2026-06-26T10:44:00.000Z"),
      },
    ],
  });

  console.log("✅ Seed data berhasil ditambahkan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
