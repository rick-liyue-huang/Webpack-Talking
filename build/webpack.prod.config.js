
/**
 *  production environment
 * 
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const prodConfig = {
  
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist'),
  //   // publicPath: 'http://cdn.com.cn' // static source put in some public place.
  //   // publicPath: '/'
  // },

  output: {
    filename: '[name].[contenthash]js',
    chunkFilename: '[name].[contenthash].chunk.js', // for some module files
  },

  mode: "production",
  devtool: 'cheap-module-source-map', // for 'production' mode

}

// module.exports = merge(baseConfig, prodConfig);

// the second method by environment varaible
module.exports = prodConfig;