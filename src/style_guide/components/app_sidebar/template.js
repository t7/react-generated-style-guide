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
            <Link to='/foo'>Foo</Link>
          </li>
          <li>
            <Link to='/bar'>Bar</Link>
          </li>
          <li>
            <Link to='/baz'>Baz</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

// Export.
export default Sidebar
