// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import CheckboxList from './template_list'

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
      <CheckboxList options={options} inline={inline} />
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
      id: utils.unique(),
      label: 'Checkbox list inline - label 01',
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      id: utils.unique(),
      label: 'Checkbox list inline - label 02',
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      disabled: true,
      id: utils.unique(),
      label: '(Checkbox disabled)',
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    }
  ]
}

// Export.
export default CheckboxListInline
