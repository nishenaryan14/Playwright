import { test, expect } from '@playwright/test';

test('playwright title',async({page})=>{
    await page.goto('https://playwright.dev/',{ waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);
    const actualTitle = await page.title();
    console.log("lab1 title : ",actualTitle);
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
})