// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Textarea extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to parent class.
    that = this
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
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
      <textarea
        className={style['t7-form__textarea']}
        disabled={disabled}
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        onChange={this.onChange}
      />
    )
  }
}

// Validation.
Textarea.propTypes = {
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Textarea.defaultProps = {
  disabled: false,
  id: utils.unique(),
  placeholder: '',
  value: '',

  // Events.
  onChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Textarea
