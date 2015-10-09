// Dependencies.
import React from 'react'
import { Router, Route } from 'react-router'

// Un-scoped CSS.
import './style_guide/css/reset.css'
import './style_guide/css/global.css'

// Page titles.
const titles = {
  'branding': 'Branding',
  'patterns': 'Patterns',
  'requirements': 'Requirements',
  '404': 'Page Not Found'
}

// Page containers.
import Intro from './style_guide/components/app/container_intro'
import Branding from './style_guide/components/app/container_branding'
import Patterns from './style_guide/components/app/container_patterns'
import Requirements from './style_guide/components/app/container_requirements'
import Templates from './style_guide/components/app/container_templates'
import NotFound from './style_guide/components/app/container_404'

// Catch all: Delete this eventually.
import Foobar from './style_guide/components/app/container_foobar'

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

React.render(template, el)
