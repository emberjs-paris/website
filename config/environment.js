/* eslint-env node */
'use strict';

function csp(...sources) {
  return `'${sources.join("' '")}'`;
}

module.exports = function (environment) {
  let ENV = {
    'ember-resolver': {
      features: {
        EMBER_RESOLVER_MODULE_UNIFICATION: true
      }
    },
    modulePrefix: 'website',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-module-unification': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'manifest-src': "'self'",
      'script-src': csp(
        "self",
        "sha256-q/zSYNOkfmp5Sx9ZcacTGQN7iG9yCAkzbnmZ4SprZso=",
        "sha256-eTCgFNR35DsTcP7Hae6DsP0kdUl2PKAQxGXGFvOTXjs=",
        "sha256-S15KOuOY2QCOcSlnW07Fuw/2GIByCPLS8WPQ00QAHrk=",
        "sha256-37u63EBe1EibDZ3vZNr6mxLepqlY1CQw+4N89HrzP9s="
      ),
      'style-src': csp(
        "self",
        "sha256-aqNNdDLnnrDOnTNdkJpYlAxKVJtLt9CtFLklmInuUAE="
      )
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
