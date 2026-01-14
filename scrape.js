import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto('https://google.com', {
  waitUntil: 'networkidle',
  timeout: 30000
});

const title = await page.title();
console.log('title:', title);

await browser.close();
