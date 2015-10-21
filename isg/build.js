// var trash = require('trash')
var webpack = require('webpack')
var webpackConfig = require('../webpack.config.js')

/*
trash(['./build/isg']).then(() => {
  console.log('done')
})
*/

webpackConfig.entry = './isg/bundle.js'

webpackConfig.output = {
  filename: 'index.js',
  path: process.cwd() + '/build/isg'
}

webpack(webpackConfig, function (error) {
  if (error) {
    console.error(error)
  }
})
