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
    const icon = this.props.icon

    return (
      <Box mode='info' icon={icon}>
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxInfo.propTypes = {
  children: React.PropTypes.node,
  icon: React.PropTypes.bool
}

// Defaults.
BoxInfo.defaultProps = {
  children: 'Something happened, yo.',
  icon: true
}

// Export.
export default BoxInfo
