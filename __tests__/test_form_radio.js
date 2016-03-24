/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Radio =
require('../source/components/form_radio/template')

// Describe `<Component/>` name.
describe('Radio', function () {
  const disabled = true
  const id = 'example_id'
  const label = 'example_label'
  const name = 'example_name'
  const required = true
  const value = 'example_value'

  // Checked state.
  const defaultChecked = true

  // Called from `it responds to clicks`.
  function handleChange (e, value, checked) {
    expect(checked).toBe(false)
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Radio
    defaultChecked={defaultChecked}
    disabled={disabled}
    id={id}
    label={label}
    name={name}
    required={required}
    value={value}

    handleChange={handleChange}
    />
  )

  // Get parent label.
  const parent = T.findRenderedDOMComponentWithTag(el, 'label')

  // Get radio.
  const radio = parent.querySelector('input[type="radio"]')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for label.
  // ===============

  it('has associated label', function () {
    expect(parent.htmlFor).toBe(radio.id)
    expect(parent.textContent.trim()).toBe('example_label')
  })

  // ===============
  // Test for radio.
  // ===============

  it('is checked', function () {
    expect(radio.checked).toBe(true)
  })

  it('is disabled', function () {
    expect(radio.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(radio.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(radio.name).toBe('example_name')
  })

  it('has correct value', function () {
    expect(radio.value).toBe('example_value')
  })

  it('is required', function () {
    expect(radio.hasAttribute('required')).toBe(true)
  })

  it('responds to clicks', function () {
    // Fake click to un-check.
    T.Simulate.change(radio, {
      target: {
        checked: false
      }
    })
  })
})
