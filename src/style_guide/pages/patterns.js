// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// Utility methods.
import utils from '../utils'

// Layout Components.
import App from '../layouts/app'
import Main from '../layouts/app_main'
import Sidebar from '../layouts/app_sidebar'

// UI Components.
import Markdown from '../components/markdown/container'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Set page title.
    utils.title(this.props)
  }

  // Render method.
  render () {
    return (
      <App path={this.props.location.pathname}>

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

        <Main>
          <Markdown file='doc_patterns' />
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

// Export.
export default Page
