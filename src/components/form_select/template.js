// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Shared scope
var that

// Define class.
class Select extends React.Component {
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

    const value = e.target.value

    onChange(e, value)
  }

  // Render method.
  render () {
    const id = this.props.id
    const options = this.props.options

    return (
      <select
        className={style['t7-form__select']}
        id={id}
        onChange={this.onChange}
      >
        {
          options.map(({value, name}) => {
            return <option key={value} value={value}>{name}</option>
          })
        }
      </select>
    )
  }
}

// Validation.
Select.propTypes = {
  onChange: React.PropTypes.func,
  id: React.PropTypes.string,
  options: React.PropTypes.array
}

// Prop defaults.
Select.defaultProps = {
  id: Math.random().toString(),

  callback: function (e, value) {
    console.log(e, value)
  },

  options: [
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
  ]
}

// Export.
export default Select
