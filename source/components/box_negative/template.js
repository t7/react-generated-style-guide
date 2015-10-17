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
    const close = this.props.close
    const icon = this.props.icon
    const id = this.props.id
    const legend = this.props.legend

    // Events.
    const handleClick = this.props.handleClick

    return (
      <Box
        mode='negative'
        id={id}
        icon={icon}
        close={close}
        legend={legend}

        handleClick={handleClick}
      >
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxNegative.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  id: React.PropTypes.string,
  icon: React.PropTypes.bool,
  legend: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
BoxNegative.defaultProps = {
  children: 'Something bad happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxNegative
