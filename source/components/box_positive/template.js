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
    const icon = this.props.icon

    return (
      <Box mode='positive' icon={icon}>
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxWarn.propTypes = {
  children: React.PropTypes.node,
  icon: React.PropTypes.bool
}

// Defaults.
BoxWarn.defaultProps = {
  children: 'Something good happened, yo.',
  icon: true
}

// Export.
export default BoxWarn
