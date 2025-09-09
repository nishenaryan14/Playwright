import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://edition.cnn.com/');
  await page.getByRole('link', { name: 'World’s biggest iceberg, A23a' }).click();
  await page.getByRole('link', { name: 'World’s biggest iceberg, A23a' }).click();
  await page.getByRole('heading', { name: 'World’s biggest iceberg, A23a' }).click();
});