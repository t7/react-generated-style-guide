var fsExtra = require('fs-extra')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var template = require.resolve('../source/components/shell/template.js')
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

  fsExtra.outputFileSync('./build/index.html', html)
})
