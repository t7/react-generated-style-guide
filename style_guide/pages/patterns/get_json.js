/*
  NOTE: This file is a work-in-progress.

  It probably doesn't yet work correctly.
*/

var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var glob = require('glob')

var webpackConfig = require('../../../webpack.config.js')
var patterns = glob.sync('./source/components/*/template.js')
var index = 0
var patternsJSON = []

var _callback

var getPatternsJSON = function (callback) {
  if (callback) {
    _callback = callback
  }
  if (
    patterns[index] === './source/components/shell/template.js'
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
      var markup = ReactDOMServer.renderToStaticMarkup(React.createElement(pattern))
      var string = ReactDOMServer.renderToString(React.createElement(pattern))

      var patternJSON = {
        path: path,
        id: path.replace(/\//g, '_').replace('._source_components_', '').replace('.js', ''),
        name: path.replace('/template.js', '').split('/').pop().replace(/_/g, ' '),
        url: path.replace('./src', '').replace('template.js', 'index.html'),
        markup: pretty(markup),
        string: string
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
