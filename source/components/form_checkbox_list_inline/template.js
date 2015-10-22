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
    const inline = this.props.inline
    const options = this.props.options

    return (
      <CheckboxList {...this.props} inline={inline} options={options} />
    )
  }
}

// Validation.
CheckboxListInline.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array
}

// Prop defaults.
CheckboxListInline.defaultProps = {
  inline: true,
  options: [
    {
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
