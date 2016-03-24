/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Accordion = require('../source/components/accordion/template')
const AccordionPanel = require('../source/components/accordion/template_panel')

// Describe `<Component/>` name.
describe('Accordion', function () {
  // First panel selected.
  const selected = {
    0: true
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Accordion selected={selected}>
      <AccordionPanel label='Item 1'>
        <p>
          Content for "Item 1"
        </p>
      </AccordionPanel>
      <AccordionPanel label='Item 2'>
        <p>
          Content for "Item 2"
        </p>
      </AccordionPanel>
    </Accordion>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-accordion')

  // Get headers and panels.
  const headers = parent.querySelectorAll('dt')
  const panels = parent.querySelectorAll('dd')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for headers.
  // =================

  it('has child headers', function () {
    expect(headers.length).toBe(2)
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
    T.Simulate.click(headers[1])

    // First panel = off.
    expect(headers[0].getAttribute('aria-selected')).toBe('false')
    expect(panels[0].getAttribute('aria-hidden')).toBe('true')

    // Second panel = on.
    expect(headers[1].getAttribute('aria-selected')).toBe('true')
    expect(panels[1].getAttribute('aria-hidden')).toBe('false')
  })
})
