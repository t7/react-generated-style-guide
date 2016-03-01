// Dependencies.
import React from 'react'

// CSS.
import '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Checkbox extends React.Component {
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
      id: this.props.id || utils.unique()
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  handleChange (e) {
    const handleChange = this.props.handleChange

    // Exit, if no callback.
    if (typeof handleChange !== 'function') {
      return
    }

    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)

    handleChange(e, value, checked)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const label = this.props.label
    const name = this.props.name || id
    const required = this.props.required
    const value = this.props.value || label

    // Control checked state.
    const defaultChecked = this.props.defaultChecked
    const checked = this.props.checked

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <label htmlFor={id}>
        <input
          autoFocus={autofocus}
          className='t7-form__checkbox'
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          type='checkbox'
          value={value}

          checked={checked}
          defaultChecked={defaultChecked}

          onChange={handleChange}
        />
        {label}
      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Alphanumeric.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Control checked state.
  defaultChecked: React.PropTypes.bool,
  checked: React.PropTypes.bool,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Checkbox.defaultProps = {
  label: 'Individual checkbox label'
}

// Export.
export default Checkbox
