import { test, expect } from '@playwright/test';

test('Navigate to Google and check URL', async ({ page }) => {
  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await expect(page).toHaveURL('https://www.google.com/');
  console.log('Successfully navigated to Google homepage!');
});