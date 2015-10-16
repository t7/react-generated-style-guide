// Dependencies.
import React from 'react'

// UI components.
import Checkbox from '../form_checkbox/template'
import ListClean from '../list_clean/template'
import ListInline from '../list_inline/template'

// Define class.
class CheckboxList extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const inline = this.props.inline
    const options = this.props.options

    // Used in conditional.
    var List = ListClean

    if (inline) {
      List = ListInline
    }

    // Events.
    const handleChange = this.props.handleChange

    return (
      <List>
        {
          options.map(function ({checked, disabled, id, label, name, required, value}, i) {
            return (
              <li key={i}>
                <Checkbox
                  checked={checked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  name={name}
                  required={required}

                  handleChange={handleChange}
                />
              </li>
            )
          })
        }
      </List>
    )
  }
}

// Validation.
CheckboxList.propTypes = {
  inline: React.PropTypes.bool,
  options: React.PropTypes.array,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
CheckboxList.defaultProps = {
  inline: false,
  options: [
    {
      label: 'Checkbox list - label 01'
    },
    {
      label: 'Checkbox list - label 02'
    },
    {
      label: 'Checkbox list - label 03'
    }
  ]
}

// Export.
export default CheckboxList
