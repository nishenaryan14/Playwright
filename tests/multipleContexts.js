const { chromium } = require('playwright');

async function multipleContextsExample() {
  console.log('Creating multiple browser contexts...');

  const browser = await chromium.launch({ headless: false });

  try {
    // First context - GitHub
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://github.com', { waitUntil: 'domcontentloaded' });
    console.log('Context 1: GitHub loaded');

    // Second context - Twitter
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://twitter.com', { waitUntil: 'domcontentloaded' });
    await page2.waitForTimeout(5000);
    console.log('Context 2: Twitter loaded');

    // Demonstrate isolation
    const githubTitle = await page1.title();
    const twitterTitle = await page2.title();
    console.log('Context 1 Title:', githubTitle);
    console.log('Context 2 Title:', twitterTitle);

    // Optional wait to observe
    await Promise.all([
      page1.waitForTimeout(2000),
      page2.waitForTimeout(2000)
    ]);
  } catch (error) {
    console.error('Error during context operations:', error);
  } finally {
    await browser.close();
    console.log('All contexts closed');
  }
}

multipleContextsExample();