// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Shared scope
var that

// Define class.
class Textdiv extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    that = this

    document.body.setAttribute('spellcheck', false)
  }

  onBlur (e) {
    utils.convert_content_editable(e)
  }

  onFocus (e) {
    utils.convert_content_focus(e)
  }

  onKeyUp (e) {
    utils.convert_content_editable(e)
  }

  onPaste (e) {
    utils.convert_on_paste(e)
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

    var placeholder = this.props.placeholder
    placeholder = placeholder.replace(/>/g, '&gt;')
    placeholder = placeholder.replace(/</g, '&lt;')

    var value = this.props.value

    if (!value && placeholder) {
      value = placeholder
    }

    value = utils.convert_to_html(value)

    return (
      <div
        className={style['t7-form__textarea']}
        contentEditable={!disabled}
        dangerouslySetInnerHTML={{__html: value}}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onKeyUp={this.onKeyUp}
        onPaste={this.onPaste}
      ></div>
    )
  }
}

// Validation.
Textdiv.propTypes = {
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,

  // Events.
  onChange: React.PropTypes.func
}

// Prop defaults.
Textdiv.defaultProps = {
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
export default Textdiv
