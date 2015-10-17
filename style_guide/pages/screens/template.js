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
    const main = []
    const sidebar = []

    this.props.data.map(function (item, i) {
      const id = item.id
      const href = '#' + id
      const name = item.name

      main.push(
        <section id={id} key={i}>
          <header>
            {name}
          </header>
          <div
            data-component={id}
          />
        </section>
      )

      // Build sidebar markup.
      sidebar.push(
        <li key={i}>
          <a href={href}>
            {name}
          </a>
        </li>
      )
    })

    return (

      <App>

        <Sidebar>
          <ul>{sidebar}</ul>
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
