// Dependencies.
var fsExtra = require('fs-extra')
var getData = require('./get_data')
var patternsTemplatePath = require.resolve('./template.js')
var pretty = require('pretty')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var shellPath = require.resolve('../../shell.js')
var webpack = require('webpack')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')

// Defined later.
var PatternsTemplate
var ShellTemplate
var patternsData

function getPatternsTemplate () {
  webpackRequire(webpackConfig, patternsTemplatePath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    PatternsTemplate = factory()
    renderPatterns()
  })
}

function getShellTemplate () {
  webpackRequire(webpackConfig, shellPath, function (error, factory) {
    if (error) {
      console.error(error)
    }

    ShellTemplate = factory()
    getPatternsTemplate()
  })
}

function renderPatterns () {
  var patternsElement = React.createElement(PatternsTemplate, {
    data: patternsData
  })

  var patternsMarkup = ReactDOMServer.renderToStaticMarkup(patternsElement)

  var shellElement = React.createElement(ShellTemplate, {
    root: '/style_guide/',
    style: 'style.css',
    script: 'index.js',
    markup: patternsMarkup
  })

  var html = ReactDOMServer.renderToStaticMarkup(shellElement)
  html = '<!doctype html>' + html
  html = pretty(html)

  fsExtra.outputFileSync('./build/style_guide/patterns/index.html', html)
}

function generateBundle (data) {
  data = JSON.stringify(data)

  fsExtra.outputFileSync('./style_guide/json/patterns.json', data)

  webpackConfig.entry = './style_guide/bundle.js'

  webpackConfig.output = {
    filename: 'index.js',
    path: process.cwd() + '/build/style_guide'
  }

  webpack(webpackConfig, function (error) {
    if (error) {
      console.error(error)
    }
  })
}

module.exports = function () {
  getData(function (data) {
    patternsData = data
    getShellTemplate()
    generateBundle(data)
  })
}
