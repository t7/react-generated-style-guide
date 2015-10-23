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
    const listName = this.props.listName || utils.unique()

    const state = {
      listName: listName
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
          options.map(function (o, i) {
            const autofocus = o.autofocus
            const checked = o.checked
            const defaultChecked = o.defaultChecked
            const disabled = o.disabled
            const id = o.id
            const label = o.label
            const name = o.name || listName
            const required = o.required
            const value = o.value

            return (
              <li key={i}>
                <Radio
                  autofocus={autofocus}
                  checked={checked}
                  defaultChecked={defaultChecked}
                  disabled={disabled}
                  id={id}
                  label={label}
                  name={name}
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
  listName: React.PropTypes.string,
  options: React.PropTypes.array,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
RadioList.defaultProps = {
  options: [
    {
      defaultChecked: true,
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
