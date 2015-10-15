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
    const name = this.props.name
    const options = this.props.options

    // Used in conditional.
    var List = ListClean

    if (inline) {
      List = ListInline
    }

    return (
      <List>
        {
          options.map(function ({checked, disabled, id, label, value, onChange}) {
            return (
              <li key={id}>
                <Radio
                  checked={checked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  name={name}
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
  options: React.PropTypes.array
}

// Prop defaults.
RadioList.defaultProps = {
  inline: false,
  name: utils.unique(),
  options: [
    {
      checked: true,
      id: utils.unique(),
      label: 'Radio list - label 01',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      id: utils.unique(),
      label: 'Radio list - label 02',

      // Events.
      onChange: function (e, value, checked) {
        utils.log(e, value, checked)
      }
    },
    {
      id: utils.unique(),
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
