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
        title:
          "Peserta Didik SDIT Arkan Cendekia Raih Juara 1 pada YONKOMLEKAD Archery Championship 2026",
        slug: "peserta-didik-sdit-arkan-cendekia-raih-juara-1-pada-yonkomlekad-archery-championship-2026",
        excerpt:
          "Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih oleh peserta didik SDIT Arkan Cendekia dalam ajang kompetisi panahan bergengsi.",
        content: `<p>Bekasi, 28 Juli 2026 — Prestasi membanggakan kembali diraih oleh peserta didik SDIT Arkan Cendekia. Kali ini, siswa-siswi kami berhasil meraih <strong>Juara 1</strong> pada ajang <strong>YONKOMLEKAD Archery Championship 2026</strong>.</p>
<p>Kompetisi panahan ini diikuti oleh berbagai sekolah dari seluruh wilayah Bekasi dan sekitarnya. Para peserta didik Arkan menunjukkan kemampuan yang luar biasa, ketepatan, dan fokus yang tinggi selama pertandingan berlangsung.</p>
<p>Pencapaian ini merupakan bukti nyata bahwa program ekstrakurikuler di Arkan Islamic School tidak hanya mengembangkan aspek akademik, tetapi juga potensi non-akademik siswa sesuai dengan bakat dan minat mereka.</p>
<p>Selamat kepada para juara! Semoga prestasi ini menjadi motivasi untuk terus berprestasi. 🏹🏆</p>`,
        category: "prestasi",
        thumbnail: "/images/berita/archery.jpg",
        publishedAt: new Date("2026-07-28"),
      },
      {
        title:
          "26 Medali Berhasil Diraih SDIT Arkan Cendekia di Mentari Science Competition (MSC) 2026",
        slug: "26-medali-berhasil-diraih-sdit-arkan-cendekia-di-mentari-science-competition-msc-2026",
        excerpt:
          "Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan oleh peserta didik SDIT Arkan Cendekia dalam ajang sains tingkat nasional.",
        content: `<p>Bekasi, 21 Juli 2026 — Prestasi membanggakan kembali ditorehkan oleh peserta didik SDIT Arkan Cendekia. Dalam ajang <strong>Mentari Science Competition (MSC) 2026</strong>, para siswa berhasil membawa pulang <strong>26 medali</strong>.</p>
<p>Kompetisi sains ini menguji kemampuan siswa dalam berbagai bidang ilmu pengetahuan termasuk Matematika, IPA, dan Teknologi. Arkan Islamic School mengirimkan delegasi terbaiknya dan hasilnya sangat membanggakan.</p>
<p>Perolehan 26 medali ini menjadikan SDIT Arkan Cendekia sebagai salah satu sekolah dengan perolehan medali terbanyak dalam kompetisi tersebut.</p>`,
        category: "prestasi",
        thumbnail: "/images/berita/science.jpg",
        publishedAt: new Date("2026-07-21"),
      },
      {
        title:
          "Yayasan Pendidikan Arkan Cendekia Selenggarakan Professional Development Training 2026",
        slug: "yayasan-pendidikan-arkan-cendekia-selenggarakan-professional-development-training-2026",
        excerpt:
          "Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali menunjukkan komitmennya dalam meningkatkan kualitas tenaga pendidik.",
        content: `<p>Bekasi, 13 Juli 2026 — Yayasan Pendidikan Arkan Cendekia kembali menunjukkan komitmennya dalam meningkatkan kualitas tenaga pendidik melalui penyelenggaraan <strong>Professional Development Training 2026</strong>.</p>
<p>Pelatihan ini diikuti oleh seluruh guru dan tenaga kependidikan dari unit TKIT, SDIT, dan SMPIT Arkan. Program ini bertujuan untuk meningkatkan kompetensi pedagogik, profesional, sosial, dan kepribadian para pendidik.</p>
<p>Dengan guru-guru yang terus berkembang, Arkan Islamic School berkomitmen untuk memberikan pendidikan terbaik bagi generasi masa depan.</p>`,
        category: "berita",
        thumbnail: "/images/berita/training.jpg",
        publishedAt: new Date("2026-07-14"),
      },
      {
        title: "Peringatan Isra Mi'raj 1447 H di Arkan Islamic School",
        slug: "peringatan-isra-miraj-1447h-arkan-islamic-school",
        excerpt:
          "Arkan Islamic School mengadakan peringatan Isra Mi'raj Nabi Muhammad SAW 1447 H dengan berbagai rangkaian kegiatan yang bermakna.",
        content: `<p>Arkan Islamic School mengadakan peringatan <strong>Isra Mi'raj Nabi Muhammad SAW 1447 H</strong> dengan berbagai rangkaian kegiatan yang bermakna bagi seluruh peserta didik.</p>
<p>Acara dimulai dengan pembacaan Al-Qur'an, dilanjutkan dengan ceramah tentang hikmah dan pelajaran dari peristiwa Isra Mi'raj. Para siswa juga menampilkan berbagai penampilan seni Islami.</p>
<p>Kegiatan ini bertujuan untuk menanamkan nilai-nilai keimanan dan kecintaan terhadap Nabi Muhammad SAW sejak dini.</p>`,
        category: "kegiatan",
        thumbnail: "/images/berita/isra-miraj.jpg",
        publishedAt: new Date("2026-06-20"),
      },
      {
        title: "Wisuda Tahfidz Angkatan ke-5 SDIT Arkan Cendekia",
        slug: "wisuda-tahfidz-angkatan-ke-5-sdit-arkan-cendekia",
        excerpt:
          "SDIT Arkan Cendekia menggelar Wisuda Tahfidz Angkatan ke-5 untuk para siswa yang telah menyelesaikan hafalan Al-Quran.",
        content: `<p>SDIT Arkan Cendekia dengan bangga menggelar <strong>Wisuda Tahfidz Angkatan ke-5</strong> pada hari Sabtu lalu. Acara yang dihadiri oleh para orang tua dan tamu undangan ini menjadi momen yang sangat membanggakan.</p>
<p>Sebanyak 45 siswa berhasil menyelesaikan target hafalan mereka, mulai dari 1 juz hingga 5 juz Al-Quran. Program Tahfidz merupakan salah satu program unggulan Arkan Islamic School yang menjadi kebanggaan sekolah.</p>
<p>Semoga para penghafal Al-Quran ini senantiasa istiqomah dalam menjaga hafalannya dan menjadi kebanggaan orang tua serta umat. Aamiin.</p>`,
        category: "kegiatan",
        thumbnail: "/images/berita/wisuda-tahfidz.jpg",
        publishedAt: new Date("2026-06-10"),
      },
      {
        title:
          "Tips Memilih Sekolah Islam Terbaik untuk Anak di Era Modern",
        slug: "tips-memilih-sekolah-islam-terbaik-untuk-anak",
        excerpt:
          "Memilih sekolah yang tepat untuk anak adalah keputusan penting. Berikut tips memilih sekolah Islam yang berkualitas.",
        content: `<p>Memilih sekolah yang tepat untuk anak adalah salah satu keputusan terpenting yang harus diambil oleh orang tua. Di era modern ini, sekolah Islam terpadu menjadi pilihan yang semakin populer.</p>
<h3>1. Perhatikan Kurikulum</h3>
<p>Pastikan sekolah memiliki kurikulum yang seimbang antara ilmu umum dan ilmu agama. Sekolah yang baik mengintegrasikan nilai-nilai Islam dalam setiap mata pelajaran.</p>
<h3>2. Kualitas Guru</h3>
<p>Guru yang berkualitas dan memiliki akhlak yang baik akan menjadi teladan bagi anak-anak. Cari tahu latar belakang pendidikan dan pelatihan guru-guru di sekolah tersebut.</p>
<h3>3. Fasilitas dan Lingkungan</h3>
<p>Lingkungan belajar yang bersih, aman, dan kondusif sangat mempengaruhi proses belajar anak. Pastikan fasilitas sekolah memadai.</p>
<h3>4. Program Unggulan</h3>
<p>Sekolah yang baik memiliki program unggulan seperti Tahfidz, bilingual, dan ekstrakurikuler yang beragam untuk mengembangkan potensi anak.</p>`,
        category: "artikel",
        thumbnail: "/images/berita/tips-sekolah.jpg",
        publishedAt: new Date("2026-05-15"),
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
