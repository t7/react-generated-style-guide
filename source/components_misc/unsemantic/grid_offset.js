// Dependencies.
import React from 'react'

// CSS.
import style from './grid.css'

// Define class.
class GridOffset extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  render () {
    return (
      <div className={style['grid-offset']}>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
GridOffset.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default GridOffset
