/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-one-script',

  postprocessTree(type, tree) {
    if (type !== 'all') {
      return tree;
    }

    let { name } = this.project.pkg;

    tree = mergeTrees([
      tree,
      concat(tree, {
        headerFiles: [
          'assets/vendor.js',
          `assets/${name}.js`
        ],
        outputFile: 'assets/app.js'
      }),
      concat(tree, {
        headerFiles: [
          'assets/vendor.css',
          `assets/${name}.css`
        ],
        outputFile: 'assets/app.css'
      })
    ]);

    return new Funnel(tree, {
      exclude: [
        'assets/vendor.*',
        `assets/${name}.*`
      ]
    });
  }
};