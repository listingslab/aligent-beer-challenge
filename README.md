![alt text](https://raw.githubusercontent.com/listingslab/aligent-beer-challenge/master/public/assets/img/beer_challenge.png "Aligent Beer Challenge")
# Aligent Beer Challenge vs 1.0.2

Developed by listingslab for the Aligent Consulting as a recruitment challenge, March 2017. This is a React Application (/src) which compiles into a standalone HTML folder called build. This is a complete Webpack build development environment which enables fast in-editor pre-testing of the React app against lint rules for both JavaScript and SCSS and enables multi-device testing while we develop and compile the app.

## The Challenge

BreweryDB has a simple API that returns JSON (documentation here http://www.brewerydb.com/developers/docs ). We would like you to use HTML, CSS and Javascript to read the API and display it in an organized way. In addition, you should add in some sort of sorting mechanic to the front-end. Feel free to use any frameworks you would like to achieve the task.

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
