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
const ButtonExamples = require('../source/components/form_button_examples/template')

// Describe `<Component/>` name.
describe('ButtonExamples', function () {
  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ButtonExamples />
  )

  // Get wrapper `<div>`.
  const parent = T.findRenderedDOMComponentWithTag(el, 'div')

  // ====================
  // Get buttons by size.
  // ====================

  const buttons_size_small =
  parent.querySelectorAll('.t7-form__button--small')

  const buttons_size_big =
  parent.querySelectorAll('.t7-form__button--big')

  const buttons_size_normal =
  parent.querySelectorAll(
    [
      '.t7-form__button',
      ':not(.t7-form__button--small)',
      ':not(.t7-form__button--big)'
    ].join('')
  )

  // ====================
  // Get buttons by mode.
  // ====================

  const buttons_mode_default =
  parent.querySelectorAll('.t7-form__button--default')

  const buttons_mode_primary =
  parent.querySelectorAll('.t7-form__button--primary')

  const buttons_mode_positive =
  parent.querySelectorAll('.t7-form__button--positive')

  const buttons_mode_negative =
  parent.querySelectorAll('.t7-form__button--negative')

  const buttons_mode_warn =
  parent.querySelectorAll('.t7-form__button--warn')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for sizes.
  // ===============

  it('has correct sizes', function () {
    expect(buttons_size_small.length).toBe(5)
    expect(buttons_size_big.length).toBe(5)
    expect(buttons_size_normal.length).toBe(5)
  })

  // ===============
  // Test for modes.
  // ===============

  it('has correct modes', function () {
    expect(buttons_mode_default.length).toBe(3)
    expect(buttons_mode_primary.length).toBe(3)
    expect(buttons_mode_positive.length).toBe(3)
    expect(buttons_mode_negative.length).toBe(3)
    expect(buttons_mode_warn.length).toBe(3)
  })
})
