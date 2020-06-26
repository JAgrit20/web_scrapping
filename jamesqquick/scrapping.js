const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://www.jamesqquick.com/blog/").then ( (res) =>{
    // console.log(res.data);
const $ = cheerio.load(res.data);
console.log($('.card').children().first().text());
});
