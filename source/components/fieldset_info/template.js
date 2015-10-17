// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class FieldsetInfo extends React.Component {
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
        id={id}
        icon={icon}
        close={close}
        legend={legend}
        mode='info'

        handleClick={handleClick}
      >
        {this.props.children}
      </Box>
    )
  }
}

// Validation.
FieldsetInfo.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  id: React.PropTypes.string,
  icon: React.PropTypes.bool,
  legend: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
FieldsetInfo.defaultProps = {
  legend: 'Legen... wait for it... dary',
  children: '(Form elements would go here.)',
  close: false,
  icon: false
}

// Export.
export default FieldsetInfo
