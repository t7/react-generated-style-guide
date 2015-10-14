// Dependencies.
import React from 'react'

// Layout Components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// CSS.
import style from '../../layouts/t7-misc.css'

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
      const markup = item.markup
      const name = item.name

      main.push(
        <div id={id} key={i} className={style['t7-example__wrapper']}>
          <h3>
            {name}
          </h3>
          <div className={style['t7-example']} data-component={id}></div>
          <pre><code>{markup}</code></pre>
        </div>
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
          <ul>
            {sidebar}
          </ul>
        </Sidebar>

        <Main>
          <h1>
            Patterns
          </h1>

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
