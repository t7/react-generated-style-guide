// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class FieldsetWarn extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const legend = this.props.legend

    return (
      <Box {...this.props} legend={legend} mode='warn' />
    )
  }
}

// Validation.
FieldsetWarn.propTypes = {
  legend: React.PropTypes.string
}

// Defaults.
FieldsetWarn.defaultProps = {
  legend: 'Fieldset Legend',
  children: '(Form elements would go here.)',
  close: false,
  icon: false
}

// Export.
export default FieldsetWarn
