/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Textdiv =
require('../source/components/form_textdiv/template')

// Describe `<Component/>` name.
describe('Textdiv', function () {
  // Event callback.
  function handleChange (e, value) {
    expect(value).toBe('new_value')
  }

  const disabled = true
  const id = 'example_id'
  const name = 'example_name'
  const placeholder = 'example_placeholder'
  const required = true

  // Determine pre-filled text.
  const defaultValue = 'example_value'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Textdiv
    disabled={disabled}
    id={id}
    name={name}
    placeholder={placeholder}
    required={required}

    defaultValue={defaultValue}

    handleChange={handleChange}
    />
  )

  // Get the `<div>`.
  const textdiv = T.findRenderedDOMComponentWithTag(el, 'div')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for textdiv.
  // =================

  it('is disabled', function () {
    expect(textdiv.hasAttribute('disabled')).toBe(true)
  })

  it('editing is off', function () {
    expect(textdiv.getAttribute('contenteditable')).toBe('false')
  })

  it('has correct ID', function () {
    expect(textdiv.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(textdiv.getAttribute('name')).toBe('example_name')
  })

  it('has correct placeholder', function () {
    const x = textdiv.getAttribute('placeholder')

    expect(x).toBe('example_placeholder')
  })

  it('is required', function () {
    expect(textdiv.hasAttribute('required')).toBe(true)
  })

  it('has correct value', function () {
    expect(textdiv.innerHTML).toBe('example_value')
  })

  it('responds to change', function () {
    T.Simulate.input(textdiv, {
      target: {
        innerHTML: 'new_value'
      }
    })
  })
})
