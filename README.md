# Weather Rock SPA 

Demonstrates one way of setting up a React+Redux-based single-page web application that is built with webpack.

## Developer set-up

You'll need:

[node](nodejs.org) and [npm](npmjs.org)

After installing those dependencies, open a terminal and do the following:

1. clone the repo

2. change into the project directory and execute `npm install`

3. run `npm start` to run the application in development mode

## Local testing

You'll need to install additional dependencies to test: RVM, PhantomJS. (After installing RVM, `cd` into the project directory again, and RVM will attempt to switch to Ruby version configured for this project. It will prompt you if that version is not installed; follow the prompts.) See also: https://rvm.io/, http://phantomjs.org/download.html; PhantomJS can also be installed with homebrew on Mac.

(Note: PhantomJS hasn't been updated in several years, but for this small example it serves the purpose of demonstrating one style of testing via browser automation; see also: https://www.google.com/search?q=phantomjs+alternative)

After those dependencies are installed, you can execute the Cucumber test suite:

1. first ensure the required Ruby gems (libraries) are installed; run: `bundle` (required only the very first time or if you make changes to the Ruby dependencies)

2. execute `cucumber` to run the tests

## Deployment

To build deployable package:

1. execute `npm run build`

2. take the files from `./dist` directory

## Attributions

This app uses weather icons made available by [jackd248](https://github.com/jackd248/weather-iconic) under the Creative Commons' [CC BY-SA 3.0 license](http://creativecommons.org/licenses/by-sa/3.0/us/). The fill color has been altered.
