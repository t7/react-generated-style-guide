/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Fieldset = require('../source/components/fieldset/template')

// Describe `<Component/>` name.
describe('Fieldset', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Fieldset>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </Fieldset>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box')

  // Get content.
  const content = parent.querySelectorAll('p')

  // Get legend.
  const legend = parent.querySelectorAll('legend')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==================
  // Test for fieldset.
  // ==================

  it('uses a fieldset tag', function () {
    const tag = parent.tagName.toLowerCase()

    expect(tag).toBe('fieldset')
  })

  // ================
  // Test for legend.
  // ================

  it('has a legend', function () {
    expect(legend.length).toBe(1)
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })
})
