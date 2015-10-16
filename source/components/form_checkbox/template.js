// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Checkbox extends React.Component {
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
    const checked = el.checked
    const value = utils.trim(el.value)

    handleChange(e, value, checked)
  }

  // Render method.
  render () {
    const checked = this.props.checked
    const disabled = this.props.disabled
    const id = this.props.id || utils.unique()
    const label = this.props.label
    const name = this.props.name || id
    const value = this.props.value || label

    const handleChange = this.handleChange.bind(this)

    return (
      <label htmlFor={id}>
        <input
          className={style['t7-form__checkbox']}
          defaultChecked={checked}
          disabled={disabled}
          id={id}
          name={name}
          type='checkbox'
          value={value}

          onChange={handleChange}
        />
        {label}
      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: 'Individual checkbox label',

  // Events.
  handleChange: function (e, value, checked) {
    utils.log(e, value, checked)
  }
}

// Export.
export default Checkbox
