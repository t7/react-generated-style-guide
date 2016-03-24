/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const FieldsetNegative = require('../source/components/fieldset_negative/template')

// Describe `<Component/>` name.
describe('FieldsetNegative', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <FieldsetNegative>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </FieldsetNegative>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box--negative')

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
