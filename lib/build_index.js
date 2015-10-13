var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

webpackRequire(webpackConfig, require.resolve('../source/components/shell/template.js'), function (err, factory, stats, fs) {
  if (err) console.error(err)
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(factory()))
  require('fs-extra').outputFileSync('./build/index.html', pretty('<!doctype html>' + html))
})
