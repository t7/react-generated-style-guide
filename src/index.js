// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

// Un-scoped CSS.
import './css/reset.css'
import './css/global.css'

// Pages.
import Intro from './pages//intro'
import Branding from './pages/branding'
import Patterns from './pages/patterns'
import Requirements from './pages/requirements'
import Templates from './pages/templates'
import NotFound from './pages/404'

// Catch all: Delete this eventually.
import Foobar from './pages/foobar'

// Page titles.
const titles = {
  'branding': 'Branding',
  'patterns': 'Patterns',
  'requirements': 'Requirements',
  '404': 'Page Not Found'
}

// Routes template.
const template = (
<Router>

<Route titles={titles} path='/' component={Intro} />

<Route titles={titles} path='/branding' component={Branding} />

<Route titles={titles} path='/patterns' component={Patterns} />

<Route titles={titles} path='/requirements' component={Requirements} />

<Route titles={titles} path='/templates' component={Templates} />

<Route titles={titles} path='/foobar' component={Foobar} />

<Route titles={titles} path='*' component={NotFound} />

</Router>
)

// Insertion point.
const el = document.getElementById('app')

ReactDOM.render(template, el)
