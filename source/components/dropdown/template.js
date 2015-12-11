// Dependencies.
import React from 'react'
import utils from '../../utils'

// CSS.
import './t7-dropdown.css'

// UI components.
import DropDownItem from './template_item'

// Define class.
class DropDown extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Get default state.
    this.defaultState()
  }

  // Apply to `state`, because we
  // don't want to mutate `props`.
  defaultState () {
    // Check if expanded flag was passed.
    var expanded = this.props.expanded

    if (!utils.exists(expanded)) {
      expanded = false
    }

    const state = {
      expanded: expanded,
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

  // Click event for items.
  handleClick (e, text) {
    this.setState({
      expanded: false
    })

    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, text)
  }

  // Toggle event.
  toggleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const isActive = !this.state.isActive

    this.setState({
      isActive: isActive
    })

    this.bodyClickListener(isActive)
  }

  // Handle `<body>` click.
  bodyClickHandler (e) {
    const b = document.body
    const f = this.bodyClickHandler.bind(this)
    const el = e.target
    const c = el.className || ''

    // Determine which "level" we're at, if any.
    const isLink = c.match('t7-dropdown__menu__link')
    const isItem = c.match('t7-dropdown__menu__item')
    const isMenu = c.match('t7-dropdown__menu')
    const isTrigger = c.match('t7-dropdown__trigger')
    const isDropdown = c.match('t7-dropdown')

    // Does component exist in page?
    const componentParent = this.refs[this.state.id]

    // Set in conditional.
    var parent

    // Get parent.
    if (isLink) {
      parent = el.parentNode.parentNode.parentNode
    } else if (isItem) {
      parent = el.parentNode.parentNode
    } else if (isMenu) {
      parent = el.parentNode
    } else if (isTrigger) {
      parent = el.parentNode
    } else if (isDropdown) {
      parent = el
    }

    // Ensure it's not the dropdown itself.
    const isValid = parent !== componentParent

    // Un-bind events.
    if (isValid || !componentParent) {
      b.removeEventListener('mousedown', f)
      b.removeEventListener('touchstart', f)
    }

    // Change state.
    if (isValid && componentParent) {
      this.setState({
        isActive: false
      })
    }
  }

  // Wire up `<body>` click.
  bodyClickListener (isActive) {
    const b = document.body
    const f = this.bodyClickHandler.bind(this)

    // Un-bind events.
    b.removeEventListener('mousedown', f)
    b.removeEventListener('touchstart', f)

    // Re-add, if needed.
    if (isActive) {
      b.addEventListener('mousedown', f)
      b.addEventListener('touchstart', f)
    }
  }

  // Render method.
  render () {
    // State driven.
    const isActive = this.state.isActive
    const id = this.state.id
    const idMenu = id + '_menu'
    const idTrigger = id + '_trigger'

    // Props driven.
    const menuAlign = this.props.menuAlign
    const text = this.props.text

    // Toggle event.
    const toggleClick = this.toggleClick.bind(this)

    // Item click event.
    const handleClick = this.handleClick.bind(this)

    // Populated in loop.
    const listItems = []

    this.props.items.map(function (item, i) {
      const href = item.href
      const target = item.target
      const text = item.text

      listItems.push(
        <DropDownItem
          key={i}
          href={href}
          target={target}
          text={text}

          handleClick={handleClick}
        />
      )
    })

    // Expose UI.
    return (
      <div
        id={id}
        ref={id}
        className='t7-dropdown'
        data-menu-align={menuAlign}
      >
        <a
          id={idTrigger}
          aria-controls={idMenu}

          aria-expanded={isActive}
          aria-haspopup='true'
          tabIndex='0'

          className='t7-dropdown__trigger'

          onClick={toggleClick}
          onKeyDown={toggleClick}
        >
          {text}
        </a>
        <ul
          id={idMenu}
          aria-labelledby={idTrigger}

          aria-expanded={isActive}
          aria-hidden={!isActive}
          role='menu'

          className='t7-dropdown__menu'
        >
          {listItems}
        </ul>
      </div>
    )
  }
}

// Validation.
DropDown.propTypes = {
  expanded: React.PropTypes.bool,
  menuAlign: React.PropTypes.string,
  id: React.PropTypes.string,
  items: React.PropTypes.array,
  target: React.PropTypes.string,
  text: React.PropTypes.string,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
DropDown.defaultProps = {
  handleClick: function (e, text) {
    utils.log(e, text)
  },
  menuAlign: 'left',
  text: 'Dropdown Trigger Text',
  items: [
    {
      text: 'Dropdown Item Text #1'
    },
    {
      text: 'Dropdown Item Text #2'
    }
  ]
}

// Export.
export default DropDown
