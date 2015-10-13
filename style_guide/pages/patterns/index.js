var React = require('react')
var ReactDOMServer = require('react-dom/server')
var webpackRequire = require('webpack-require')
var webpackConfig = require('../../../webpack.config.js')
var getJSON = require('./get_json')

var shellPath = require.resolve('../../../source/components/shell/template.js')
var patternsTemplatePath = require.resolve('./template.js')
var patternsContainerPath = require.resolve('./container.js')
var PatternsTemplate
var PatternsContainer
var Shell


var patternsJSON = getJSON(function(json){

  start(json)

})

function start(json){

}

function getPatternsTemplate(){

  webpackRequire(webpackConfig, patternsTemplatePath, function (err, factory, stats, fs) {
    if (err) console.error(err)
    PatternsTemplate = factory()
    getPatternsContainer()
  })

}

function getPatternsContainer(){

  webpackRequire(webpackConfig, patternsContainerPath, function (err, factory, stats, fs) {
    if (err) console.error(err)
    PatternsContainer = factory()
    getShell()
  })

}

function getShell(){

  webpackRequire(webpackConfig, shellPath, function (err, factory, stats, fs) {
    if (err) console.error(err)
    Shell = factory()
    renderPatterns()
  })

}

function renderPatterns(){

  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(factory(), {markup: ''}))
  require('fs-extra').outputFileSync('./build/style_guide/patterns/index.html', pretty('<!doctype html>' + html))

}

