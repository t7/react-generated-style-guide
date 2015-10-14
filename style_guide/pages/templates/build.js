// Dependencies.
var fse = require('fs-extra')

var templatesTemplatePath = require.resolve('./template.js')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var TemplatesTemplate
var ShellTemplate

function getTemplatesTemplate () {
  webpackRequire(webpackConfig, templatesTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    TemplatesTemplate = factory()
    renderTemplates()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getTemplatesTemplate()
  })
}

function renderTemplates () {
  var templatesElement = React.createElement(TemplatesTemplate)

  var templatesMarkup = ReactDOMServer.renderToStaticMarkup(templatesElement)

  var shellElement = React.createElement(ShellTemplate, {
    markup: templatesMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html
  html = pretty(html)

  fse.outputFileSync('./build/style_guide/templates/index.html', html)
}

module.exports = function () {
  getShellTemplate()
}
