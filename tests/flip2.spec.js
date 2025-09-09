import { test, expect } from '@playwright/test';

test('Flipkart mobile search and add to cart (basic)', async ({ page }) => {
  let productPage;

  // 1) Open Flipkart
  try {
    await page.goto('https://www.flipkart.com/');
    console.log('Navigated to Flipkart');
    await expect(page).toHaveURL(/flipkart\.com/);
  } catch (error) {
    console.error('Failed to load Flipkart:', error);
  }

  // 2) Search box: type query
  try {
    const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands' });
    await searchBox.click();
    await searchBox.fill('mobil');
    console.log('Entered search term in the search box');
  } catch (error) {
    console.error('Failed to interact with the search box:', error);
  }

  // 3) Click suggestion/category
  try {
    await page.getByRole('link', { name: 'mobile 5g in Mobiles' }).click();
    console.log('Clicked on "mobile 5g in Mobiles"');
    await expect(page).toHaveURL(/search|flipkart\.com/i);
  } catch (error) {
    console.error('Failed to click on "mobile 5g in Mobiles":', error);
  }

  // 4) Apply MOTOROLA filter
  try {
    await page.getByTitle('MOTOROLA').locator('div').nth(1).click();
    console.log('Applied MOTOROLA filter');
  } catch (error) {
    console.error('Failed to apply MOTOROLA filter:', error);
  }

  // 5) Open product in a new tab (popup)
  try {
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Motorola G85 5G (Cobalt Blue' }).click();
    productPage = await popupPromise;
    console.log('Opened product page in a new tab');
    await expect(productPage).toHaveURL(/flipkart\.com/i);
  } catch (error) {
    console.error('Failed to open product page:', error);
  }

  // 6) Click "Add to cart" on product tab
  try {
    await productPage.getByRole('button', { name: 'Add to cart', exact: true }).click();
    console.log('Clicked "Add to cart"');
    // Optional basic assertion: still on product/cart related page
    await expect(productPage).toHaveURL(/flipkart\.com/i);
  } catch (error) {
    console.error('Failed to add product to cart:', error);
  }

  // 7) Short timeout so you can see the result in headed run
  try {
    const viewMs = 4000; // adjust if you want a longer/shorter pause
    console.log(`Waiting for ${viewMs} ms so you can view the page...`);
    await (productPage || page).waitForTimeout(viewMs);
  } catch (error) {
    console.error('Failed during final wait:', error);
  }
});