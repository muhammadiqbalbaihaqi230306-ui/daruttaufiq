const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = [
  "https://www.instagram.com/p/DaCvH6BPiYn/embed/",
  "https://www.instagram.com/p/DTjYkVzkqA6/embed/",
  "https://www.instagram.com/reel/DdV50xjvrqJ/embed/",
  "https://www.instagram.com/reel/DdQLx_UBp13/embed/",
  "https://www.instagram.com/reel/DdD2uzQgVva/embed/",
  "https://www.instagram.com/reel/DcyY9fITXwD/embed/"
];

(async () => {
  const browser = await puppeteer.launch({ channel: 'msedge' });
  const page = await browser.newPage();
  
  // Set viewport to square
  await page.setViewport({ width: 500, height: 600 });
  
  const outDir = path.join(__dirname, 'public', 'images', 'ig');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (let i = 0; i < urls.length; i++) {
    try {
      console.log(`Processing ${urls[i]}...`);
      await page.goto(urls[i], { waitUntil: 'networkidle2' });
      
      // Try to find the main image or video poster
      // In embed, usually the image is inside an img tag with class 'EmbeddedMediaImage'
      let element = await page.$('.EmbeddedMediaImage');
      if (!element) {
         element = await page.$('img');
      }
      if (!element) {
         // Fallback to screenshotting a central crop
         console.log('Element not found, taking full crop');
         await page.screenshot({ 
           path: path.join(outDir, `ig-${i+1}.jpg`),
           clip: { x: 50, y: 50, width: 400, height: 400 } 
         });
      } else {
         await element.screenshot({ path: path.join(outDir, `ig-${i+1}.jpg`) });
      }
      console.log(`Saved ig-${i+1}.jpg`);
    } catch (err) {
      console.error(`Failed on ${urls[i]}`, err);
    }
  }
  
  await browser.close();
})();
