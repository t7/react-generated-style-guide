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
    const icon = this.props.icon

    return (
      <Box mode='negative' icon={icon}>
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxNegative.propTypes = {
  children: React.PropTypes.node,
  icon: React.PropTypes.bool
}

// Defaults.
BoxNegative.defaultProps = {
  children: 'Something bad happened, yo.',
  icon: true
}

// Export.
export default BoxNegative
