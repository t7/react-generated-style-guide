// Dependencies.
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

// Pages.
import Accounts from './pages/accounts/template'
import Profile from './pages/profile/template'
import NotFound from './pages/404/template'

// Match routes to pages.
const routes = (
<Router history={hashHistory}>

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

// Expose routes.
export default routes
