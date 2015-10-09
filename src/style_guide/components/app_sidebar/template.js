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

  // Render method.
  render () {
    return (
      <aside className={style['t7-app__sidebar']}>
        Sidebar Here
      </aside>
    )
  }
}

// Export.
export default Sidebar
