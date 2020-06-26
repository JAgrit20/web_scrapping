const puppeteer = require('puppeteer');
const { waitForDebugger } = require('inspector');
const butt = '.feed > div';
(async () => {
  const browser = await puppeteer.launch({headless:false});
  
  const page = await browser.newPage();
  await page .goto('https://portal.svkm.ac.in/usermgmt/login');
//   wait(2);
//   const inputElement = await page.$('input[type=submit]');
//await delay(2000);
 

  await page.type('.form-control[name="username"]','70021019002')
//await delay(2000);

  await page.type('.form-control[name="password"]','zzm06l6T')

  await page.click('#userLogin')
  
  await page.click(butt)


//   await page.screenshot({path: 'example.png'});
// await page.evaluate((a, b) => {
//     document.querySelector('#userName').value = 70021019002;
//     document.querySelector('#password').value = zzm06l6T;
//     document.querySelector('#userLogin').click();
//   }, 70021019002, zzm06l6T);

})();