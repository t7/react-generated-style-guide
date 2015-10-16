// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

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
    const value = this.props.value
    const required = this.props.required

    // Events.
    const handleChange = this.handleChange.bind(this)

    return (
      <textarea
        autoFocus={autofocus}
        defaultValue={value}
        className={style['t7-form__textarea']}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}

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
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Textarea.defaultProps = {
  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Textarea
