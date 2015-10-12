// Dependencies.
import React from 'react'
import { Link } from 'react-router'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
class Sidebar extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <nav className={style['t7-app__sidebar']}>
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
      </nav>
    )
  }
}

// Export.
export default Sidebar
