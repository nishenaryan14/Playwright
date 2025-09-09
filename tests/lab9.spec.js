import { test, expect } from '@playwright/test';

test('Navigate to BBC News and check URL and title', async ({ page }) => {
  await page.goto('https://www.bbc.com/news',{ waitUntil: 'domcontentloaded', timeout: 60000 });
  await expect(page).toHaveURL('https://www.bbc.com/news');
  const title = await page.title();
  console.log(`Page Title: ${title}`);
});