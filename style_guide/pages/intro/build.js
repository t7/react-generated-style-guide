// Dependencies.
var fse = require('fs-extra')

var introTemplatePath = require.resolve('./template.js')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var IntroTemplate
var ShellTemplate

function getIntroTemplate () {
  webpackRequire(webpackConfig, introTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    IntroTemplate = factory()
    renderIntro()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getIntroTemplate()
  })
}

function renderIntro () {
  var introElement = React.createElement(IntroTemplate)

  var introMarkup = ReactDOMServer.renderToStaticMarkup(introElement)

  var shellElement = React.createElement(ShellTemplate, {
    root: '',
    title: 'Intro',
    markup: introMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html

  fse.outputFileSync('./build/style_guide/index.html', html)
}

// Kickoff!
getShellTemplate()
