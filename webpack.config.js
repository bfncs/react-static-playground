const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
  '/hello/',
  '/world/'
];

module.exports = {

  entry: {
    'main': './index.js'
  },

  output: {
    filename: 'index.js',
    path: 'dist',
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
  },

  plugins: [
    // `main` is the bundle name sepcified in the `entry` section above.
    new StaticSiteGeneratorPlugin('main', paths, {
      // Properties here are merged into `locals`
      // passed to the exported render function
      greet: 'Hello'
    })
  ]

};