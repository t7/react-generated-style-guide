// Dependencies.
import React from 'react'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// Misc components.
import Markdown from '../../components_misc/markdown/text'

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

        <Sidebar />

        <Main>
          <Markdown file='doc_intro.md' />
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {}

// Export.
export default Page
