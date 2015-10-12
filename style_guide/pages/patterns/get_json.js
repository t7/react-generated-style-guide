var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var glob = require('glob')

var webpackConfig = require('../../../webpack.config.js')
var patterns = glob.sync('./src/components/*/template.js')
var index = 0
var patternsJSON = []

var _callback

var getPatternsJSON = function (callback) {
  if (callback) {
    _callback = callback
  }
  if (
    patterns[index] === './src/components/shell/template.js' ||
    patterns[index] === './src/components/app_header/template.js' ||
    patterns[index] === './src/components/data_table/template.js' ||
    patterns[index] === './src/components/tabs/template.js'
  ) {
    index++
    if (patterns[index]) {
      getPatternsJSON()
    } else {
      _callback(patternsJSON)
    }
  } else {
    webpackRequire(webpackConfig, require.resolve('../../.' + patterns[index]), function (err, factory, stats, fs) {
      if (err) console.error(err)

      var path = patterns[index]

      var pattern = factory()
      var patternHTML = ReactDOMServer.renderToStaticMarkup(React.createElement(pattern))

      var patternJSON = {
        id: path.replace(/\//g, '_'),
        name: path.replace('/template.js', '').split('/').pop().replace(/_/g, ' '),
        url: path.replace('./src', '').replace('template.js', 'index.html'),
        patternHTML: pretty(patternHTML)
      }

      patternsJSON.push(patternJSON)

      index++

      if (patterns[index]) {
        getPatternsJSON()
      } else {
        _callback(patternsJSON)
      }
    })
  }
}

module.exports = getPatternsJSON
