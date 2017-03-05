![alt text](https://raw.githubusercontent.com/listingslab/aligent-beer-challenge/develop/public/assets/img/aligent-beer-challenge.png "Aligent Beer Challenge")
# Aligent Craft Beer Challenge (1.1.3)

Developed by listingslab for the Aligent Consulting as a recruitment challenge, March 2017. This is a React Application (/src) which compiles into a standalone HTML folder called build. This is a complete Webpack build development environment which enables fast in-editor pre-testing of the React app against lint rules for both JavaScript and SCSS and enables multi-device testing while we develop and compile the app.

## The Challenge

BreweryDB has a simple API that returns JSON (documentation here http://www.brewerydb.com/developers/docs ). We would like you to use HTML, CSS and Javascript to read the API and display it in an organized way. In addition, you should add in some sort of sorting mechanic to the front-end. Feel free to use any frameworks you would like to achieve the task.

---

## PHP Proxy

In order to get round the problem of cross domain loading of JSON from a server without Access-Control-Allow-Origin setup (as in the case of BreweryDB), we implemented a proxy solution called Simple PHP Proxy (http://benalman.com/projects/php-simple-proxy/). It's a single PHP file residing here: http://jqueryresume.com/proxy.php?url=<api url>

Because our JavaScript is running on the same domain, the proxy makes it possible to load JSON from the API without contravening the Cross Origin rules.

---

## Developer Installation

cd to your working directory (ours is ~/node) and do the following. Clone the directory,
which uses a GitFlow methodology. Checkout both master and develop branches but DO NOT
develop into them. Create a feature. Develop that. Once it's done, merge into develop.

git clone https://github.com/listingslab/aligent-beer-challenge.git
npm install
npm start

Basta. That's it. You'll be running a local dev environment using webpack devserver. Your App is viewable on http://localhost:8080.

---

## CSS (scss)
Styling for the various react components and templates has been split out into the same folders as the React code they relate to, but there are a few other files to look out for.

*/src/styles/style.scss*
*/src/styles/vars.scss*
*/public/assets/styles/*

This file can be used to apply styles application wide. It's a useful place for responsiveness related styling.

### Using Atom editor?

Install IDE linting. It's proper helpful

`apm install linter-eslint`

`apm install linter-stylelint`

### NPM Scripts

`npm start`
Runs webpack-dev-server with hot reload

`npm run build`
Creates production ready application into /build folder

`npm run elint`
Run & Summarise the linting process

`npm run slint`
Run the style lint process
