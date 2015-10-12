var glob = require('glob')

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

var patterns = glob.sync('./src/components/*/template.js')
var index = 0

var render = function () {
  if (
    patterns[index] === './src/components/app_header/template.js' ||
    patterns[index] === './src/components/data_table/template.js' ||
    patterns[index] === './src/components/tabs/template.js'
  ) {
    index++
    render()
  } else {
    webpackRequire(webpackConfig, require.resolve('.' + patterns[index]), function (err, factory, stats, fs) {
      if (err) console.error(err)

      var outputPath = patterns[index]
        .replace('./src/', './build/style_guide/')
        .replace('/template.js', '/index.html')

      var component = factory()
      var html = ReactDOMServer.renderToStaticMarkup(React.createElement(component))

      require('fs-extra').outputFileSync(outputPath, html)
      index++

      if (patterns[index]) {
        console.log('PATTERN!!!', patterns[index])
        render()
      }
    })
  }
}

render()
