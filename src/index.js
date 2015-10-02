// Dependencies.
import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/app/container'

// Un-scoped CSS.
import './css/reset.css'
import './css/global.css'

// Page titles.
const titles = {
  'foo': 'Foobar',
  'etc': 'Etc.',
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
