import { test, expect } from '@playwright/test';

test('Handle redirect and validate final page', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  console.log('Successfully landed on the correct page after redirect.');
});