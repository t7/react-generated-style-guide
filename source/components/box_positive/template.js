// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class BoxWarn extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <Box {...this.props} mode='positive' />
    )
  }
}

// Defaults.
BoxWarn.defaultProps = {
  children: 'Something good happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxWarn
