const puppeteer = require('puppeteer-core');
const fs = require('fs');

const SCRAPE_URL = process.env.SCRAPE_URL;

if (!SCRAPE_URL) {
  console.error('SCRAPE_URL environment variable is not set.');
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new'
  });

  const page = await browser.newPage();
  await page.goto(SCRAPE_URL, { waitUntil: 'domcontentloaded' });

  const data = await page.evaluate(() => {
    return {
      title: document.title,
      firstHeading: document.querySelector('h1')?.innerText || null
    };
  });

  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));

  console.log('Scraped data written to scraped_data.json');

  await browser.close();
})();

