// Dependencies.
var fse = require('fs-extra')

var requirementsTemplatePath = require.resolve('./template.js')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var RequirementsTemplate
var ShellTemplate

function getRequirementsTemplate () {
  webpackRequire(webpackConfig, requirementsTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    RequirementsTemplate = factory()
    renderRequirements()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getRequirementsTemplate()
  })
}

function renderRequirements () {
  var requirementsElement = React.createElement(RequirementsTemplate)

  var requirementsMarkup = ReactDOMServer.renderToStaticMarkup(requirementsElement)

  var shellElement = React.createElement(ShellTemplate, {
    title: 'Requirements',
    markup: requirementsMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html

  fse.outputFileSync('./build/isg/requirements/index.html', html)
}

// Kickoff.
getShellTemplate()
