// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Textarea extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
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
    const value = this.props.value
    const handleChange = this.handleChange.bind(this)

    return (
      <textarea
        className={style['t7-form__textarea']}
        disabled={disabled}
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        onChange={handleChange}
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
  handleChange: React.PropTypes.func
}

// Prop defaults.
Textarea.defaultProps = {
  disabled: false,
  id: utils.unique(),

  // Events.
  handleChange: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Textarea
