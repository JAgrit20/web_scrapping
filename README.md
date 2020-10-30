# web_scrapping
Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:

Generate screenshots and PDFs of pages.
Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
Automate form submission, UI testing, keyboard input, etc.
Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.
Capture a timeline trace of your site to help diagnose performance issues.
Test Chrome Extensions.
Give it a spin: https://try-puppeteer.appspot.com/

Getting Started
Installation
To use Puppeteer in your project, run:

npm i puppeteer
# or "yarn add puppeteer"
Note: When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win) that is guaranteed to work with the API. To skip the download, or to download a different browser, see Environment variables.

puppeteer-core
Since version 1.7.0 we publish the puppeteer-core package, a version of Puppeteer that doesn't download any browser by default.

npm i puppeteer-core
# or "yarn add puppeteer-core"
puppeteer-core is intended to be a lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one. Be sure that the version of puppeteer-core you install is compatible with the browser you intend to connect to.

See puppeteer vs puppeteer-core.

Usage
Puppeteer follows the latest maintenance LTS version of Node.

Note: Prior to v1.18.1, Puppeteer required at least Node v6.4.0. Versions from v1.18.1 to v2.1.0 rely on Node 8.9.0+. Starting from v3.0.0 Puppeteer starts to rely on Node 10.18.1+. All examples below use async/await which is only supported in Node v7.6.0 or greater.

Puppeteer will be familiar to people using other browser testing frameworks. You create an instance of Browser, open pages, and then manipulate them with Puppeteer's API.

Example - navigating to https://example.com and saving a screenshot as example.png:

Save file as example.js

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
Execute script on the command line

node example.js
Puppeteer sets an initial page size to 800×600px, which defines the screenshot size. The page size can be customized with Page.setViewport().

Example - create a PDF.

Save file as hn.js

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
Execute script on the command line

node hn.js
See Page.pdf() for more information about creating pdfs.

Example - evaluate script in the context of the page

Save file as get-dimensions.js

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
Execute script on the command line

node get-dimensions.js
See Page.evaluate() for more information on evaluate and related methods like evaluateOnNewDocument and exposeFunction.

Default runtime settings
1. Uses Headless mode

Puppeteer launches Chromium in headless mode. To launch a full version of Chromium, set the headless option when launching a browser:

const browser = await puppeteer.launch({headless: false}); // default is true
2. Runs a bundled version of Chromium

By default, Puppeteer downloads and uses a specific version of Chromium so its API is guaranteed to work out of the box. To use Puppeteer with a different version of Chrome or Chromium, pass in the executable's path when creating a Browser instance:

const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
You can also use Puppeteer with Firefox Nightly (experimental support). See Puppeteer.launch() for more information.

See this article for a description of the differences between Chromium and Chrome. This article describes some differences for Linux users.

3. Creates a fresh user profile

Puppeteer creates its own browser user profile which it cleans up on every run.

Resources
API Documentation
Examples
Community list of Puppeteer resources
Debugging tips
Turn off headless mode - sometimes it's useful to see what the browser is displaying. Instead of launching in headless mode, launch a full version of the browser using headless: false:

const browser = await puppeteer.launch({headless: false});
Slow it down - the slowMo option slows down Puppeteer operations by the specified amount of milliseconds. It's another way to help see what's going on.

const browser = await puppeteer.launch({
  headless: false,
  slowMo: 250 // slow down by 250ms
});
Capture console output - You can listen for the console event. This is also handy when debugging code in page.evaluate():

page.on('console', msg => console.log('PAGE LOG:', msg.text()));

await page.evaluate(() => console.log(`url is ${location.href}`));
Use debugger in application code browser

There are two execution context: node.js that is running test code, and the browser running application code being tested. This lets you debug code in the application code browser; ie code inside evaluate().

Use {devtools: true} when launching Puppeteer:

const browser = await puppeteer.launch({devtools: true});
Change default test timeout:

jest: jest.setTimeout(100000);

jasmine: jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

mocha: this.timeout(100000); (don't forget to change test to use function and not '=>')

Add an evaluate statement with debugger inside / add debugger to an existing evaluate statement:

await page.evaluate(() => {debugger;});
The test will now stop executing in the above evaluate statement, and chromium will stop in debug mode.

Use debugger in node.js

This will let you debug test code. For example, you can step over await page.click() in the node.js script and see the click happen in the application code browser.

Note that you won't be able to run await page.click() in DevTools console due to this Chromium bug. So if you want to try something out, you have to add it to your test file.

Add debugger; to your test, eg:
