// Dependencies.
import React from 'react'

// CSS.
import style from './t7-box.css'

// Utility methods.
import fake from '../../fake'

// Define class.
class Box extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const children = this.props.children
    const icon = this.props.icon
    const mode = this.props.mode

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

    // Assume a `<p>` or other block level
    // children were passed into the box.
    var box = (
      <div className={className}>
        {this.props.children}
      </div>
    )

    // Ensure at least a `<p>` exists.
    if (typeof children === 'string') {
      box = (
        <div className={className}>
          <p>
            {this.props.children}
          </p>
        </div>
      )
    }

    return box
  }
}

// Validation.
Box.propTypes = {
  children: React.PropTypes.node,
  icon: React.PropTypes.bool,
  mode: React.PropTypes.string
}

// Prop defaults.
Box.defaultProps = {
  children: fake.box()
}

// Export.
export default Box
