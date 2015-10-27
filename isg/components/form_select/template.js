// Dependencies.
import React from 'react'

// CSS.
import '../../css/isg-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Select extends React.Component {
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
    const ariaControls = this.props.ariaControls
    const disabled = this.props.disabled
    const name = this.props.name || id
    const options = this.props.options
    const required = this.props.required
    const width = this.props.width

    // Control selected state.
    const defaultValue = this.props.defaultValue
    const value = this.props.value

    // Events.
    const handleChange = this.handleChange.bind(this)

    var className = [
      'isg-form__select'
    ]

    if (width === 'auto') {
      className.push('isg-form__select--width-auto')
    }

    className = className.join(' ')

    return (
      <select
        aria-controls={ariaControls}
        autoFocus={autofocus}
        className={className}
        disabled={disabled}
        id={id}
        name={name}
        required={required}

        defaultValue={defaultValue}
        value={value}

        onChange={handleChange}
      >
        {
          options.map(function (o, i) {
            const value = o.value
            const name = o.name

            return (
              <option key={i} value={value}>{name}</option>
            )
          })
        }
      </select>
    )
  }
}

// Validation.
Select.propTypes = {
  ariaControls: React.PropTypes.string,
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  options: React.PropTypes.array,
  required: React.PropTypes.bool,
  width: React.PropTypes.string,

  // Control selected state.
  defaultValue: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Select.defaultProps = {
  options: [
    {
      value: '',
      name: 'Select...'
    },
    {
      value: '1',
      name: 'Uno'
    },
    {
      value: '2',
      name: 'Dos'
    },
    {
      value: '3',
      name: 'Tres'
    }
  ],

  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Select
