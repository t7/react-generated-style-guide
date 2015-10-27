// Dependencies.
import React from 'react'

// CSS.
import './grid.css'

// Define class.
class Clear extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const desktop_hide = this.props['desktop-hide']
    const mobile_hide = this.props['mobile-hide']
    const tablet_hide = this.props['tablet-hide']

    // Populated later.
    var className = [
      'clear'
    ]

    /*
      ====================
      DESKTOP CLASS NAMES.
      ====================
    */

    if (desktop_hide) {
      className.push('hide-on-desktop')
    }

    /*
      ===================
      MOBILE CLASS NAMES.
      ===================
    */

    if (mobile_hide) {
      className.push('hide-on-mobile')
    }

    /*
      ===================
      TABLET CLASS NAMES.
      ===================
    */

    if (tablet_hide) {
      className.push('hide-on-tablet')
    }

    /*
      =================
      BUILD THE MARKUP.
      =================
    */

    className = className.join(' ')

    return (
      <span className={className} />
    )
  }
}

// Validation.
Clear.propTypes = {
  'desktop-hide': React.PropTypes.bool,
  'mobile-hide': React.PropTypes.bool,
  'tablet-hide': React.PropTypes.bool
}

// Export.
export default Clear
