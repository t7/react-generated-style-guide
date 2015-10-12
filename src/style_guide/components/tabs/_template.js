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

  //=================
  // Markup output...
  //=================

  <div class="t7-tabs">
    <ul role="tablist" class="t7-tabs__list">
      <li
        id="tab_0_GUID"
        aria-controls="tabpanel_0_GUID"
        aria-expanded="true"
        aria-selected="true"
        class="t7-tabs__item--selected"
      >
        Foo
      </li>
      <li
        id="tab_1_GUID"
        aria-controls="tabpanel_1_GUID"
        aria-expanded="false"
        aria-selected="false"
        class="t7-tabs__item"
      >
        Bar
      </li>
      <li
        id="tab_2_GUID"
        aria-controls="tabpanel_2_GUID"
        aria-expanded="false"
        aria-selected="false"
        class="t7-tabs__item"
      >
        Baz
      </li>
    </ul>
    <div
      id="tabpanel_0_GUID"
      aria-labledby="tab_0_GUID"
      aria-hidden="false"
      class="t7-tabs__panel--selected"
    >
      <p>
        Tab content for "Foo"
      </p>
    </div>
    <div
      id="tabpanel_1_GUID"
      aria-labledby="tab_1_GUID"
      aria-hidden="true"
      class="t7-tabs__panel"
    >
      <p>
        Tab content for "Bar"
      </p>
    </div>
    <div
      id="tabpanel_2_GUID"
      aria-labledby="tab_2_GUID"
      aria-hidden="true"
      class="t7-tabs__panel"
    >
      <p>
        Tab content for "Baz"
      </p>
    </div>
  </div>

*/

// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-tabs.css'

// Utility methods.
import utils from '../../utils'

// UI Components.
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
    // Get the children.
    const children = this.props.children

    // Unique ID, for tab group.
    const guid = this.props.guid

    // Get selected state.
    const selected = this.state.selected

    // Click event.
    const handleClick = this.handleClick.bind(this)

    // On/Off class names.
    const tabOff = style['t7-tabs__item']
    const tabOn = style['t7-tabs__item--selected']
    const panelOff = style['t7-tabs__panel']
    const panelOn = style['t7-tabs__panel--selected']

    return (
      <div className={style['t7-tabs']}>
        <ul role='tablist' className={style['t7-tabs__list']}>
          {
            children.map(function (panel, i) {
              // For accessibility.
              const idPanel = 'tabpanel_' + i + '_' + guid
              const idTab = 'tab_' + i + '_' + guid
              const isActive = selected === i
              const className = isActive ? tabOn : tabOff

              return (
                <Tab
                  ariaControls={idPanel}
                  ariaExpanded={isActive}
                  ariaSelected={isActive}
                  className={className}
                  id={idTab}
                  index={i}
                  key={idTab}
                  label={panel.props.label || 'Tab ' + (i + 1)}
                  handleClick={handleClick}
                />
              )
            })
          }
        </ul>
        {
          children.map(function (panel, i) {
            // For accessibility.
            const idPanel = 'tabpanel_' + i + '_' + guid
            const idTab = 'tab_' + i + '_' + guid
            const isActive = selected === i
            const className = isActive ? panelOn : panelOff

            var content = panel.props.children

            if (!content) {
              content = (
                <p>
                  Tab {i + 1} content here.
                </p>
              )
            }

            return (
              <div
                aria-hidden={!isActive}
                aria-labeledby={idTab}
                className={className}
                id={idPanel}
                key={i}
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
  guid: React.PropTypes.string,
  selected: React.PropTypes.number
}

// Defaults.
Tabs.defaultProps = {
  guid: utils.unique(),
  selected: 0
}

// Export.
export default Tabs
