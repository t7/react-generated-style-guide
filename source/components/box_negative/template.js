// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class BoxNegative extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <Box {...this.props} mode='negative' />
    )
  }
}

// Defaults.
BoxNegative.defaultProps = {
  children: 'Something bad happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxNegative
