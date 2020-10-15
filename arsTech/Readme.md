Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.
Puppeteer examples
Deprecation notice: We are moving our efforts to theheadless.dev, a new free & open source knowledge base for Puppeteer AND Playwright. Idea is the same: practical examples and guides, by the community. We — the team at Checkly — are going to pour a lot of love & care into this new project. Feel free to contribute!

Puppeteer Headless Chrome examples for real life use cases. Clone this repo and run them directy with a simple node command.

git clone https://github.com/checkly/puppeteer-examples
cd puppeteer-examples
npm i
node 2.\ search/amazon.js
You can run these scripts in the puppeteer sandbox.

1. basics
alerts
Download file / upload file
emulate devices
get the value of common form elements
get list of links
get text value of an element
get title
hover
keyboard
location_faker
mouse
pdf
request interception
screenshots
screenshots clipped
set cookie
2. search
Amazon search
Booking.com search
Duck Duck Go search
Youtube search
3. login
Github
Google Social Login
Instagram
Microsoft Live Login
4. shopping-carts
Staples shopping cart
Walmart shopping cart
5. parallel-pages
Screenshots parallel pages
Screenshots parallel pages in batches
a. mocha-tests
Alibaba product search
Amazon product search
codesandbox.io
Duck Duck Go search
Etsy shopping cart
Gmail signup
Google search
Staples shopping cart
Walmart shopping cart
b. jest-tests
Alibaba product search
Amazon product search
codesandbox.io
Etsy shopping cart
Google search
Walmart shopping cart
1. basics
The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.

alerts
Create an alert dialog and close it again.

1. basics/alerts.js

Download file / upload file
Find an image by class selector, downloads the image, saves it to disk and read it again. Use this together with a .fileUpload() method.

1. basics/download_upload.js

emulate devices
Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling page.setUserAgent() and page.setViewPort().

1. basics/emulate_devices.js

get the value of common form elements
Gets the value of commonly used HTML form elements using page.$eval()

1. basics/forms.js

get list of links
Scrapes Hacker News for links on the home page and returns the top 10

1. basics/get_list_of_links.js

get text value of an element
Gets the text value of an element by using the page.$eval method

1. basics/get_text_value.js

get title
Get the title of a page and print it to the console.

1. basics/get_title.js

hover
The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element. This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like buttons to be visible

1. basics/hover.js

keyboard
types into a text editor

1. basics/keyboard.js

location_faker
Fake the location for the geolocation API used by the browsers

1. basics/location_faker.js

mouse
Most of the things you can click using straight .click() handlers, but for some situation directly instructing the mouse might be convenient. This example load a page that plays back what mouse actions are used on the page.

1. basics/mouse.js

pdf
Renders a PDF of the Puppeteer API spec. This is a pretty long page and will generate a nice, A4 size multi-page PDF.

1. basics/pdf.js

request interception
Uses Puppeteer request interception, blocks images from loading, then snaps a basic screenshot of the full New York Time homepage and saves it a .png file.

1. basics/request_interception.js

screenshots
Snaps a basic screenshot of the full New York Time homepage and saves it a .png file.

1. basics/screenshots.js

screenshots clipped
Grabs and clips out just the stock tickers on the Yahoo finance page

1. basics/screenshots_clipped.js

set cookie
Sets the "login_email" property in a Paypal cookie so the login screen is pre-filled with an email address.

1. basics/set_cookie.js

2. search
Common search input and select methods on search results.

Amazon search
Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.

2. search/amazon.js

Booking.com search
Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.

2. search/booking.js

Duck Duck Go search
undefined

2. search/duck_duck_go.js

Youtube search
Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video. Waits for 5 seconds for the video to load.

2. search/youtube.js

3. login
Common login scenarios on popular website. Credentials mostly supplied with setting ENV variables.

Github
Logs into Github. Provide your username and password as environment variables when running the script, i.e: GITHUB_USER=myuser GITHUB_PWD=mypassword node github.js

