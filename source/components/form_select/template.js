// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Select extends React.Component {
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
    const ariaControls = this.props.ariaControls
    const disabled = this.props.disabled
    const id = this.props.id || utils.unique()
    const options = this.props.options
    const value = this.props.value
    const width = this.props.width

    const handleChange = this.handleChange.bind(this)

    var className = style['t7-form__select']

    if (width === 'auto') {
      className = style['t7-form__select--width-auto']
    }

    return (
      <select
        aria-controls={ariaControls}
        className={className}
        disabled={disabled}
        id={id}
        defaultValue={value}
        onChange={handleChange}
      >
        {
          options.map(function ({value, name}) {
            return <option key={value} value={value}>{name}</option>
          })
        }
      </select>
    )
  }
}

// Validation.
Select.propTypes = {
  ariaControls: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string,
  width: React.PropTypes.string,

  // Events.
  handleChange: React.PropTypes.func
}

// Prop defaults.
Select.defaultProps = {
  disabled: false,
  value: '',

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
