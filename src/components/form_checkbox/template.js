// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Checkbox extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    that = this
  }

  onChange (e) {
    const onChange = that.props.onChange

    // Exit, if no callback.
    if (typeof onChange !== 'function') {
      return
    }

    const el = e.target
    const checked = el.checked
    const value = utils.trim(el.value)

    onChange(e, value, checked)
  }

  // Render method.
  render () {
    const checked = this.props.checked
    const id = this.props.id
    const label = this.props.label
    const value = this.props.value

    return (
      <label htmlFor={id}>
        <input
          className={style['t7-form__checkbox']}
          defaultChecked={checked}
          id={id}
          type='checkbox'
          value={value}

          // Events.
          onChange={this.onChange}
        />
        {label}
      </label>
    )
  }
}

// Validation.
Checkbox.propTypes = {
  checked: React.PropTypes.bool,
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  label: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Checkbox.defaultProps = {
  checked: false,
  id: utils.unique(),
  label: 'Individual checkbox label',
  value: 'value',

  // Events.
  onChange: function (e, value, checked) {
    utils.log(e, value, checked)
  }
}

// Export.
export default Checkbox
