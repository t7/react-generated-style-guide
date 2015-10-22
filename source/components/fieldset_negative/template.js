// Dependencies.
import React from 'react'

// UI components.
import Box from '../box/template'

// Define class.
class FieldsetNegative extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const legend = this.props.legend

    return (
      <Box {...this.props} legend={legend} mode='negative' />
    )
  }
}

// Validation.
FieldsetNegative.propTypes = {
  legend: React.PropTypes.string
}

// Defaults.
FieldsetNegative.defaultProps = {
  legend: 'Fieldset Legend',
  children: '(Form elements would go here.)',
  close: false,
  icon: false
}

// Export.
export default FieldsetNegative
