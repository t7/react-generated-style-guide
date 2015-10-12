var fs = require('fs-extra')
var glob = require('glob')

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../webpack.config.js')

var bottles = glob.sync('./src/style_guide/components/*/template.js')
var index = 0

var render = function () {

  webpackRequire(webpackConfig, require.resolve('.' + bottles[index]), function (err, factory, stats, fs) {
      if (err) console.error(err)
      var component = factory()
      var html = ReactDOMServer.renderToStaticMarkup(React.createElement(component))
      console.log(html)

      if(bottles[index++]) {
        render()
      }

  })

}

render()

