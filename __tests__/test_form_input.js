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
const Input =
require('../source/components/form_input/template')

// Describe `<Component/>` name.
describe('Input', function () {
  const disabled = true
  const id = 'example_id'
  const name = 'example_name'
  const placeholder = 'example_placeholder'
  const required = true
  const type = 'search'

  // Must have `auto` width, to use `size`.
  const size = '10'
  const width = 'auto'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Input
    disabled={disabled}
    id={id}
    name={name}
    placeholder={placeholder}
    required={required}
    type={type}

    size={size}
    width={width}
    />
  )

  // Get input.
  const input = T.findRenderedDOMComponentWithTag(el, 'input')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for input.
  // ===============

  it('is disabled', function () {
    expect(input.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(input.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(input.name).toBe('example_name')
  })

  it('has placeholer', function () {
    expect(input.getAttribute('placeholder')).toBe('example_placeholder')
  })

  it('is required', function () {
    expect(input.hasAttribute('required')).toBe(true)
  })

  it('has correct type', function () {
    expect(input.type).toBe('search')
  })

  it('has correct size', function () {
    expect(input.size).toBe(10)
  })

  it('has auto width', function () {
    expect(input.className).toMatch('t7-form__input--width-auto')
  })
})
