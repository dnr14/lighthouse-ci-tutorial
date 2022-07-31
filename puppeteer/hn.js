const puppeteer = require('puppeteer');

const path = './puppeteer/pdfs/hn.pdf';
const format = 'a4';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await page.pdf({ path, format });
    await browser.close();
})();
