// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

/*
  This adds the `window.fetch` Ajax helper.

  Documentation here:

  https://github.com/github/fetch
*/
import 'whatwg-fetch'

// Un-scoped CSS.
import './css/reset.css'
import './css/global.css'

// Pages.
import Accounts from './pages/accounts/template'
import Profile from './pages/profile/template'
import NotFound from './pages/404/template'

// Routes template.
const template = (
<Router>

<Route
path='/'
component={Accounts}
title='Bank Accounts'
/>

<Route
path='/profile'
component={Profile}
title='User Profile'
/>

<Route
path='*'
component={NotFound}
title='Page Not Found'
/>

</Router>
)

// Insertion point.
const el = document.getElementById('app')

ReactDOM.render(template, el)
