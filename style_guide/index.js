var glob = require('glob')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

var patterns = glob.sync('./src/components/*/template.js')
var index = 0

var render = function () {
  if (
    patterns[index] === './src/components/shell/template.js' ||
    patterns[index] === './src/components/app_header/template.js' ||
    patterns[index] === './src/components/data_table/template.js' ||
    patterns[index] === './src/components/tabs/template.js'
  ) {
    index++
    if (patterns[index]) {
      render()
    }
  } else {
    webpackRequire(webpackConfig, require.resolve('.' + patterns[index]), function (err, factory, stats, fs) {
      if (err) console.error(err)

      var outputPath = patterns[index]
        .replace('./src/components/', './build/style_guide/patterns/')
        .replace('/template.js', '/index.html')

      var component = factory()
      var componentHTML = ReactDOMServer.renderToStaticMarkup(React.createElement(component))

      var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Shell, {componentHTML: componentHTML}))
      require('fs-extra').outputFileSync(outputPath, pretty('<!doctype html>' + html))

      index++

      if (patterns[index]) {
        render()
      }
    })
  }
}

var Shell
webpackRequire(webpackConfig, require.resolve('../src/components/shell/template.js'), function (err, factory, stats, fs) {
  if (err) console.error(err)
  Shell = factory()
  render()
})
