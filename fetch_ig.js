const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  "https://www.instagram.com/p/DaCvH6BPiYn/embed/captioned",
  "https://www.instagram.com/p/DTjYkVzkqA6/embed/captioned",
  "https://www.instagram.com/reel/DdV50xjvrqJ/embed/captioned",
  "https://www.instagram.com/reel/DdQLx_UBp13/embed/captioned",
  "https://www.instagram.com/reel/DdD2uzQgVva/embed/captioned",
  "https://www.instagram.com/reel/DcyY9fITXwD/embed/captioned"
];

const outDir = path.join(__dirname, 'public', 'images', 'ig');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

(async () => {
  for (let i = 0; i < urls.length; i++) {
    console.log('Fetching', urls[i]);
    const html = await fetchHtml(urls[i]);
    
    // Look for <img class="EmbeddedMediaImage" src="...">
    const imgMatch = html.match(/class="EmbeddedMediaImage"[^>]*src="([^"]+)"/);
    if (imgMatch) {
       const imgUrl = imgMatch[1].replace(/&amp;/g, '&');
       console.log('Found image URL:', imgUrl);
       await downloadImage(imgUrl, path.join(outDir, `ig-${i+1}.jpg`));
       console.log(`Saved ig-${i+1}.jpg`);
    } else {
       console.log('Image not found in HTML. Check login redirect.');
    }
  }
})();
