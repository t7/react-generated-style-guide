// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'

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
        {this.props.children}
      </nav>
    )
  }
}

// Validation.
Sidebar.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Sidebar
