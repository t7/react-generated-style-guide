// Dependencies.
var fse = require('fs-extra')
var glob = require('glob')
var pretty = require('pretty')
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
    webpackRequire(webpackConfig, require.resolve('../../.' + components[index]), function (error, factory) {
      if (error) {
        console.error(error)
      }

      var jsx = fse.readFileSync(require.resolve('../../.' + components[index]))
      jsx = jsx.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;')

      var component = factory()
      var element = React.createElement(component)
      var string = ReactDOMServer.renderToString(element)

      var markup = ReactDOMServer.renderToStaticMarkup(element)
      markup = pretty(markup)
      markup = markup.replace(/\( </g, '(<')
      markup = markup.replace(/> \)/g, '>)')
      markup = markup.replace(/</g, '&lt;')
      markup = markup.replace(/>/g, '&gt;')

      var path = components[index]
      var id = path.replace('/template.js', '').split('/').pop()
      var name = id.replace(/_/g, ' ')
      var url = path.replace('./source', '').replace('template.js', 'index.html')

      data.push({
        id: id,
        jsx: jsx,
        markup: markup,
        name: name,
        path: path,
        string: string,
        url: url
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
