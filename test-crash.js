import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('pageerror', (err) => {
    console.error('PAGE ERROR:', err.message);
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('CONSOLE ERROR:', msg.text());
    }
  });

  await page.goto('http://localhost:5174/');
  
  // Wait for loading screen to disappear
  await new Promise(r => setTimeout(r, 3000));

  // Scroll down multiple times to trigger the crash
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => window.scrollBy(0, 500));
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('Scroll completed. Check if there were any errors above.');
  await browser.close();
})();
