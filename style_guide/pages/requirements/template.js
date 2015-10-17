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

        <Sidebar>
          <ul>
            <li>
              <a href='#requirements'>Requirements</a>
            </li>
            <li>
              <a href='#browser-support'>Browser Support</a>
            </li>
            <li>
              <a href='#desktop'>Desktop</a>
            </li>
            <li>
              <a href='#mobile-tablet'>Mobile / Tablet</a>
            </li>
            <li>
              <a href='#css3-support'>CSS3 Support</a>
            </li>
            <li>
              <a href='#native-html-controls'>Native HTML Controls</a>
            </li>
            <li>
              <a href='#accessibility-seo'>Accessibility & SEO</a>
            </li>
            <li>
              <a href='#build-delivery'>Build & Delivery</a>
            </li>
          </ul>
        </Sidebar>

        <Main>

          <Markdown file='doc_requirements.md' />

        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {}

// Export.
export default Page
