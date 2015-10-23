// Dependencies.
import React from 'react'

// UI components.
import CheckboxList from '../form_checkbox_list/template'

// Define class.
class CheckboxListInline extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <CheckboxList {...this.props} />
    )
  }
}

// Prop defaults.
CheckboxListInline.defaultProps = {
  inline: true,
  options: [
    {
      defaultChecked: true,
      label: 'Checkbox list inline - label 01'
    },
    {
      label: 'Checkbox list inline - label 02'
    },
    {
      disabled: true,
      label: '(Checkbox disabled)'
    }
  ]
}

// Export.
export default CheckboxListInline
