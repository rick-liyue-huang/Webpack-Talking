
/**
 * 
 *  development environment
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {

  output: {
    // for development mode, donot worry cache.
    filename: '[name].js',
    chunkFilename: '[name].chunk.js', // for some module files
  },
  
  mode: "development",
  devtool: 'cheap-module-eval-source-map', // for 'development' mode 

  // using webpack dev server in development environment
  devServer: {

    // index: '', // specify to enable root proxying
    // watch the dist directory
    contentBase: './dist',
    // start webpack server, and open the browsers automatically.
    open: true,
    port: 8080,
    // cross-domain port, used in React.js
    // A request to /react/api will now proxy the request to http://www.dell-lee.com/react/api.
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com',
        secure: false, // for https
        pathRewrite: {
          'header.json': 'demo.json' // use demo.json to replace header.json
        },
        // bypass: function(req, res, proxyOptions) {
        //   if (req.headers.accept.indexOf('html') !== -1) {
        //     console.log('Skipping proxy for browser request.');
        //     // return '/index.html';
        //     return false;
        //   }
        // },
        // context: ['/auth', '/api'],
        // changeOrigin: true, // cancel the origin setting
        
      }
    },
    historyApiFallback: true, // for spa, match with BrowserRouter in react.js
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

// module.exports = merge(baseConfig, devConfig);

// the second methods by environment variable
module.exports = devConfig;

