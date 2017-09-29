/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const SW_VERSION = '4'; // Changing the version will bust the cache

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-service-worker': {
      registrationStrategy: 'inline'
    },
    'asset-cache': {
      include: ['assets/**/*', 'images/**/*'],
      version: SW_VERSION
    },
    'esw-cache-fallback': {
      patterns: ['/'],
      version: SW_VERSION
    },
    vendorFiles: {
      'jquery.js': null
    },
    'ember-app-shell': {
      visitPaths: {
        '/app-shell': 'app-shell.html',
        '/404': '404.html'
      }
    },
    addons: {
      blacklist: ['ember-cli-fastboot']
    },
    fingerprint: {
      replaceExtensions: ['html', 'css', 'js', 'headers']
    }
  });

  app.import('node_modules/tachyons/css/tachyons.css');

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

  let tree = app.toTree();

  let headersFile = new Funnel(tree, {
    files: ['netlify.headers'],
    getDestinationPath: () => '_headers'
  });

  tree = new Funnel(tree, {
    exclude: ['netlify.headers']
  });

  return mergeTrees([tree, headersFile]);
};
