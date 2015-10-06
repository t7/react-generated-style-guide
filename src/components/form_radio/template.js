// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Radio extends React.Component {
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
    const name = this.props.name
    const value = this.props.value

    return (
      <label htmlFor={id}>
        <input
          className={style['t7-form__radio']}
          id={id}
          type='radio'
          value={value}
          defaultChecked={checked}
          name={name}

          // Events.
          onChange={this.onChange}
        />
        {label}
      </label>
    )
  }
}

// Validation.
Radio.propTypes = {
  checked: React.PropTypes.bool,
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Radio.defaultProps = {
  checked: false,
  id: utils.unique(),
  label: 'Individual radio label',
  name: utils.unique(),
  value: 'value',

  // Events.
  onChange: function (e, value, checked) {
    utils.log(e, value, checked)
  }
}

// Export.
export default Radio
