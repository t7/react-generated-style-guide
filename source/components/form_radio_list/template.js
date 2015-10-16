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

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      listName: utils.unique()
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Render method.
  render () {
    // State driven.
    const listName = this.state.listName

    // Props driven.
    const inline = this.props.inline
    const options = this.props.options
    const value = this.props.value

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
                <Radio
                  checked={checked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  name={name || listName}
                  required={required}
                  value={value}

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
RadioList.propTypes = {
  inline: React.PropTypes.bool,
  name: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
RadioList.defaultProps = {
  options: [
    {
      checked: true,
      label: 'Radio list - label 01'
    },
    {
      label: 'Radio list - label 02'
    },
    {
      label: 'Radio list - label 03'
    }
  ]
}

// Export.
export default RadioList
