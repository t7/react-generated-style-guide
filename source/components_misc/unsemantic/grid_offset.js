// Dependencies.
import React from 'react'

// CSS.
import './grid.css'

// Define class.
class GridOffset extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  render () {
    return (
      <div className='grid-offset'>
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
