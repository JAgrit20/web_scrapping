const puppeteer = require('puppeteer');
const { waitForDebugger } = require('inspector');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  
  const page = await browser.newPage();
  await page.goto('https://portal.svkm.ac.in/usermgmt/login',{waitUntil: 'networkidle2', timeout:300000});

  await page.type('.form-control[name="username"]','70021019002')

  await page.type('.form-control[name="password"]','zzm06l6T')

  await page.click('#userLogin')
  // await page.click('.feed')

//   await page.waitForSelector('.feed');

// const textContent = await page.evaluate(() => {
//    return document.querySelector('.feed');
// });
// await page.click(textContent);
  await page.waitForSelector("#semCurrent")
  await page.click("#semCurrent [class='col-lg-3 col-md-4 col-sm-6 col-6 text-center mb-3'] a")
  
  await page.waitFor(4000);
  await browser.close()
})();