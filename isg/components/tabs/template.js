/*

  //=========================================
  // This approach lets you to treat each tab
  // and its content as one logical grouping.
  //=========================================

  //==============
  // React code...
  //==============

  <Tabs selected={0}>
    <TabPanel label='Foo'>
      <p>
        Tab content for "Foo"
      </p>
    </TabPanel>
    <TabPanel label='Bar'>
      <p>
        Tab content for "Bar"
      </p>
    </TabPanel>
    <TabPanel label='Baz'>
      <p>
        Tab content for "Baz"
      </p>
    </TabPanel>
  </Tabs>

*/

// Dependencies.
import React from 'react'

// CSS.
import './isg-tabs.css'

// Utility methods.
import fake from '../../fake'
import utils from '../../utils'

// UI components.
import Tab from './template_tab'

// Define class.
class Tabs extends React.Component {
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
  handleClick (e, index) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    this.setState({
      selected: index
    })
  }

  // Render method.
  render () {
    // Unique ID, for tab group.
    const id = this.state.id

    // Get the children.
    const children = this.props.children

    // Get selected state.
    const selected = this.state.selected

    // Click event.
    const handleClick = this.handleClick.bind(this)

    return (
      <div className='isg-tabs' id={id}>
        <ul role='tablist' className='isg-tabs__list'>
          {
            children.map(function (panel, i) {
              // Tab label.
              const label = panel.props.label

              // For accessibility.
              const idPanel = 'tabpanel_' + i + '_' + id
              const idTab = 'tab_' + i + '_' + id

              // Active state.
              const isActive = selected === i

              return (
                <Tab
                  ariaControls={idPanel}
                  ariaExpanded={isActive}
                  ariaSelected={isActive}
                  className='isg-tabs__item'
                  id={idTab}
                  index={i}
                  key={idTab}
                  label={label}
                  handleClick={handleClick}
                />
              )
            })
          }
        </ul>
        {
          children.map(function (panel, i) {
            // For accessibility.
            const idPanel = 'tab_panel_' + i + '_' + id
            const idTab = 'tab_' + i + '_' + id
            const isActive = selected === i

            // Panel content.
            var content = panel.props.children

            if (typeof content === 'string') {
              content = (
                <p>
                  {content}
                </p>
              )
            }

            return (
              <div
                aria-hidden={!isActive}
                aria-labelledby={idTab}
                className='isg-tabs__panel'
                id={idPanel}
                key={idPanel}
                role='tabpanel'
              >
                {content}
              </div>
            )
          })
        }
      </div>
    )
  }
}

// Validation.
Tabs.propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.string,
  selected: React.PropTypes.number
}

// Defaults.
Tabs.defaultProps = {
  children: fake.tabs(),
  selected: 0
}

// Export.
export default Tabs
