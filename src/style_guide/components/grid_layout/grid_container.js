// Dependencies.
import React from 'react'

// CSS.
import style from './grid.css'

// Define class.
class Grid extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  render () {
    return (
      <div className={style['grid-container']}>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
Grid.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Grid
