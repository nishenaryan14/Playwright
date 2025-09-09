import { test, expect } from '@playwright/test';
test('Navigate to Playwright Python docs and verify title and URL', async ({ page }) => {
  await page.goto('https://playwright.dev/python/docs/intro',{timeout: 60000 });
  await expect(page).toHaveTitle(/Playwright for Python/);
  await expect(page).toHaveURL(/\/python\/docs\/intro/);
  console.log('Navigation and verification successful!');
});
