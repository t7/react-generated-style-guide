// Dependencies.
import React from 'react'

// Layout components.
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
        </Sidebar>

        <Main>
          <p>
            This Interactive Style Guide site is intended to serve as a reference for those who will be building, maintaining and/or extending the Acme Corp website. This guide contains front-end templates (HTML,CSS,JS) along with visual design assets necessary for developing screens.
          </p>
          <p>
            All data portrayed in the screen comps or examples included is for placement only. This guide does not cover detailed branding guidelines, business requirements, or user support.
          </p>
          <p>
            Any data or functionality depicted is for example purposes only. For actual data and functionality, please refer to the wireframes or the UI Specifications document.
          </p>
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {}

// Export.
export default Page
