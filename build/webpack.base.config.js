
/**
 * 
 *  common parts of webpack.config.js in development and production
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    // lodash: './src/lodash.js', // for munual split
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/'
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
          'style-loader', 
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
          'style-loader', 
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
          loader: 'file-loader'
        }
      },
      // deal with es6 syntax, its a bridge
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
        }
      }
    ]
  },
// HtmlWebpackPlugin will produce automatically one html file, and also plugin the bundled js file.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin() // clean the previous dist directory.
    // if the style changes, the page keep static and no refresh
  ],

  optimization: {
    // code splitting tools for webpack
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1, // how many main code files use this vendor file
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `vendors` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          // chunks: 'all'
        }
      }
    }
  }

}

