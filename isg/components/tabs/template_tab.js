// Dependencies.
import React from 'react'

// Define class.
class Tab extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Click handler.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const handleClick = this.props.handleClick
    const index = this.props.index

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index)
  }

  // Render method.
  render () {
    const ariaControls = this.props.ariaControls
    const ariaExpanded = this.props.ariaExpanded
    const ariaSelected = this.props.ariaSelected

    const className = this.props.className
    const id = this.props.id
    const label = this.props.label

    const handleClick = this.handleClick.bind(this)

    return (
      <li
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-selected={ariaSelected}
        className={className}
        id={id}
        key={id}
        role='tab'
        tabIndex='0'

        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {label}
      </li>
    )
  }
}

// Validation.
Tab.propTypes = {
  ariaControls: React.PropTypes.string,
  ariaExpanded: React.PropTypes.bool,
  ariaSelected: React.PropTypes.bool,

  className: React.PropTypes.string,
  id: React.PropTypes.string,
  index: React.PropTypes.number,
  label: React.PropTypes.string,

  handleClick: React.PropTypes.func
}

// Defaults.
Tab.defaultProps = {
  ariaExpanded: false,
  ariaSelected: false
}

// Export.
export default Tab
