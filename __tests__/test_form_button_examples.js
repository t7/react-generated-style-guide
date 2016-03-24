/*global
describe
expect
it
*/

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

  const sizeSmall =
  parent.querySelectorAll('.t7-form__button--small')

  const sizeBig =
  parent.querySelectorAll('.t7-form__button--big')

  const sizeNormal =
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

  const modeDefault =
  parent.querySelectorAll('.t7-form__button--default')

  const modePrimary =
  parent.querySelectorAll('.t7-form__button--primary')

  const modePositive =
  parent.querySelectorAll('.t7-form__button--positive')

  const modeNegative =
  parent.querySelectorAll('.t7-form__button--negative')

  const modeWarn =
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
    expect(sizeSmall.length).toBe(5)
    expect(sizeBig.length).toBe(5)
    expect(sizeNormal.length).toBe(5)
  })

  // ===============
  // Test for modes.
  // ===============

  it('has correct modes', function () {
    expect(modeDefault.length).toBe(3)
    expect(modePrimary.length).toBe(3)
    expect(modePositive.length).toBe(3)
    expect(modeNegative.length).toBe(3)
    expect(modeWarn.length).toBe(3)
  })
})
