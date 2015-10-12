// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-form.css'

// Utility methods.
import utils from '../../utils'

// Define class.
class Button extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Button click.
  handleClick (e) {
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    const buttonData = this.props.buttonData

    handleClick(e, buttonData)
  }

  // Render method.
  render () {
    const ariaControls = this.props.ariaControls
    const disabled = this.props.disabled
    const text = this.props.text
    const size = this.props.size
    const title = this.props.title
    const type = this.props.type
    const handleClick = this.handleClick.bind(this)

    // Default class.
    var className = 't7-form__button'

    if (size === 'small') {
      className = 't7-form__button--small'
    } else if (size === 'big') {
      className = 't7-form__button--big'
    }

    return (
      <button
        aria-controls={ariaControls}
        className={style[className]}
        disabled={disabled}
        title={title}
        type={type}
        onClick={handleClick}
      >{text}</button>
    )
  }
}

// Validation.
Button.propTypes = {
  ariaControls: React.PropTypes.string,
  buttonData: React.PropTypes.node,
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  size: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Prop defaults.
Button.defaultProps = {
  disabled: false,
  text: 'Button Text',
  type: 'button',

  // Events.
  handleClick: function (e, buttonData) {
    utils.log(e, buttonData)
  }
}

// Export.
export default Button
