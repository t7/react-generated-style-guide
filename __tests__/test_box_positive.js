/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const BoxPositive = require('../source/components/box_positive/template')

// Describe `<Component/>` name.
describe('BoxPositive', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <BoxPositive>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </BoxPositive>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box--positive')

  // Get content.
  const content = parent.querySelectorAll('p')

  // Get close link.
  const close = parent.querySelector('.t7-box__close')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })

  // ===============
  // Test for close.
  // ===============

  it('responds to close', function () {
    T.Simulate.click(close)

    // Box should be hidden.
    expect(parent.getAttribute('aria-hidden')).toBe('true')
  })
})
