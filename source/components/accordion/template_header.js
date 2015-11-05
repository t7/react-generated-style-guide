// Dependencies.
import React from 'react'

// CSS.
import './t7-accordion.css'

// Define class.
class AccordionHeader extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Click handler.
  handleClick (e) {
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
      <dt
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
        <span
          aria-hidden='true'
          className='t7-accordion__header__icon'
        />
        {label}
      </dt>
    )
  }
}

// Validation.
AccordionHeader.propTypes = {
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
AccordionHeader.defaultProps = {
  ariaExpanded: false,
  ariaSelected: false
}

// Export.
export default AccordionHeader
