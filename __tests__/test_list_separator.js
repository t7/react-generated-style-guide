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
const ListSeparator =
require('../source/components/list_separator/template')

// Describe `<Component/>` name.
describe('ListSeparator', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ListSeparator>
      <li>
        list_item_0
      </li>
      <li>
        list_item_1
      </li>
    </ListSeparator>
  )

  // Get the `<ul>`.
  const ul = T.findRenderedDOMComponentWithClass(el, 't7-list-separator')

  // Get the `<li>`.
  const li = ul.querySelectorAll('li')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for list.
  // ==============

  it('has list items', function () {
    expect(li.length).toBe(2)
    expect(li[0].innerHTML).toBe('list_item_0')
    expect(li[1].innerHTML).toBe('list_item_1')
  })
})
