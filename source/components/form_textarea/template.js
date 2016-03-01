// Dependencies.
import React from 'react'

// CSS.
import '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Textarea extends React.Component {
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

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
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

    // Control text value.
    const defaultValue = this.props.defaultValue
    const value = this.props.value

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <textarea
        autoFocus={autofocus}
        className='t7-form__textarea'
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}

        defaultValue={defaultValue}
        value={value}

        onChange={handleChange}
      />
    )
  }
}

// Validation.
Textarea.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,

  // Default value.
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Forced value.
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),

  // Events.
  handleChange: React.PropTypes.func
}

// Export.
export default Textarea
