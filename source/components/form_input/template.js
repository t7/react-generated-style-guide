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
    const disabled = this.props.disabled
    const id = this.props.id || utils.unique()
    const placeholder = this.props.placeholder
    const size = this.props.size
    const type = this.props.type
    const value = this.props.value
    const width = this.props.width

    const handleChange = this.handleChange.bind(this)

    var className = style['t7-form__input']

    if (width === 'auto') {
      className = style['t7-form__input--width-auto']
    }

    return (
      <input
        className={className}
        disabled={disabled}
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        size={size}

        onChange={handleChange}
      />
    )
  }
}

// Validation.
Input.propTypes = {
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
  width: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  disabled: false,
  type: 'text',

  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Input
