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
const RadioList =
require('../source/components/form_radio_list/template')

// Describe `<Component/>` name.
describe('RadioList', function () {
  const options = [
    {
      label: 'example_label_0'
    },
    {
      label: 'example_label_1'
    }
  ]

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <RadioList options={options} />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-list-clean')

  // Get items.
  const items = parent.querySelectorAll('li')

  // Get radios.
  const radio = parent.querySelectorAll('input[type="radio"]')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ====================
  // Test for list items.
  // ====================

  it('has list items', function () {
    expect(items.length).toBe(2)
  })

  // ================
  // Test for radios.
  // ================

  it('has radios', function () {
    expect(radio.length).toBe(2)
  })

  it('has shared name', function () {
    expect(radio[0].name).toBe(radio[1].name)
  })
})
