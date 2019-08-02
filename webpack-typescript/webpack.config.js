
const path = require('path');

module.exports = {
  
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // to deal with .ts
        exclude: /node_modules/
      }
    ]
  }
}