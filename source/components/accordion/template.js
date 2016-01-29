// Dependencies.
import React from 'react'
import _ from 'lodash'

// CSS.
import './t7-accordion.css'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// UI Components.
import AccordionHeader from './template_header'

// Define class.
class Accordion extends React.Component {
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
      selected: this.props.selected
    }

    // If state exists, reset it.
    if (typeof this.state === 'object') {
      this.setState(state)

    // Otherwise, create state.
    } else {
      this.state = state
    }
  }

  // Click handler.
  handleClick (e, index, label) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    const multi = this.props.multi

    var selected = _.clone(this.state.selected)
    const isSelected = selected[index]

    // If `multi` isn't supported,
    // then we reset state object.
    if (!multi) {
      selected = {}
    }

    // Set current selection.
    selected[index] = !isSelected

    this.setState({
      selected: selected
    })

    // Parent component's click handler.
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index, label, selected[index])
  }

  // Render method.
  render () {
    // Unique ID, for tab group.
    const id = this.state.id

    // Get selected state.
    const selected = this.state.selected

    // Get the children.
    const children = this.props.children

    // Multi-select?
    const multi = this.props.multi

    // Events.
    const handleClick = this.handleClick.bind(this)

    // Populated in `map`.
    const output = []

    // Build the output.
    children.map(function (panel, i) {
      // For accessibility.
      const idPanel = 'accordion_panel_' + i + '_' + id
      const idHeader = 'accordion_header_' + i + '_' + id

      // Active state.
      const isActive = selected[i]

      // Panel label & content.
      const label = panel.props.label
      var content = panel.props.children

      if (typeof content === 'string') {
        content = (
          <p>
            {content}
          </p>
        )
      }

      // Add the `<dt>`.
      output.push(
        <AccordionHeader
          ariaControls={idPanel}
          ariaExpanded={isActive}
          ariaSelected={isActive}
          className='t7-accordion__header'
          id={idHeader}
          index={i}
          key={idHeader}
          label={label}

          handleClick={handleClick}
        />
      )

      // Add the `<dd>`.
      output.push(
        <dd
          aria-hidden={!isActive}
          aria-labelledby={idHeader}
          className='t7-accordion__panel'
          id={idPanel}
          key={idPanel}
          role='tabpanel'
        >
          {content}
        </dd>
      )
    })

    // Expose the UI.
    return (
      <dl
        className='t7-accordion'
        id={id}
        role='tablist'
        aria-multiselectable={multi}
      >
        {output}
      </dl>
    )
  }
}

// Validation.
Accordion.propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.string,
  multi: React.PropTypes.bool,
  selected: React.PropTypes.object,

  // Events.
  handleClick: React.PropTypes.func
}

// Defaults.
Accordion.defaultProps = {
  children: fake.accordion(),
  multi: false,
  selected: {},

  // Events.
  handleClick: function (e, index, label, isActive) {
    utils.log(e, index, label, isActive)
  }
}

// Export.
export default Accordion
