
const path = require('path');

module.exports = {

  entry: './src/index.js',
  mode: 'production',
  externals: ['lodash'], // 如果引用的包里面又引入了其他的包，我们可以将其放入到这里main，这样打包文件就不包括了外部的包, for all condition import lodash from 'lodash'
  // externals: {
  //   commonjs: 'lodash', // for const lodash = require('lodash'); 
  //   root: '_' // for <script src=""></script>
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    libraryTarget: 'umd', // compatible with 'import' and 'require' dependency methods
    // libraryTarget: 'this', // or 'window' no support umd, but library act as global variable. can get by 'this.library'
    library: 'library', // support like <script src="library"></library>, library act as global variable

  }
}

/**
 *  this is one basic configuration
 * 
 *  */ 