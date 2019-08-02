# Webpack-Talking

npx webpack -v to check the version

developers break programs up into discrete chunks of functionality called a module.

webpack is a bundler for script.

create 'webpack.config.js' to config the webpack tool process.

`npx webpack --config webpack.config.js`  to use 'webpack.config.js' to bundle the project.

entry is the main entry file,
output is where the bundled file put.

```
  entry: {
    "main": "./src/index.js"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development"
```

comments: refer to webpack website/Documentation/guides/getting startes
in 'package.json' file click `"bundle": "webpack"`

'mode' can be 'production' or 'development'

```
Hash: 67661d3105e5c6cc452d
Version: webpack 4.38.0
Time: 78ms
Built at: 07/31/2019 11:23:32 AM
    Asset      Size  Chunks             Chunk Names
bundle.js  1.17 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js + 2 modules 478 bytes {0} [built]
    | ./src/index.js 94 bytes [built]
    | ./src/header.js 189 bytes [built]
    | ./src/content.js 195 bytes [built]
```
'loader' tell webpack how to bundle different types of module.
'file-loader' used to deal with .jpg picture files

webpack needs loader to deal with other type files.

只要看到需要处理的文件不是.js，就知道需要使用loader了。

url-loader can deal with different size picture. we can set size limit to get seperated or integrated output file.

style loaders and fonts refer to 'website/Documentation/guides/asset management' and to 'webisie/loaders/css-loader, style-loader, sass-loader, postcss-loader'

plugins: some convenient tools

plugin: will do something when the webpack works on some process, some like lifecycle functions. and they provide some convenient ways.

entry|output:  refer to website/configuration/output, entry
refer to website/documentation/guides/output management important
refer to website/documentation/plugins/htmlwebpackplugin.

sourceMap: show the bug in the source file in src directory. map the source 

```
  devtool: 'cheap-module-eval-source-map', // for 'development' mode 
  // devtool: 'cheap-module-source-map', // for 'production' mode
```

use three methods to get server:

1. auto refresh page by modify source code
`"watch": "webpack --watch"`

2. use webpack-dev-server

3. self server: `"middleware": "node server.js",` in 'package.json'


refer to website/documentation/guides/development and /configuration/devtool devserver

talk about hot module replacement

```
// only hope the module no change by the other module change.
if(module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}
```
'css-loader' includes 'module.hot.accept..' code

refer to website/document/guides/hot module replacement
website/docuemnt/api/hot module replacement
website/documents/concept/hot module replacement


babel for es6

// for some common code use...
import "@babel/polyfill";
and 
`npm install --save @babel/polyfill`
`npm install @babel/preset-env --save-dev`
```
options: {
  presets: [['@babel/preset-env', {
    useBuiltIns: 'usage',
    targets: {
      chrome: '67'
    }
  }]]
}
```

for some library code use runtime
`npm install --save-dev @babel/plugin-transform-runtime`
`npm install --save @babel/runtime`
`npm install --save @babel/runtime-rejs2`

```
plugins: [['@babel/plugin-transform-runtime', {
    "absoluteRuntime": false,
    "corejs": 2,
    "helpers": true,
    "regenerator": true,
    "useESModules": false
  }]]
```

for react code
`npm install --save-dev @babel/pres-react`
and then add code
`["@babel/preset-react"]` in .babelrc file

Tree shaking: only bundle the used function. only support ES module. (import methods) static import mehtod.

seperate webpack.config to base/dev/prod config files by 'webpack-merge'

code splitting:

split one file to different files, the main file and some modules files,

```
optimization: {
  // code splitting tools for webpack
  splitChunks: {
    chunks: 'all'
  }
}
```
will support syn and asyn code splitting

```
splitChunks: {
  chunks: 'all',
  minSize: 30000,
  maxSize: 0,
  minChunks: 1,
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
      chunks: 'all'
    }
  }
}

```

lazy load: for async code

```

async function getComponent() {
  const { default: _ } = await import('lodash');
  const element = document.createElement('div');
  element.innerHTML = _.join(['a', 'b'], '---');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then(ele => {
    document.body.appendChild(ele);
  });
});
```


webpack bundle analyze and preload

'https://github.com/webpack/analyse' 
add `webpack --profile --json > stats.json` in package.json "dev-build",
and run `npm run dev-build` to create 'stats.json', and pull this file to 'https://github.com/webpack/analyse'.

also available in 
'https://alexkuz.github.io/webpack-chart/'
'https://github.com/webpack-contrib/webpack-bundle-analyzer'


`cmd - shift - p` to open code and then input 'coverage', click show coverage, and then we can look code usage, the more the better. and async code has better code usage, so webpack encourage chunk:'async' in 'webpack.base.config.js'

webpack 鼓励 异步代码，这样可以增加代码的使用率，但是这样容易引起页面因为代码加载二产生的加载变慢，这时候我们就需要用到 webpack 提供的preload prefetch 功能。在网络空闲的时候可以加载其他的代码

`/* webpackPrefetch: true */` in the imported code to let code prefetchs when the network is available.

CSS chunks: 

`npm install --save-dev mini-css-extract-plugin`
`npm i --save-dev optimize-css-assets-webpack-plugin`


注意 tree shaking 的兼容问题，tree shaking 需要加载一些style 文件，但是可以通过在package.json里面设置。 also 支持热更新

```
output: {
  filename: '[name].[contenthash]js',
  chunkFilename: '[name].[contenthash].chunk.js', // for some module files
},
```

将output文件分别放到dev and prod, 在 prod mode, we add [contenthash] on the output file. 如果编译内容发生变化，在上线后，如果内容不变用户还是用原来的文件。


shimming:

```
new webpack.ProvidePlugin({ // for shimming in different module
  $: 'jquery' 
})
```

加入 shimming: 将搜寻整个项目代码，如果发现里面有$ 就会自动加载jquery

`npm i --save-dev imports-loader`

```
use: [{
  loader: 'babel-loader'
},{
  loader: 'imports-loader?this=>window' 
}]
```

set this ==== window

Environment variable

```
"dev-build-second": "webpack --config ./build/webpack.base.config.js",
"dev-second": "webpack-dev-server --config ./build/webpack.base.config.js",
"build-second": "webpack --env.production --config ./build/webpack.base.config.js",
```


library bundler

`"main": "./dist/library.js",` in package.json


Progressive Web Application
PWA

PWA configuration

in package.json ` "new-start": "http-server dist",` to start one http-server and run dist directory.

PWA: 如果访问一个网站，如果第一次访问成功了，如果服务器挂掉了，但是有一份缓存仍在本地，因此即使服务器不能用，也可以看到之前的页面。

1. 
`npm i workbox-webpack-plugin --save-dev`

2. 
in webpack.prod.config.js, 

```
plugin: [
  new workboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  }) // servicework
]
```

3. in logic code 'index.js'

```
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service-work registed');
      }).catch(e => {
        console.log('Service-work un-registed')
      })
  })
}
```

refer to 'https://github.com/GoogleChrome/workbox'


TYPESCRIPT 

1. add file 'tsconfig.json'

2. add 
```
{
  test: /\.ts$/,
  use: 'ts-loader', // to deal with .ts
  exclude: /node_modules/
}
```

3. install '@types/lodash' or '@types/jquery' to let some module know types

can search 'http://microsoft.github.io/TypeSearch/' website to search whether it is suppported ts.

