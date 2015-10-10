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
    <ul class="t7-tabs__list">
      <li class="t7-tabs__item--selected">
        <a>Foo</a>
      </li>
      <li class="t7-tabs__item">
        <a>Bar</a>
      </li>
      <li class="t7-tabs__item">
        <a>Baz</a>
      </li>
    </ul>
    <div class="t7-tabs__panel--selected">
      <p>
        Tab content for "Foo"
      </p>
    </div>
    <div class="t7-tabs__panel">
      <p>
        Tab content for "Bar"
      </p>
    </div>
    <div class="t7-tabs__panel">
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
    this.setState({
      selected: index
    })
  }

  // Render method.
  render () {
    // Get the children.
    const children = this.props.children

    // Get selected state.
    const selected = this.state.selected

    // Click event.
    const handleClick = this.handleClick.bind(this)

    const panelOff = style['t7-tabs__panel']
    const panelOn = style['t7-tabs__panel--selected']

    return (
      <div className={style['t7-tabs']}>
        <ul className={style['t7-tabs__list']}>
          {
            children.map(function (panel, i) {
              return (
                <Tab
                  key={i}
                  index={i}
                  label={panel.props.label || 'Tab ' + (i + 1)}
                  handleClick={handleClick}
                  selected={selected}
                />
              )
            })
          }
        </ul>
        {
          children.map(function (panel, i) {
            return (
              <div key={i} className={selected === i ? panelOn : panelOff}>
                {panel.props.children}
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
  selected: React.PropTypes.number
}

// Defaults.
Tabs.defaultProps = {
  selected: 0
}

// Export.
export default Tabs
