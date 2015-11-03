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
const Box = require('../source/components/box/template')

// Describe `<Component/>` name.
describe('Box', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Box>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </Box>
  )

  // Get content.
  const content = T.scryRenderedDOMComponentsWithTag(el, 'p')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBeTruthy()
  })

  // =================
  // Test for content.
  // =================

  it('has content', function () {
    expect(content.length).toBe(2)
  })
})
