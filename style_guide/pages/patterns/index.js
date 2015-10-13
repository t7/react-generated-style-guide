/*
  NOTE: This file is a work-in-progress.

  It probably doesn't yet work correctly.
*/

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')
var getJSON = require('./get_json')
var pretty = require('pretty')

var shellPath = require.resolve('../../../source/components/shell/template.js')
var patternsTemplatePath = require.resolve('./template.js')
var PatternsTemplate
var Shell
var patternsJSON

function getPatternsTemplate () {
  webpackRequire(webpackConfig, patternsTemplatePath, function (err, factory, stats, fs) {
    if (err) console.error(err)
    PatternsTemplate = factory()
    renderPatterns()
  })

}

function getShell () {
  webpackRequire(webpackConfig, shellPath, function (err, factory, stats, fs) {
    if (err) console.error(err)
    Shell = factory()
    getPatternsTemplate()
  })

}

function renderPatterns () {
  var patternsMarkup = ReactDOMServer.renderToStaticMarkup(React.createElement(PatternsTemplate, {json: patternsJSON}))
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Shell, {markup: patternsMarkup}))
  require('fs-extra').outputFileSync('./build/style_guide/patterns/index.html', pretty('<!doctype html>' + html))

}

module.exports = function () {
  getJSON(function (json) {
    patternsJSON = json
    getShell()
  })

}
