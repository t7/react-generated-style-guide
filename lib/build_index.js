var fsExtra = require('fs-extra')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var template = require.resolve('../source/components/shell/template.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

webpackRequire(webpackConfig, template, function (error, element) {
  if (error) {
    console.error(error)
  }

  element = element()
  element = React.createElement(element)

  var html = ReactDOMServer.renderToStaticMarkup(element)
  html = '<!doctype html>' + html
  html = pretty(html)

  fsExtra.outputFileSync('./build/index.html', html)
})
