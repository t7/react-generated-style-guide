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
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const id = this.props.id || utils.unique()
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const required = this.props.required
    const size = this.props.size
    const type = this.props.type
    const value = this.props.value
    const width = this.props.width

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
        defaultValue={value}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        size={size}
        type={type}

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
  value: React.PropTypes.string,
  width: React.PropTypes.string,

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
