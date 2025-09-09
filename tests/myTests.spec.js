import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  await page.getByRole('textbox', { name: 'Name:' }).fill('sample');
  await page.getByRole('textbox', { name: 'Email:' }).fill('sample@gmail.com');
  await page.getByRole('radio', { name: 'Gender:' }).check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill('8880918652');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('1996-11-29');
  await page.getByRole('textbox', { name: 'Subjects:' }).fill('xyz');
  await page.getByRole('checkbox', { name: 'Hobbies:' }).check();
  await page.getByRole('textbox', { name: 'Currend Address' }).fill('asfasdfaf');
  await page.locator('#state').selectOption('Uttar Pradesh');
  await page.locator('#city').selectOption('Lucknow');

  await page.getByRole('button', { name: 'Login' }).click();
  console.log('Form filled successfully....ThankYou!');

});