// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

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
    const id = this.props.id
    const placeholder = this.props.placeholder
    const type = this.props.type
    const value = this.props.value
    const handleChange = this.handleChange.bind(this)

    return (
      <input
        className={style['t7-form__input']}
        disabled={disabled}
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
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
  type: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Input.defaultProps = {
  disabled: false,
  id: utils.unique(),
  placeholder: '',
  type: 'text',
  value: '',

  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Input
