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
      const url = item.url
      const image_path = '/style_guide/screens/shots/'
      const img_small = image_path + id + '_small.png'
      const img_medium = image_path + id + '_medium.png'
      const img_large = image_path + id + '_large.png'

      main.push(
        <section id={id} key={i}>
          <a href={url}>{name}</a>
          <img src={img_small}/>
          <img src={img_medium}/>
          <img src={img_large}/>
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
