/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const { extensions } = require('broccoli-asset-rev/lib/default-options');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'project-revision'
    },
    'asset-cache': {
      include: ['assets/**/*', 'images/**/*'],
      version: '4'
    },
    emberCliConcat: {
      js: {
        concat: true
      },
      css: {
        concat: true
      }
    },
    vendorFiles: {
      'jquery.js': null
    },
    prember: {
      urls: ['/', '/404']
    },
    fingerprint: {
      extensions: extensions.concat(['json']),
      replaceExtensions: ['html', 'css', 'js', 'headers']
    }
  });

  app.import('node_modules/tachyons/css/tachyons.css');
  app.import('node_modules/loglevel/dist/loglevel.js', {
    using: [{ transformation: 'amd', as: 'loglevel' }]
  });

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
