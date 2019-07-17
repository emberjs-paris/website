/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['GITHUB_DEV_CLIENT_ID'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false
  };
};
