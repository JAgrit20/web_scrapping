const axios = require('axios'); //Promise based HTTP client for the browser and node.js
const cheerio = require('cheerio'); //Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
const colors = require('colors'); //get colors in your node.js console
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
