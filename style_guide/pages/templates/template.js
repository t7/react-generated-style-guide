// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// Layout Components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <App>

        <Sidebar>
          <ul>
            <li>
              <Link to='/foobar'>Foobar - Catch All</Link>
            </li>
            <li>
              <Link to='/'>Intro</Link>
            </li>
            <li>
              <Link to='/branding'>Branding</Link>
            </li>
            <li>
              <Link to='/patterns'>Patterns</Link>
            </li>
            <li>
              <Link to='/requirements'>Requirements</Link>
            </li>
            <li>
              <Link to='/templates'>Templates</Link>
            </li>
          </ul>
        </Sidebar>

        <Main/>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {}

// Export.
export default Page
