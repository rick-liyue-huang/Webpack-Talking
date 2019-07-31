
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  module: {
    rules: [
      {
        /*
        // deal with different types of file other than .js file.
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][hash].[ext]',
            outputPath: 'images/'
          }
        }
        */
      },
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
        use: ['style-loader', 'css-loader']
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
      }
    ]
  }

}