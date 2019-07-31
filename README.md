# Webpack-Talking

npx webpack -v to check the version

webpack is a bundler for script.

create 'webpack.config.js' to config the webpack tool process.

`npx webpack --config webpack.config.js`  to use 'webpack.config.js' to bundle the project.

entry is the main entry file,
output is where the bundled file put.

```
entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
```


in 'package.json' file click `"bundle": "webpack"`
