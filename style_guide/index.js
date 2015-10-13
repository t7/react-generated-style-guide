// Dependencies.
var fsExtra = require('fs-extra')
var glob = require('glob')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackConfig = require('../webpack.config.js')
var webpackRequire = require('webpack-require')

// Get the patterns.
var patterns = glob.sync('./source/components/*/template.js')

// Used to iterate patterns array.
var count = patterns.length - 1
var index = 0

// Defined later.
var Shell

function getNextPattern () {
  // Check if another path exists.
  if (index !== count) {
    index++
    render()
  }
}

// Render component.
function render () {
  if (!patterns[index] || patterns[index].match('shell')) {
    getNextPattern()
    return
  }

  webpackRequire(webpackConfig, require.resolve('.' + patterns[index]), function (err, factory) {
    if (err) {
      console.error(err)
    }

    var component = factory()
    var element = React.createElement(component)
    var markup = ReactDOMServer.renderToStaticMarkup(element)

    var path = patterns[index]
    path = path.replace('./source/components/', './build/patterns/')
    path = path.replace('/template.js', '.html')

    var html = React.createElement(Shell, {markup: markup})
    html = ReactDOMServer.renderToStaticMarkup(html)
    html = '<!doctype html>' + html
    html = pretty(html)

    fsExtra.outputFileSync(path, html)

    // Continue.
    getNextPattern()
  })
}

// Define the page shell.
webpackRequire(webpackConfig, require.resolve('../source/components/shell/template.js'), function (err, factory) {
  if (err) {
    console.error(err)
  }

  Shell = factory()
  render()
})
