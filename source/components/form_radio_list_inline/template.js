// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

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
    const name = this.props.name
    const options = this.props.options

    return (
      <RadioList inline={inline} name={name} options={options} />
    )
  }
}

// Validation.
RadioListInline.propTypes = {
  inline: React.PropTypes.bool,
  name: React.PropTypes.string,
  options: React.PropTypes.array
}

// Prop defaults.
RadioListInline.defaultProps = {
  inline: true,
  name: utils.unique(),
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
