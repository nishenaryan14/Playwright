import { test, expect } from '@playwright/test';

test('Check GitHub homepage title and URL', async ({ page }) => {
  await page.goto('https://github.com/');
  const title = await page.title();
  const url = page.url();
  console.log(`Title: ${title}`);
  console.log(`URL: ${url}`);
  await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub');
});
