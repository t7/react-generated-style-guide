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
const Dropdown = require('../source/components/dropdown/template')

// Describe `<Component/>` name.
describe('Dropdown', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Dropdown
    menuAlign='right'
    text='dropdown_trigger_text'
    items={[
      {
        'href': 'http://example.com/',
        'text': 'dropdown_item_1'
      },
      {
        'href': 'http://example.net/',
        'text': 'dropdown_item_2'
      }
    ]}
    />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-dropdown')

  // Get dropdown children.
  const trigger = parent.querySelector('.t7-dropdown__trigger')
  const menu = parent.querySelector('.t7-dropdown__menu')
  const links = menu.querySelectorAll('.t7-dropdown__menu__link')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ============================
  // Test for toggle open/closed.
  // ============================

  it('responds to toggle', function () {
    expect(menu.getAttribute('aria-hidden')).toBe('true')

    T.Simulate.click(trigger)

    expect(menu.getAttribute('aria-hidden')).toBe('false')
  })

  // ===============
  // Test for links.
  // ===============

  it('has correct links', function () {
    expect(links.length).toBe(2)

    expect(links[0].href).toMatch('example.com')
    expect(links[1].href).toMatch('example.net')
  })
})
