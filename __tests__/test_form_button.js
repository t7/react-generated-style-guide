/*global
describe
expect
it
*/

// Dependencies.
const React = require('react')
const T = require('react-addons-test-utils')

// UI components.
const Button = require('../source/components/form_button/template')

// Describe `<Component/>` name.
describe('Button', function () {
  const ariaControls = 'example_id'
  const disabled = true
  const text = 'GO'
  const title = 'Example Title'
  const type = 'submit'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <Button
    ariaControls={ariaControls}
    disabled={disabled}
    text={text}
    title={title}
    type={type}
    />
  )

  // Get button.
  const button = T.findRenderedDOMComponentWithClass(el, 't7-form__button')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for ARIA.
  // ==============

  it('has correct ARIA', function () {
    const x = button.getAttribute('aria-controls')

    expect(x).toBe('example_id')
  })

  // ====================
  // Test disabled state.
  // ====================

  it('has correct state', function () {
    const x = button.disabled

    expect(x).toBe(true)
  })

  // ==============
  // Test for text.
  // ==============

  it('has correct text', function () {
    const x = button.innerHTML

    expect(x).toBe('GO')
  })

  // ===============
  // Test for title.
  // ===============

  it('has correct title', function () {
    const x = button.getAttribute('title')

    expect(x).toBe('Example Title')
  })

  // ==============
  // Test for type.
  // ==============

  it('has correct type', function () {
    const x = button.getAttribute('type')

    expect(x).toBe('submit')
  })
})
