import { test, expect } from '@playwright/test';

test('Flipkart codegen test', async ({ page }) => {
  try {
    await page.goto('https://www.flipkart.com/');
    console.log('Navigated to Flipkart');
    await expect(page).toHaveURL(/flipkart\.com/);
  } catch (error) {
    console.error('Failed to load Flipkart:', error);
  }


  try {
    await page.getByRole('link', { name: 'Projectors', exact: true }).click();
    console.log('Clicked on Projectors');
  } catch (error) {
    console.error('Failed to click Projectors:', error);
  }

  let page1;
  try {
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Maizic Smarthome Android 11.0' }).first().click();
    page1 = await page1Promise;
    console.log('Opened product in new tab');
    await expect(page1).toHaveURL(/flipkart\.com/);
  } catch (error) {
    console.error('Failed to open product page:', error);
  }

  try {
    await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
    console.log('Clicked Add to Cart');
  } catch (error) {
    console.error('Failed to add product to cart:', error);
  }

  try {
    await page1.getByRole('link', { name: 'Flipkart' }).click();
    console.log('Clicked Flipkart logo to return to home');
  } catch (error) {
    console.error('Failed to return to home:', error);
  }

  try {
    await page1.getByRole('link', { name: '1 Cart' }).click();
    console.log('Opened Cart Page');
    await expect(page1).toHaveURL(/cart|viewcart/);
  } catch (error) {
    console.error('Failed to open Cart:', error);
  }
});