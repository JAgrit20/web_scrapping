const axios = require('axios');
const cheerio = require('cheerio');
const colors = require('colors');
axios.get("https://arstechnica.com/gadgets/").then(urlResponse =>{
    const $ = cheerio.load(urlResponse.data);
$("li.article").each((i,Element) =>{
const link = $(Element).find("a.overlay").attr("href");

const header = $(Element).find("a").text().split();
console.log(header);

console.log(link.green);
console.log("---------------------------==================================================".red);
}
);
});