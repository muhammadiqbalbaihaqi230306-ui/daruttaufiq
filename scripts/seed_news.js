const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning old posts...");
  await prisma.post.deleteMany({});

  const posts = [
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
  ];

  for (const post of posts) {
    const created = await prisma.post.create({ data: post });
    console.log("Created post:", created.id, created.title);
  }

  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
