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

          <p className='sg-description'>
          Templates consist of one or more patterns arranged in a layout. A template can represent a portion of a page or can be a page in and of itself.

          Each template opens in a new browser window.
          </p>

          {
            this.screens.forEach(function ({screen, title}, i) {
              return (
                <div id='{id}}'>
                  <div className='sg-title sg-thumbnail-title'>{title}</div>
                  <div className='sg-thumbnail sg-thumbnail-desktop'>
                    <a href='{url}' target='_blank'><img src='{src}.html-1366x768.png'/></a>
                  </div>
                  <div className='sg-thumbnail sg-thumbnail-tablet'>
                    <a href='{url}' target='_blank'><img src='{src}.html-768x1024.png'/></a>
                  </div>
                  <div className='sg-thumbnail sg-thumbnail-phone'>
                    <a href='{url}' target='_blank'><img src='{src}.html-320x568.png'/></a>
                  </div>
                </div>
              )
            })
          }
        </Main>

      </App>
    )
  }
}

// Validation.
Page.propTypes = {}

// Export.
export default Page
