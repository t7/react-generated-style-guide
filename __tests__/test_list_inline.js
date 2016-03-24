/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const ListInline =
require('../source/components/list_inline/template')

// Describe `<Component/>` name.
describe('ListInline', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ListInline>
      <li>
        list_item_0
      </li>
      <li>
        list_item_1
      </li>
    </ListInline>
  )

  // Get the `<ul>`.
  const ul = T.findRenderedDOMComponentWithClass(el, 't7-list-inline')

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
