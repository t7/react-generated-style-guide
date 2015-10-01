// Dependencies.
import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/app/container'

// Un-scoped CSS.
require('./css/reset.css')
require('./css/global.css')

const el = document.getElementById('app')

const template = (
<Router>
  <Route path='/' component={App}>
    // TODO: Change this to a "404".
    <Route path='*' component={App} />
  </Route>
</Router>
)

React.render(template, el)
