


// Dependencies.
import React from 'react'

class Select extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <select
        aria-controls={ariaControls}
        className={className}
        disabled={disabled}
        id={id}
        value={value}
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
  id: utils.unique(),
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

}

// Export.
export default Select
