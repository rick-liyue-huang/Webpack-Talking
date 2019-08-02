
/**
 * 
 *  common parts of webpack.config.js in development and production
 */

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// support .dll.js file
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack'); // shimming
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');


const plugins = [
  /* for Multiple page application
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html', // for MPA
    chunks: ['runtime', 'vendors', 'main'],
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'test.html', // for MPA
    chunks: ['runtime', 'vendors', 'sub'],
  }),
  */
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new CleanWebpackPlugin(), // clean the previous dist directory.
  // if the style changes, the page keep static and no refresh

  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css',
  }), // for css chunks

  new webpack.ProvidePlugin({ // for shimming in different module, provides soem global variables
    $: 'jquery',
    _: 'lodash',
  }),
];

// one method for pushing dll and manifest plugins
const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
console.log(files); 
files.forEach((file) => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll', file),
    }));
  }
  if (/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll', file),
    }));
  }
});

/* module.exports */ const baseConfig = {

  entry: {
    // lodash: './src/lodash.js', // for munual split
    main: './src/index.js',
    // sub: './src/test.js', // for MPA
  },
  output: {
    // filename: '[name].js',
    // chunkFilename: '[name].chunk.js', // for some module files
    // transfer to dev for cache
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'], // import .js firstly then .jsx if no file extension
    // mainFiles: ['index', 'child'], // when import directory defaultly, will import index then child
    // alias: {
    //   rickhuang: path.resolve(__dirname, '../src/child'), // import Child from 'rickhuang';
    // },
  },

  module: {
    rules: [
      {
        // similar as file-loader, but can set size limit. if larger than limit, will get seperated file, otherwise the output image file will plugin the main file.
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        // deal with .css file with two loader, css-loader -> style-loader, css-loader: analyze the multiple .css files, and get one .css file; style-loader deal with style files(the last .css file).
        test: /\.css$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader'
        ]
      },
      {
        // sass-loader -> css-loader -> style-loader
        test: /\.scss$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // imported .scss file still worked under loader rules
              // modules: true // let style only worked on the assigned file - css modulation
            }
          }, 
          'sass-loader', 
          'postcss-loader'] // need postcss.config.js 
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        },
      },
      // deal with es6 syntax, its a bridge
      {
        test: /\.jsx?$/, // compatible with .js or .jsx
        exclude: /node_modules/, // no deal with node_modules
        // include: path.resolve(__dirname, '../src'),
        use: [
          'babel-loader', 'eslint-loader', // set eslint-loader to check eslint standards
        ],
        // options: {
        //   fix: true, // automatically fixed some simple eslint problems
        // }, ?
        // loader: 'babel-loader',
        // use: [{
        //     loader: 'babel-loader'
        //   },{
        //     loader: 'imports-loader?this=>window' 
        //   }]
      },
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?this=>window'
      // } // ?
    ],
  },
// HtmlWebpackPlugin will produce automatically one html file, and also plugin the bundled js file.
  // plugins: [
    

    // new AddAssetHtmlWebpackPlugin({
    //   filepath: path.resolve(__dirname, '../dll/vendors.dll.js'),
    // }), // add 'vendors.dll.js' on 'index.html' file.
    // new AddAssetHtmlWebpackPlugin({
    //   filepath: path.resolve(__dirname, '../dll/react.dll.js'),
    // }),

    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../dll/vendors.manifest.json'),
    // }), // to match with 'new webpack.DllPlugin' in 'webpack.dll.js', if the third modules is in manifest.json map relationship, it will use vendors.js, otherwise it will import from node_modules
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, '../dll/react.manifest.json'),
    // }),

    
  // ],
  plugins,

  optimization: {
    usedExports: true, // config tree shaking for 'development mode'
    // `"sideEffects": ["third part official moduels", "*.css"],` in package.json to avoid tree-shaking with third part offical modules and some style files.

    // compress css code
    // minimizer: [new OptimizeCSSAssetsPlugin({})],


    // code splitting tools for webpack, not compatible with dll
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 30000,
    //   maxSize: 0,
    //   minChunks: 1, // how many main code files use this vendor file
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: '~',
    //   automaticNameMaxLength: 30,
    //   name: false,
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       // cacheGroupKey here is `vendors` as the key of the cacheGroup
    //       name(module, chunks, cacheGroupKey) {
    //         const moduleFileName = module.identifier().split('/').reduceRight(item => item);
    //         const allChunksNames = chunks.map((item) => item.name).join('~');
    //         return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
    //       },
    //       // chunks: 'all'
    //     },
    //     // styles: {
    //     //   name: 'styles',
    //     //   test: /\.css$/,
    //     //   chunks: 'all',
    //     //   enforce: true,
    //     // },
    //   }
    // },
    // for older edition on cache problem in prod mode.
    runtimeChunk: {
      name: 'runtime',
    },
  },

  performance: false, // no performance warnning

};

module.exports = (env) => {
  if (env && env.production) {
    // production environment
    return merge(baseConfig, prodConfig);
  }
  // development environment
  return merge(baseConfig, devConfig);
};
