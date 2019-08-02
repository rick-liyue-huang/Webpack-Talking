
const path = require('path');
const webpack = require('webpack');

// bundle the modules of 'react, react-dom, lodash'
module.exports = {
  entry: {
    vendors: ['lodash'],
    react: ['react', 'react-dom'],
    jquery: ['jquery']
  },
  mode: 'production',
  output: { // produce one file 'vendors.dll.js'
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '[name]', // create one global variable of 'vender', support like <script src="library"></library>, library act as global variable
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // dll analyse
      path: path.resolve(__dirname, '../dll/[name].manifest.json'),
      //analyze the map relation of third module files, and put the relationship in manifest.json file.
    }),
  ],
};
