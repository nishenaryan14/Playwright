const { chromium, firefox, webkit } = require('playwright');

async function launchBrowsers() {
  console.log('Launching different browsers...');

  try {
    // Launch Chromium
    const chromiumBrowser = await chromium.launch({ headless: false });
    console.log('Chromium launched');
    await chromiumBrowser.close();

    // Launch Firefox
    const firefoxBrowser = await firefox.launch({ headless: false });
    console.log('Firefox launched');
    await firefoxBrowser.close();

    // Launch WebKit
    const webkitBrowser = await webkit.launch({ headless: false });
    console.log('WebKit launched');
    await webkitBrowser.close();

    console.log('All browsers launched and closed successfully');
  } catch (error) {
    console.error('Error launching browsers:', error);
  }
}

launchBrowsers();