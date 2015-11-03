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
const BoxInfo = require('../source/components/box_negative/template')

// Describe `<Component/>` name.
describe('BoxNegative', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <BoxInfo>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </BoxInfo>
  )

  // Get box.
  const box = T.scryRenderedDOMComponentsWithClass(el, 't7-box--negative')

  // Get content.
  const content = T.scryRenderedDOMComponentsWithTag(el, 'p')

  // Get close link.
  const close = T.scryRenderedDOMComponentsWithClass(el, 't7-box__close')

  // Test for existence.
  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBeTruthy()
  })

  // Test for content.
  it('has content', function () {
    expect(content.length).toBe(2)
  })

  // Test for close link.
  it('has close link', function () {
    expect(close.length).toBe(1)
  })

  // Test for events.
  it('responds to close', function () {
    T.Simulate.click(close[0])

    // Box should be hidden.
    expect(box[0].getAttribute('aria-hidden')).toBe('true')
  })
})