// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import webpackRequire from 'webpack-require'
import webpackConfig from '../webpack.config.js'

// Source CSS.
import '../source/css/reset.css'
import '../source/css/global.css'
import '../source/css/_t7-form.css'

// Style guide CSS.
import './layouts/t7-app.css'

// Get JSON data.
import data from './json/patterns.json'

const components = []

// TODO.
console.log(data)

data.forEach(function (item) {
  const path = item.path

  webpackRequire(webpackConfig, path, function (error, factory) {
    if (error) {
      console.error(error)
    }

    const id = path.replace('/template.js', '').split('/').pop()
    const component = factory()

    components.push({
      component: component,
      id: id
    })
  })
})

components.forEach(function (o) {
  const component = o.component
  const id = o.id

  const element = React.createElement(component)
  const str = '[data-component="' + id + '"]'
  const el = document.querySelector(str)

  // TODO.
  console.log(str)

  ReactDOM.render(element, el)
})
