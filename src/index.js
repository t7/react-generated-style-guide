// Dependencies.
import React from 'react'
import { Router, Route } from 'react-router'

// Un-scoped CSS.
import './style_guide/css/reset.css'
import './style_guide/css/global.css'

// UI Components.
import App from './style_guide/components/app/container'

// Pages.
// import PageFoo from './style_guide/components/pages/container_foo'

// Page titles.
const titles = {
  'foo': 'FOO',
  'bar': 'BAR',
  'baz': 'BAZ',
  '404': 'Page Not Found'
}

// Routes template.
const template = (
<Router>
  <Route path='/' component={App} titles={titles}>
    // "404" page.
    <Route path='*' />
  </Route>
</Router>
)

// Insertion point.
const el = document.getElementById('app')

React.render(template, el)
