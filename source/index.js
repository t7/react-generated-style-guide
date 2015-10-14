// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

// Un-scoped CSS.
import './css/reset.css'
import './css/global.css'

// Pages.
import Dashboard from './pages/dashboard/template'
import NotFound from './pages/404/template'

// Page titles.
const titles = {
  'dashboard': 'Dashboard',
  '404': 'Page Not Found'
}

// Routes template.
const template = (
<Router>

<Route
path='/'
component={Dashboard}
titles={titles}
/>

<Route
path='*'
component={NotFound}
titles={titles}
/>

</Router>
)

// Insertion point.
const el = document.getElementById('app')

ReactDOM.render(template, el)
