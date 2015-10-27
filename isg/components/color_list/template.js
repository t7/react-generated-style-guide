// Dependencies.
import React from 'react'

// CSS.
import './isg-color-list.css'

// Define class.
class ColorList extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <ul className='isg-color-list'>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ColorList.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default ColorList
