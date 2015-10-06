// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

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

    const el = e.target
    const value = utils.trim(el.value)

    onChange(e, value)
  }

  // Render method.
  render () {
    const id = this.props.id
    const options = this.props.options
    const value = this.props.value

    return (
      <select
        className={style['t7-form__select']}
        id={id}
        defaultValue={value}

        // Events.
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
  id: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Select.defaultProps = {
  value: '',
  id: utils.unique(),

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
  onChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Select
