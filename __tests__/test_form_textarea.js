/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Textarea =
require('../source/components/form_textarea/template')

// Describe `<Component/>` name.
describe('Textarea', function () {
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
    <Textarea
    disabled={disabled}
    id={id}
    name={name}
    placeholder={placeholder}
    required={required}

    defaultValue={defaultValue}

    handleChange={handleChange}
    />
  )

  // Get the `<textarea>`.
  const textarea = T.findRenderedDOMComponentWithTag(el, 'textarea')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==================
  // Test for textarea.
  // ==================

  it('is disabled', function () {
    expect(textarea.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(textarea.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(textarea.name).toBe('example_name')
  })

  it('has correct placeholder', function () {
    const x = textarea.getAttribute('placeholder')

    expect(x).toBe('example_placeholder')
  })

  it('is required', function () {
    expect(textarea.hasAttribute('required')).toBe(true)
  })

  it('has correct value', function () {
    expect(textarea.value).toBe('example_value')
  })

  it('responds to change', function () {
    T.Simulate.change(textarea, {
      target: {
        value: 'new_value'
      }
    })
  })
})
