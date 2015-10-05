// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
class Sidebar extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
  }

  // Render method.
  render () {
    return (
      <aside className={style['t7-app__sidebar']}>
        {this.props.sidebar}
      </aside>
    )
  }
}

// Validation.
Sidebar.propTypes = {
  sidebar: React.PropTypes.string
}

// Export.
export default Sidebar
