
/**
 * 
 *  development environment
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {
  
  mode: "development",
  devtool: 'cheap-module-eval-source-map', // for 'development' mode 

  // using webpack dev server in development environment
  devServer: {
    // watch the dist directory
    contentBase: './dist',
    // start webpack server, and open the browsers automatically.
    open: true,
    port: 8080,
    // cross-domain port, used in React.js
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true, // open Hot Module Replacement
    // hotOnly: true // auto refresh page 
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // match with hot: true
    // new BundleAnalyzerPlugin() // Webpack Bundle Analyzer - open one analyze page
  ],

  // // config tree shaking for 'development mode'
  // // `"sideEffects": ["third part official moduels", "*.css"],` in package.json to avoid tree-shaking with third part offical modules and some style files.
  // optimization: { // only for 'development' mode
  //   usedExports: true
  // }

}

module.exports = merge(baseConfig, devConfig);

