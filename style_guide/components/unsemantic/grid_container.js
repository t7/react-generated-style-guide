// Dependencies.
import React from 'react'

// CSS.
import style from './grid.css'

// Define class.
class GridContainer extends React.Component {
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
GridContainer.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default GridContainer
