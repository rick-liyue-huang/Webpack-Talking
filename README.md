# Webpack-Talking

npx webpack -v to check the version

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
