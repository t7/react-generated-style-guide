// Dependencies.
import React from 'react'

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
              <a href='#'>Uno</a>
            </li>
            <li>
              <a href='#'>Dos</a>
            </li>
            <li>
              <a href='#'>Tres</a>
            </li>
          </ul>
        </Sidebar>

        <Main>
          Branding Content Here.
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  data: React.PropTypes.array
}

// Export.
export default Page
