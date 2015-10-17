// var trash = require('trash')
var webpack = require('webpack')
var webpackConfig = require('../webpack.config.js')

/*
trash(['./build/style_guide']).then(() => {
  console.log('done')
})
*/

webpackConfig.entry = './style_guide/bundle.js'

webpackConfig.output = {
  filename: 'index.js',
  path: process.cwd() + '/build/style_guide'
}

webpack(webpackConfig, function (error) {
  if (error) {
    console.error(error)
  }
})
