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
    const main = []
    const sidebar = []

    this.props.data.map(function (item, i) {
      main.push(
        <div id={item.id} key={'main_' + i}>
          <h3>
            {item.name}
          </h3>
          <div data-component></div>
          <pre><code>{item.markup}</code></pre>
        </div>
      )

      // Build sidebar markup.
      sidebar.push(
        <li key={'sidebar_' + i}>
          <a href={'#' + item.id}>
            {item.name}
          </a>
        </li>
      )
    })

    return (
      <App>

        <Sidebar>
          <ul>
            {sidebar}
          </ul>
        </Sidebar>

        <Main>
          {main}
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
