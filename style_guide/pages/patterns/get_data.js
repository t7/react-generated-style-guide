// Dependencies.
var glob = require('glob')
var pretty = require('pretty')
var hljs = require('highlight.js')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackConfig = require('../../../webpack.config.js')
var webpackRequire = require('webpack-require')

// Used later.
var components = glob.sync('./source/components/*/template.js')
var index = 0
var data = []
var _callback

var getData = function (callback) {
  if (callback) {
    _callback = callback
  }

  if (components[index].match('shell')) {
    index++
    if (components[index]) {
      getData()
    } else {
      _callback(data)
    }
  } else {
    webpackRequire(webpackConfig, require.resolve('../../.' + components[index]), function (err, factory) {
      if (err) console.error(err)

      var component = factory()
      var element = React.createElement(component)
      var string = ReactDOMServer.renderToString(element)

      var markup = ReactDOMServer.renderToStaticMarkup(element)
      markup = hljs.highlight('html', pretty(markup)).value

      var path = components[index]
      var id = path.replace('/template.js', '').split('/').pop()
      var name = id.replace(/_/g, ' ')
      var url = path.replace('./source', '').replace('template.js', 'index.html')

      data.push({
        path: path,
        id: id,
        name: name,
        url: url,
        markup: markup,
        string: string
      })

      index++

      if (components[index]) {
        getData()
      } else {
        _callback(data)
      }
    })
  }
}

module.exports = getData
