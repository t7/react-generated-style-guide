// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class FieldsetPositive extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const legend = this.props.legend

    return (
      <Box {...this.props} legend={legend} mode='positive' />
    )
  }
}

// Validation.
FieldsetPositive.propTypes = {
  legend: React.PropTypes.string
}

// Defaults.
FieldsetPositive.defaultProps = {
  legend: 'Legen... wait for it... dary',
  children: '(Form elements would go here.)',
  close: false,
  icon: false
}

// Export.
export default FieldsetPositive
