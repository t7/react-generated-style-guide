// Dependencies.
import React from 'react'

// CSS.
import style from './t7-box.css'

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
      hidden: this.props.hidden,

      /*
        Store ID in state, because if we call
        `utils.unique()` in render, the ID could
        change, when we set state.hidden = true.

        This is wonky, but it works.
      */
      id: this.props.id || utils.unique()
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
    const close = this.props.close
    const icon = this.props.icon
    const legend = this.props.legend
    const mode = this.props.mode

    // State driven.
    const id = this.state.id
    const hidden = this.state.hidden

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
    var className = style['t7-box']

    // Mode: "info".
    if (mode === 'info') {
      // Use "info" icon?
      className = icon
        ? style['t7-box--info--icon']
        : style['t7-box--info']

    // Mode: "negative".
    } else if (mode === 'negative') {
      // Use "negative" icon?
      className = icon
        ? style['t7-box--negative--icon']
        : style['t7-box--negative']

    // Mode: "positive".
    } else if (mode === 'positive') {
      // Use "positive" icon?
      className = icon
        ? style['t7-box--positive--icon']
        : style['t7-box--positive']

    // Mode: "warn".
    } else if (mode === 'warn') {
      // Use "warn" icon?
      className = icon
        ? style['t7-box--warn--icon']
        : style['t7-box--warn']
    }

    // Used in conditional.
    var closeX

    // Close "X" specified?
    if (close) {
      closeX = (
        <a
          aria-controls={id}
          aria-label='Close'
          title='Close'

          className={style['t7-box__close']}
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
  hidden: React.PropTypes.bool,

  // Events.
  handleClick: React.PropTypes.func
}

// Prop defaults.
Box.defaultProps = {
  children: fake.box(),
  hidden: false,

  // Events.
  handleClick: function (e, id) {
    utils.log(e, id)
  }
}

// Export.
export default Box
