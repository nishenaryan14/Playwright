const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Run only chromium in CI
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: true,
      },
    },
  ],

  // Global settings
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  // CI optimizations
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  // Reporters
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['allure-playwright'], // generates allure-results folder
  ],

  // Default test options
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
});