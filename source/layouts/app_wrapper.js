// Dependencies.
import React from 'react'

// CSS.
import './t7-app.css'

// Define class.
class Wrapper extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <div className='t7-app__wrapper'>
        {this.props.children}
      </div>
    )
  }
}

// Validation.
Wrapper.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Wrapper
