/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const FieldsetInfo = require('../source/components/fieldset_info/template')

// Describe `<Component/>` name.
describe('FieldsetInfo', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <FieldsetInfo>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </FieldsetInfo>
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-box--info')

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
