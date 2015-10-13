// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

// Un-scoped CSS.
import './css/reset.css'
import './css/global.css'

// Pages.
import Intro from './pages//intro/template'
import Branding from './pages/branding/template'
import Patterns from './pages/patterns/template'
import Requirements from './pages/requirements/template'
import Templates from './pages/templates/template'
import NotFound from './pages/404/template'

// TODO: Get rid of this eventually.
import Foobar from './pages/foobar/template'

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
