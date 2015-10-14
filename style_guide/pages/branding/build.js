// Dependencies.
var fse = require('fs-extra')

var brandingTemplatePath = require.resolve('./template.js')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var BrandingTemplate
var ShellTemplate

function getBrandingTemplate () {
  webpackRequire(webpackConfig, brandingTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    BrandingTemplate = factory()
    renderBranding()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getBrandingTemplate()
  })
}

function renderBranding () {
  var brandingElement = React.createElement(BrandingTemplate)

  var brandingMarkup = ReactDOMServer.renderToStaticMarkup(brandingElement)

  var shellElement = React.createElement(ShellTemplate, {
    markup: brandingMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html
  html = pretty(html)

  fse.outputFileSync('./build/style_guide/branding/index.html', html)
}

module.exports = function () {
  getShellTemplate()
}
