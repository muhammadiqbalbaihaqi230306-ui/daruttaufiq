const fs = require('fs');

const pages = {
  'src/app/values/page.tsx': 'Menanamkan nilai-nilai luhur dan akhlak mulia sebagai fondasi utama dalam membentuk generasi penerus bangsa yang cerdas, beradab, dan berprestasi di Pondok Pesantren Darut Taufiq.',
  'src/app/prestasi/page.tsx': 'Kumpulan pencapaian dan kebanggaan santriwan dan santriwati Pondok Pesantren Darut Taufiq dalam berbagai bidang akademik maupun non-akademik di tingkat nasional dan internasional.',
  'src/app/faq/page.tsx': 'Temukan jawaban untuk berbagai pertanyaan yang sering diajukan mengenai program pendidikan, pendaftaran, dan kehidupan sehari-hari di Pondok Pesantren Darut Taufiq.',
  'src/app/budaya/page.tsx': 'Mengenal lebih dekat lingkungan Islami dan kebiasaan positif yang menjadi ciri khas kehidupan santri sehari-hari di Pondok Pesantren Darut Taufiq.',
  'src/app/berita/page.tsx': 'Dapatkan informasi terbaru, pengumuman resmi, dan artikel menarik seputar kegiatan serta perkembangan Pondok Pesantren Darut Taufiq.'
};

for (const [file, newText] of Object.entries(pages)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const oldText = 'Mengenal sosok penuh dedikasi di balik pengelolaan Pondok Pesantren Darut Taufiq yang berkomitmen penuh dalam membangun institusi pendidikan Islam terpadu berkualitas.';
    
    let updatedContent = content.replace(oldText, newText);
    
    // Also fix the title if it still says "Our Management"
    if (file.includes('prestasi')) updatedContent = updatedContent.replace(/>\s*Our Management\s*<\/h1>/g, '>\n                Prestasi Santri\n              </h1>');
    if (file.includes('faq')) updatedContent = updatedContent.replace(/>\s*Our Management\s*<\/h1>/g, '>\n                Tanya Jawab (FAQ)\n              </h1>');
    if (file.includes('budaya')) updatedContent = updatedContent.replace(/>\s*Our Management\s*<\/h1>/g, '>\n                Budaya Pesantren\n              </h1>');
    if (file.includes('berita')) updatedContent = updatedContent.replace(/>\s*Our Management\s*<\/h1>/g, '>\n                Berita & Informasi\n              </h1>');
    
    if (content !== updatedContent) {
      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}
