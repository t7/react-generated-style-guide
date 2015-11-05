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
const Select =
require('../source/components/form_select/template')

// Describe `<Component/>` name.
describe('Select', function () {
  const options = [
    {
      value: 'value_0',
      name: 'name_0'
    },
    {
      value: 'value_1',
      name: 'name_1'
    }
  ]

  const ariaControls = 'example_aria'
  const disabled = true
  const id = 'example_id'
  const name = 'example_name'
  const required = true
  const defaultValue = 'value_1'

  // Called from `responds to change`.
  function handleChange (e, value) {
    expect(value).toBe('value_0')
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Select
    ariaControls={ariaControls}
    disabled={disabled}
    id={id}
    name={name}
    options={options}
    required={required}

    defaultValue={defaultValue}

    handleChange={handleChange}
    />
  )

  // Get the `<select>`.
  const select = T.findRenderedDOMComponentWithTag(el, 'select')

  // Get options.
  const _options = select.querySelectorAll('option')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // =================
  // Test for options.
  // =================

  it('has correct options', function () {
    expect(_options.length).toBe(2)

    // First option.
    expect(_options[0].value).toBe('value_0')
    expect(_options[0].innerHTML).toBe('name_0')

    // Second option.
    expect(_options[1].value).toBe('value_1')
    expect(_options[1].innerHTML).toBe('name_1')
  })

  // ================
  // Test for select.
  // ================

  it('has correct ARIA', function () {
    const x = select.getAttribute('aria-controls')

    expect(x).toBe('example_aria')
  })

  it('has correct value', function () {
    expect(select.value).toBe('value_1')
  })

  it('is disabled', function () {
    expect(select.disabled).toBe(true)
  })

  it('has correct ID', function () {
    expect(select.id).toBe('example_id')
  })

  it('has correct name', function () {
    expect(select.name).toBe('example_name')
  })

  it('is required', function () {
    expect(select.hasAttribute('required')).toBe(true)
  })

  it('responds to change', function () {
    T.Simulate.change(select, {
      target: {
        value: 'value_0'
      }
    })
  })
})
