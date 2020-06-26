const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
 
const selector = '.feed'
nightmare
  .goto('https://portal.svkm.ac.in/usermgmt/login')
  .wait(2000)
  .type('.form-control[name="password"]','zzm06l6T')

  .type('.form-control[name="username"]','70021019002')
  .click('#userLogin')
  .click('')
  // .wait('#r1-0 a.result__a')
  // .evaluate(selector => {
  //   // now we're executing inside the browser scope.
  //   return document.querySelector(selector).click()
  // }, selector)
  //.evaluate(() => document.querySelector('.feed ').href)
  //.evaluate(() => document.querySelector(".feed").href('https://portal.svkm.ac.in/MPSTME-NM-M/viewFeedbackDetails'))
  .wait('1000')
  //.goto('https://portal.svkm.ac.in/MPSTME-NM-M/viewFeedbackDetails')
  // .click('.course')
 

  .wait(2000)
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })