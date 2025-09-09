import { test, expect } from '@playwright/test';

// Increase overall test timeout
test.setTimeout(60000);

test('Holland & Barrett shopping flow', async ({ page }) => {
  // 1. Navigate to homepage
  await page.goto('https://www.hollandandbarrett.com/', {
    timeout: 45000,
    waitUntil: 'domcontentloaded'
  });
  console.log('Opened Holland & Barrett homepage');

  // 2. Handle cookie consent
  await page.getByRole('button', { name: 'Manage cookies' }).click();
  await page.getByRole('button', { name: 'Reject All' }).click();
  console.log('Rejected cookies');

  // 3. Navigate to Vitamins & Supplements
  await page.getByRole('link', { name: 'Vitamins & Supplements' }).click();
  console.log('Navigated to Vitamins & Supplements');

  // 4. Open filters and apply category filters
  await page.locator('[data-test="all-filters"]').click();
  await page.getByRole('checkbox', { name: /Tablets/ }).click();
  await page.getByRole('checkbox', { name: /Vitamins/ }).click();
  console.log('Applied category filters');

  // 5. Adjust price range
  await page.getByRole('slider', { name: 'Range facet slider start' }).fill('12.76');
  console.log('Adjusted price range');

  // 6. View filtered items
  await page.getByRole('button', { name: /View \d+ items/ }).click();
  console.log('Viewed filtered items');

  // 7. Open product card
  await page.locator('[data-test="button-ProductCard"]').first().click();
  console.log('Opened product card');

  // 8. Close product modal
  await page.locator('.HeaderPart-module_closeButton__aR8cs').click();

  // 9. Navigate to Home page
  await page.getByRole('link', { name: 'Home page' }).click();
  console.log('Returned to Home page');

  // 10. Navigate to Sports Nutrition
  await page.getByRole('link', { name: 'Sports Nutrition' }).click();
  console.log('Navigated to Sports Nutrition');

  // 11. Sort by Highest Price
  await page.locator('[data-test="filter-Sort"]').click();
  await page.getByRole('option', { name: 'Highest Price' }).click();
  console.log('Sorted by Highest Price');

  // 12. Add a specific product to basket
  const productCard = page.getByRole('link', {
    name: /Critical Mass Professional Lean Mass Gainer Chocolate/,
    exact: true
  }).locator('[data-test="button-ProductCard"]');
  await productCard.click();
  console.log('Added product to basket');

  // 13. Close modal
  await page.locator('.HeaderPart-module_closeButton__aR8cs').click();

  // 14. Go to basket
  await page.getByTestId('basket-link').click();
  await page.getByRole('link', { name: 'Go to basket' }).click();
  console.log('Navigated to basket');

  //
});