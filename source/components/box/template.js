// Dependencies.
import React from 'react'

// CSS.
import './t7-box.css'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// Define class.
class Box extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    const state = {
      id: this.props.id || utils.unique(),
      hidden: false
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Close "X" event.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const el = e.target
    const box = el.parentNode
    const id = box.id
    const handleClick = this.props.handleClick

    this.setState({
      hidden: true
    })

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, id)
  }

  // Render method.
  render () {
    // State driven.
    const id = this.state.id
    const hidden = this.state.hidden

    // Props driven.
    const close = this.props.close
    const icon = this.props.icon
    const legend = this.props.legend
    const mode = this.props.mode

    // Used in conditional.
    var ariaHidden
    var styleDisplay

    // Hidden?
    if (hidden) {
      ariaHidden = true
      styleDisplay = {display: 'none'}
    }

    // Events.
    const handleClick = this.handleClick.bind(this)

    // Used in conditional.
    var className = [
      't7-box'
    ]

    // Mode: "info".
    if (mode === 'info') {
      className.push('t7-box--info')

      // Use "info" icon?
      if (icon) {
        className.push('t7-box--info--icon')
      }

    // Mode: "negative".
    } else if (mode === 'negative') {
      className.push('t7-box--negative')

      // Use "negative" icon?
      if (icon) {
        className.push('t7-box--negative--icon')
      }

    // Mode: "positive".
    } else if (mode === 'positive') {
      className.push('t7-box--positive')

      // Use "positive" icon?
      if (icon) {
        className.push('t7-box--positive--icon')
      }

    // Mode: "warn".
    } else if (mode === 'warn') {
      className.push('t7-box--warn')

      // Use "warn" icon?
      if (icon) {
        className.push('t7-box--warn--icon')
      }
    }

    // Build the string.
    className = className.join(' ')

    // Used in conditional.
    var closeX

    // Close "X" specified?
    if (close) {
      closeX = (
        <a
          aria-controls={id}
          aria-label='Close'
          title='Close'

          className='t7-box__close'
          tabIndex='0'
          onClick={handleClick}
          onKeyDown={handleClick}
        >Close</a>
      )
    }

    // Get child element(s).
    var children = this.props.children

    // Ensure at least a `<p>` exists.
    if (typeof children === 'string') {
      children = (
        <p>{children}</p>
      )
    }

    // Used in conditional.
    var box = (
      <div
        aria-hidden={ariaHidden}
        className={className}
        id={id}
        style={styleDisplay}
      >
        {children}
        {closeX}
      </div>
    )

    // Is it a fieldset?
    if (legend) {
      box = (
        <fieldset
          aria-hidden={ariaHidden}
          className={className}
          id={id}
          style={styleDisplay}
        >
          <legend title={legend}>
            {legend}
          </legend>

          {children}
          {closeX}
        </fieldset>
      )
    }

    // Expose the UI.
    return box
  }
}

// Validation.
Box.propTypes = {
  children: React.PropTypes.node,
  close: React.PropTypes.bool,
  icon: React.PropTypes.bool,
  id: React.PropTypes.string,
  legend: React.PropTypes.string,
  mode: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Prop defaults.
Box.defaultProps = {
  children: fake.box(),

  // Events.
  handleClick: function (e, id) {
    utils.log(e, id)
  }
}

// Export.
export default Box
