// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class BoxInfo extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <Box {...this.props} mode='info' />
    )
  }
}

// Defaults.
BoxInfo.defaultProps = {
  children: 'Something happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxInfo
