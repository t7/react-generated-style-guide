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
const ImageFigure =
require('../source/components/image_figure/template')

// Describe `<Component/>` name.
describe('ImageFigure', function () {
  const alt = 'example_alt'
  const border = '#999'
  const caption = 'example_caption'
  const captionTop = true
  const href = 'http://example.com/'
  const src = 'photo.jpg'
  const target = '_blank'
  const width = '100'
  const height = '50'

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <ImageFigure
    alt={alt}
    border={border}
    caption={caption}
    captionTop={captionTop}
    href={href}
    src={src}
    target={target}
    width={width}
    height={height}
    />
  )

  // Get parent `<figure>`.
  const parent = T.findRenderedDOMComponentWithTag(el, 'figure')

  // Get the `<a>`.
  const link = parent.querySelector('a')

  // Get the `<img/>`.
  const image = parent.querySelector('img')

  // Get the `<figcaption>`.
  const figcaption = parent.querySelector('figcaption')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ===============
  // Test for image.
  // ===============

  it('has alt text', function () {
    expect(image.getAttribute('alt')).toBe('example_alt')
  })

  it('has a border', function () {
    expect(image.getAttribute('style')).toContain('1px solid #999')
  })

  it('has correct source', function () {
    expect(image.getAttribute('src')).toBe('photo.jpg')
  })

  it('has correct width', function () {
    expect(image.getAttribute('width')).toBe('100')
  })

  it('has correct height', function () {
    expect(image.getAttribute('height')).toBe('50')
  })

  // ===============
  // Test for image.
  // ===============

  it('has correct href', function () {
    expect(link.getAttribute('href')).toBe('http://example.com/')
  })

  it('has correct target', function () {
    expect(link.getAttribute('target')).toBe('_blank')
  })

  // =================
  // Test for caption.
  // =================

  it('has correct caption text', function () {
    expect(figcaption.innerHTML).toBe('example_caption')
  })

  it('has correct caption position', function () {
    const x = parent.querySelectorAll('figcaption + a > img').length

    expect(x).toBe(1)
  })
})
