// Dependencies.
import React from 'react'

// UI components.
import RadioList from '../form_radio_list/template'

// Define class.
class RadioListInline extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <RadioList {...this.props} />
    )
  }
}

// Prop defaults.
RadioListInline.defaultProps = {
  inline: true,
  options: [
    {
      defaultChecked: true,
      label: 'Radio list inline - label 01'
    },
    {
      label: 'Radio list inline - label 02'
    },
    {
      disabled: true,
      label: '(Radio disabled)'
    }
  ]
}

// Export.
export default RadioListInline
