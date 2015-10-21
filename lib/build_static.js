var fse = require('fs-extra')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var template = require.resolve('../source/shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

webpackRequire(webpackConfig, template, function (error, factory) {
  if (error) {
    console.error(error)
  }

  var component = factory()
  var element = React.createElement(component)
  var html = ReactDOMServer.renderToStaticMarkup(element)

  html = '<!doctype html>' + html

  // Copy static folder for app.
  fse.copy('./source/static', './build/static', {clobber: true})

  // Copy static folder for ISG.
  fse.copy('./isg/static', './build/isg/static', {clobber: true})

  // Create index.html
  fse.outputFileSync('./build/index.html', html)
})
