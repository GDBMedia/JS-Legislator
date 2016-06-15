/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('bower_components/Materialize/dist/css/materialize.css');
  app.import('bower_components/Materialize/dist/js/materialize.js');
  [
  'Materialize/dist/font/roboto/Roboto-Bold.eot',
  'Materialize/dist/font/roboto/Roboto-Bold.ttf',
  'Materialize/dist/font/roboto/Roboto-Bold.woff',
  'Materialize/dist/font/roboto/Roboto-Bold.woff2',
  'Materialize/dist/font/roboto/Roboto-Light.eot',
  'Materialize/dist/font/roboto/Roboto-Light.ttf',
  'Materialize/dist/font/roboto/Roboto-Light.woff',
  'Materialize/dist/font/roboto/Roboto-Light.woff2',
  'Materialize/dist/font/roboto/Roboto-Medium.eot',
  'Materialize/dist/font/roboto/Roboto-Medium.ttf',
  'Materialize/dist/font/roboto/Roboto-Medium.woff',
  'Materialize/dist/font/roboto/Roboto-Medium.woff2',
  'Materialize/dist/font/roboto/Roboto-Regular.eot',
  'Materialize/dist/font/roboto/Roboto-Regular.ttf',
  'Materialize/dist/font/roboto/Roboto-Regular.woff',
  'Materialize/dist/font/roboto/Roboto-Regular.woff2',
  'Materialize/dist/font/roboto/Roboto-Thin.eot',
  'Materialize/dist/font/roboto/Roboto-Thin.ttf',
  'Materialize/dist/font/roboto/Roboto-Thin.woff',
  'Materialize/dist/font/roboto/Roboto-Thin.woff2'
  ].forEach(function(i){
    app.import(app.bowerDirectory + '/' + i, {
      destDir: 'fonts/roboto'
    });
  });
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
