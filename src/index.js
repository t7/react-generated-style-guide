// Dependencies.
import React from 'react'
import { Router, Route } from 'react-router'
import App from './components/app/container'

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
