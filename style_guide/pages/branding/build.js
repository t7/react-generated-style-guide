// Dependencies.
var fse = require('fs-extra')

var styleGuideConfig = require('../../../style_guide.config.js')
var brandingTemplatePath = require.resolve('./template.js')
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
  var brandingElement = React.createElement(BrandingTemplate, {branding: styleGuideConfig.branding})

  var brandingMarkup = ReactDOMServer.renderToStaticMarkup(brandingElement)

  var shellElement = React.createElement(ShellTemplate, {
    title: 'Branding',
    markup: brandingMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html

  fse.outputFileSync('./build/style_guide/branding/index.html', html)
}

// Kickoff!
getShellTemplate()
