// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// UI components.
import Radio from '../form_radio/template'
import ListClean from '../list_clean/template'
import ListInline from '../list_inline/template'

// Define class.
class RadioList extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const inline = this.props.inline
    const listName = utils.unique()
    const options = this.props.options
    const value = this.props.value

    // Used in conditional.
    var List = ListClean

    if (inline) {
      List = ListInline
    }

    return (
      <List>
        {
          options.map(function ({checked, disabled, id, label, name, value, onChange}, i) {
            return (
              <li key={i}>
                <Radio
                  checked={checked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  name={name || listName}
                  value={value}

                  onChange={onChange}
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
RadioList.propTypes = {
  inline: React.PropTypes.bool,
  name: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string
}

// Prop defaults.
RadioList.defaultProps = {
  inline: false,
  options: [
    {
      checked: true,
      label: 'Radio list - label 01',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      label: 'Radio list - label 02',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      label: 'Radio list - label 03',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    }
  ]
}

// Export.
export default RadioList
