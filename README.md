# Library-app
Do check out the working application hosted on Firebase on [this link](https://emberjs-f250a.firebaseapp.com/)

This is a sample Library application using Ember and Firebase as DB.
It has following pages with mentioned functionalities:
  1.index: you can enter an email id and hit request invitation. the email gets saved into the DB. Mind you you can't get away with random text in email field its validated :p
  2.About: it is just a naviagtion page which is empty.
  3.Contact: It has a form which takes an email Id and a message box which are validated too. 
  4.Libraries: You can Add, Update and Delete lists (Demontrated CRUD operations)
  5.Admin: It is used to display the incoming "Invitation Request" from home page and "Send messages" from contact page


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

