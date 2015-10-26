// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/t7-form.css'

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
    /*
      This is here, just in case someone uses a
      `href` link with `disabled`. In practice,
      you would want to use a real `<button>`,
      if there may be a need to disable it.
    */
    if (this.props.disabled) {
      // Cancel click.
      e.stop()
    }

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
    const href = this.props.href
    const mode = this.props.mode
    const size = this.props.size
    const target = this.props.target
    const text = this.props.text
    const title = this.props.title
    const type = this.props.type

    // Events.
    const handleClick = this.handleClick.bind(this)

    // Link & ARIA?
    if (href && ariaControls) {
      throw new Error(
        '<Button/> error: Using `href` and `aria-controls` is not allowed.'
      )
    }

    // Link & type?
    if (href && type !== 'button') {
      throw new Error(
        '<Button/> error: Using `href` and `type` is not allowed.'
      )
    }

    // Target without link?
    if (target && !href) {
      throw new Error(
        '<Button/> error: Using `target` without `href` is not allowed.'
      )
    }

    // Default class.
    var className = [
      style['t7-form__button']
    ]

    /*
      ============
      BUTTON SIZE.
      ============
    */

    // Small button size.
    if (size === 'small') {
      className.push(
        style['t7-form__button--small']
      )

    // Big button size.
    } else if (size === 'big') {
      className.push(
        style['t7-form__button--big']
      )
    }

    /*
      ============
      BUTTON MODE.
      ============
    */

    // Button mode: Default.
    if (mode === 'default') {
      className.push(
        style['t7-form__button--default']
      )

    // Button mode: Primary.
    } else if (mode === 'primary') {
      className.push(
        style['t7-form__button--primary']
      )

    // Button mode: Positive.
    } else if (mode === 'positive') {
      className.push(
        style['t7-form__button--positive']
      )

    // Button mode: Negative.
    } else if (mode === 'negative') {
      className.push(
        style['t7-form__button--negative']
      )

    // Button mode: Warn.
    } else if (mode === 'warn') {
      className.push(
        style['t7-form__button--warn']
      )
    }

    // Build the string.
    className = className.join(' ')

    // Presuppose `<button>`.
    var button = (
      <button
        aria-controls={ariaControls}
        className={className}
        disabled={disabled}
        title={title}
        type={type}

        onClick={handleClick}
      >{text}</button>
    )

    // Is it a link?
    if (href) {
      button = (
        <a
          className={className}
          disabled={disabled}
          href={href}
          target={target}
          title={title}

          onClick={handleClick}
        >{text}</a>
      )
    }

    // Expose the UI.
    return button
  }
}

// Validation.
Button.propTypes = {
  ariaControls: React.PropTypes.string,
  buttonData: React.PropTypes.node,
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  mode: React.PropTypes.string,
  text: React.PropTypes.string,
  size: React.PropTypes.string,
  target: React.PropTypes.string,
  title: React.PropTypes.string,
  type: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Prop defaults.
Button.defaultProps = {
  buttonData: 'Button Data',
  disabled: false,
  mode: 'default',
  text: 'Button Text',
  type: 'button',

  // Events.
  handleClick: function (e, buttonData) {
    utils.log(e, buttonData)
  }
}

// Export.
export default Button
