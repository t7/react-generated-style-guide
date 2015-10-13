/*
  NOTE: This file is a work-in-progress.

  It probably doesn't yet work correctly.
*/

var webpack = require('webpack')

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')
var getJSON = require('./get_json')
var pretty = require('pretty')

var shellPath = require.resolve('../../shell.js')
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
  var pelement = React.createElement(PatternsTemplate, {
    json: patternsJSON
  })
  var patternsMarkup = ReactDOMServer.renderToStaticMarkup(pelement)

  var shellement = React.createElement(Shell, {
    path: '/style_guide/',
    style: 'style.css',
    script: 'index.js',
    markup: patternsMarkup
  })
  var html = ReactDOMServer.renderToStaticMarkup(shellement)
  require('fs-extra').outputFileSync('./build/style_guide/patterns/index.html', pretty('<!doctype html>' + html))

}

function bundle () {

  var entries = patternsJSON.map(function(pattern){
    return pattern.path
  })

  webpackConfig.entry = entries

  webpackConfig.output = {
    filename: 'index.js',
    path: '/Users/tandemseven/GitHub/mundizzle/front-porch-2015/build/style_guide'
  }

  webpack(webpackConfig, function(err, stats) {
    console.log('YOYOYOYOYOYOYOY!!! shelement')
  })

}

module.exports = function () {
  getJSON(function (json) {
    patternsJSON = json
    getShell()
    bundle()
  })

}
