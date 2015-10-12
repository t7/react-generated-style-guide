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

  <Route path='/' component={Intro} titles={titles} />

  <Route path='/branding' component={Branding} titles={titles} />

  <Route path='/patterns' component={Patterns} titles={titles} />

  <Route path='/requirements' component={Requirements} titles={titles} />

  <Route path='/templates' component={Templates} titles={titles} />

  <Route path='/foobar' component={Foobar} titles={titles} />

  <Route path='*' component={NotFound} titles={titles} />

</Router>
)

// Insertion point.
const el = document.getElementById('app')

ReactDOM.render(template, el)
