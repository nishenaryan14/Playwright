import { test, expect } from '@playwright/test';
test('Wikipedia homepage title & URL', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page).toHaveTitle('Wikipedia');
  console.log('Current URL:', page.url());
});
