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
    const inline = this.props.inline
    const options = this.props.options

    return (
      <RadioList {...this.props} inline={inline} options={options} />
    )
  }
}

// Validation.
RadioListInline.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array
}

// Prop defaults.
RadioListInline.defaultProps = {
  inline: true,
  options: [
    {
      checked: true,
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
