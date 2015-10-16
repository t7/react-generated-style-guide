// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Textdiv extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    document.body.setAttribute('spellcheck', false)
  }

  handleBlur (e) {
    utils.convert_content_editable(e)
  }

  handleFocus (e) {
    utils.convert_content_focus(e)
  }

  handleKeyUp (e) {
    utils.convert_content_editable(e)
  }

  handlePaste (e) {
    utils.convert_on_paste(e)
  }

  handleInput (e) {
    const handleInput = this.props.handleInput

    // Exit, if no callback.
    if (typeof handleInput !== 'function') {
      return
    }

    const el = e.target
    const value = utils.convert_to_text(el.innerHTML)

    handleInput(e, value)
  }

  // Render method.
  render () {
    const autofocus = this.props.autofocus
    const disabled = this.props.disabled
    const id = this.props.id || utils.unique()
    const name = this.props.name || id
    const placeholder = this.props.placeholder
    const required = this.props.required

    var value = this.props.value

    if (!value && placeholder) {
      value = placeholder
    }

    value = utils.convert_to_html(value)

    // Events.
    const handleBlur = this.handleBlur.bind(this)
    const handleInput = this.handleInput.bind(this)
    const handleFocus = this.handleFocus.bind(this)
    const handleKeyUp = this.handleKeyUp.bind(this)
    const handlePaste = this.handlePaste.bind(this)

    return (
      <div
        autoFocus={autofocus}
        className={style['t7-form__textarea']}
        contentEditable={!disabled}
        dangerouslySetInnerHTML={{__html: value}}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}

        onBlur={handleBlur}
        onInput={handleInput}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        onPaste={handlePaste}
      />
    )
  }
}

// Validation.
Textdiv.propTypes = {
  autofocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  value: React.PropTypes.string,

  // Events.
  handleInput: React.PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
  placeholder: '',
  value: '',

  // Events.
  handleInput: function (e, value) {
    utils.log(e, value)
  }
}

// Export.
export default Textdiv
