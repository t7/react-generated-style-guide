// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Input extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to parent class.
    that = this
  }

  onChange (e) {
    const onChange = that.props.onChange

    // Exit, if no callback.
    if (typeof onChange !== 'function') {
      return
    }

    const el = e.target
    const value = utils.trim(el.value)

    onChange(e, value)
  }

  // Render method.
  render () {
    const disabled = this.props.disabled
    const id = this.props.id
    const placeholder = this.props.placeholder
    const type = this.props.type
    const value = this.props.value

    return (
      <input
        className={style['t7-form__input']}
        disabled={disabled}
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={this.onChange}
      />
    )
  }
}

// Validation.
Input.propTypes = {
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  disabled: false,
  id: utils.unique(),
  placeholder: '',
  type: 'text',
  value: '',

  // Events.
  onChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Input
