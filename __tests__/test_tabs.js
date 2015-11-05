/*global
describe
expect
it
jest
*/

// Disable auto mocking.
jest.autoMockOff()

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Tabs = require('../source/components/tabs/template')
const TabPanel = require('../source/components/tabs/template_panel')

// Describe `<Component/>` name.
describe('Tabs', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Tabs selected={0}>
      <TabPanel label='Tab 1'>
        <p>
          Tab content for "Tab 1"
        </p>
      </TabPanel>
      <TabPanel label='Tab 2'>
        <p>
          Tab content for "Tab 2"
        </p>
      </TabPanel>
    </Tabs>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-tabs')

  // Get headers and panels.
  const tabs = parent.querySelectorAll('.t7-tabs__item')
  const panels = parent.querySelectorAll('.t7-tabs__panel')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for tabs.
  // ==============

  it('has child tabs', function () {
    expect(tabs.length).toBe(2)
  })

  // ================
  // Test for panels.
  // ================

  it('has child panels', function () {
    expect(panels.length).toBe(2)
  })

  // ================
  // Test for events.
  // ================

  it('responds to clicks', function () {
    T.Simulate.click(tabs[1])

    // First panel = off.
    expect(tabs[0].getAttribute('aria-selected')).toBe('false')
    expect(panels[0].getAttribute('aria-hidden')).toBe('true')

    // Second panel = on.
    expect(tabs[1].getAttribute('aria-selected')).toBe('true')
    expect(panels[1].getAttribute('aria-hidden')).toBe('false')
  })
})
