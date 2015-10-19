// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Input extends React.Component {
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
    const value = utils.trim(el.value)

    handleChange(e, value)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id

    // Props driven.
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const required = this.props.required
    const size = this.props.size
    const type = this.props.type
    const width = this.props.width

    // Control text value.
    const defaultValue = this.props.defaultValue
    const value = this.props.value

    var className = style['t7-form__input']

    if (width === 'auto') {
      className = style['t7-form__input--width-auto']
    }

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <input
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        size={size}
        type={type}

        defaultValue={defaultValue}
        value={value}

        onChange={handleChange}
      />
    )
  }
}

// Validation.
Input.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  width: React.PropTypes.string,

  // Control text value.
  defaultValue: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  type: 'text',

  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Input
