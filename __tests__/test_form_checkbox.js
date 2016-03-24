/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Checkbox =
require('../source/components/form_checkbox/template')

// Describe `<Component/>` name.
describe('Checkbox', function () {
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
    <Checkbox
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

  // Get checkbox.
  const checkbox = parent.querySelector('input[type="checkbox"]')

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
    expect(parent.htmlFor).toBe(checkbox.id)
    expect(parent.textContent.trim()).toBe('example_label')
  })

  // ==================
  // Test for checkbox.
  // ==================

  it('is checked', function () {
    expect(checkbox.checked).toBe(true)
  })

  it('is disabled', function () {
    expect(checkbox.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(checkbox.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(checkbox.name).toBe('example_name')
  })

  it('has correct value', function () {
    expect(checkbox.value).toBe('example_value')
  })

  it('is required', function () {
    expect(checkbox.hasAttribute('required')).toBe(true)
  })

  it('responds to clicks', function () {
    // Fake click to un-check.
    T.Simulate.change(checkbox, {
      target: {
        checked: false
      }
    })
  })
})
