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

    // Events.
    const handleChange = this.props.handleChange

    return (
      <CheckboxList
        inline={inline}
        options={options}

        handleChange={handleChange}
      />
    )
  }
}

// Validation.
CheckboxListInline.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array,

  // Events.
  handleChange: React.PropTypes.func
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