3. login/github.js

Google Social Login
Logs into Checkly using Google social Login. Provide your username and password as environment variables when running the script, i.e: GOOGLE_USER=myuser GOOGLE_PWD=mypassword node google_social.js

3. login/google_social.js

Instagram
Logs into Instagram with credentials. Provide your username and password as environment variables when running the script, i.e: INSTAGRAM_USER=myuser INSTAGRAM_PWD=mypassword node instagram.js

3. login/instagram.js

Microsoft Live Login
Logs into MS Live. Provide your username and password as environment variables when running the script, i.e: linux: MSLIVE_USER=myuser MSLIVE_PWD=mypassword node mslive.js Windows users: SET MSLIVE_USER=myuser SET MSLIVE_PWD=mypassword node mslive.js for more info see here: https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows

3. login/mslive.js

4. shopping-carts
How to handle shopping cart functions like adding and removing items.

Staples shopping cart
Goes to the face paint category and adds to the shopping cart.

4. shopping-carts/staples.js

Walmart shopping cart
Looks for a Nintendo's Mario Odyssey and adds it to the shopping cart.

4. shopping-carts/walmart.js

5. parallel-pages
How to handle Allow parallel processing pages.

Screenshots parallel pages
Allow parallel processing screenshot

5. parallel-pages/screenshots_parallel.js

Screenshots parallel pages in batches
parallel screenshotting of an array of Websites with small example

5. parallel-pages/screenshots_parallel_cologne_colleges.js

A. mocha-tests
Mocha test runner scripts that use Puppeteer and the standard assert library to check specific properties and actions on a page. They can be executed like:

cd "a. mocha-tests"
npx mocha alibaba.js
Alibaba product search
Searches Alibaba.com for a product and checks if the results show up

a. mocha-tests/alibaba.js

Amazon product search
Searches Amazon.com for a product and checks if the results show up

a. mocha-tests/amazon.js

codesandbox.io
Goes to codesandbox.io, creates a new sandbox and selects the Vue.js template

a. mocha-tests/codesandbox.js

Duck Duck Go search
Goes to duckduckgo.com, searches for "chrome puppeteer", asserts the result and snaps a screenshots

a. mocha-tests/duck_duck_go.js

Etsy shopping cart
Goes to etsy.com, select the first knick knack and adds it to the shopping cart.

a. mocha-tests/etsy.js

Gmail signup
Checks the signup flow from the landing page. Clicks the

a. mocha-tests/gmail.js

Google search
Searches Google.com for a term and checks if the first link matches. This check should fail.

a. mocha-tests/google.js

Staples shopping cart
Goes to staples.com and adds a some facepaint to an empty shopping cart. Validates the correct amount.

a. mocha-tests/staples.js

Walmart shopping cart
Goes to walmart.com and adds a Nintendo game to an empty shopping cart. Validates the correct amount.

a. mocha-tests/walmart.js

B. jest-tests
Jest test runner scripts that use Puppeteer to check specific properties and actions on a page. Very similar to the Mocha tests, but using the Jest expect assertions. Install Jest as a global dependency and run them as any other script

npm i -g jest
jest jest-tests/alibaba.js
Alibaba product search
Searches Alibaba.com for a product and checks if the results show up

b. jest-tests/alibaba.spec.js

Amazon product search
Searches Amazon.com for a product and checks if the results show up

b. jest-tests/amazon.spec.js

codesandbox.io
Goes to codesandbox.io, creates a new sandbox and selects the Vue.js template

b. jest-tests/codesandbox.spec.js

Etsy shopping cart
Goes to etsy.com, select the first knick knack and adds it to the shopping cart.

b. jest-tests/etsy.spec.js

Google search
Searches Google.com for a term and checks if the first link matches. This check should fail.

b. jest-tests/google.spec.js

Walmart shopping cart
Goes to walmart.com and adds a Nintendo game to an empty shopping cart. Validates the correct amount.

b. jest-tests/walmart.spec.js
