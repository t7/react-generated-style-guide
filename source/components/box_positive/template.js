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
    const close = this.props.close
    const icon = this.props.icon
    const id = this.props.id
    const hidden = this.props.hidden
    const legend = this.props.legend

    // Events.
    const handleClick = this.props.handleClick

    return (
      <Box
        mode='positive'
        id={id}
        icon={icon}
        close={close}
        hidden={hidden}
        legend={legend}

        handleClick={handleClick}
      >
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxWarn.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  id: React.PropTypes.string,
  icon: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  legend: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
BoxWarn.defaultProps = {
  children: 'Something good happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxWarn
