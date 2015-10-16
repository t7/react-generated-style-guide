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
    const close = this.props.close
    const icon = this.props.icon
    const id = this.props.id
    const hidden = this.props.hidden

    // Events.
    const handleClick = this.props.handleClick

    return (
      <Box
        mode='info'
        id={id}
        icon={icon}
        close={close}
        hidden={hidden}

        handleClick={handleClick}
      >
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
BoxInfo.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  id: React.PropTypes.string,
  icon: React.PropTypes.bool,
  hidden: React.PropTypes.bool,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
BoxInfo.defaultProps = {
  children: 'Something happened, yo.',
  close: true,
  icon: true
}

// Export.
export default BoxInfo
