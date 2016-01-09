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
const TreeDiagram = require('../source/components/tree_diagram/template')

// Describe `<Component/>` name.
describe('Fieldset', function () {
  const data = {
    name: 'parent',
    children: [
      {
        name: 'child_1',
        children: [
          {
            name: 'child_1:grandchild_1'
          },
          {
            name: 'child_1:grandchild_2'
          }
        ]
      },
      {
        name: 'child_2',
        children: [
          {
            name: 'child_2:grandchild_1'
          },
          {
            name: 'child_2:grandchild_2'
          }
        ]
      }
    ]
  }

  // Insert the component into DOM.
  const el = T.renderIntoDocument(
    <TreeDiagram data={data} />
  )

  // Get parent element.
  const parent = T.findRenderedDOMComponentWithClass(el, 't7-d3-tree-diagram')

  // Get tree nodes.
  const nodes = parent.querySelectorAll('.t7-d3-tree-diagram__node')

  // ===================
  // Test for existence.
  // ===================

  it('exists in the page', function () {
    expect(T.isCompositeComponent(el)).toBe(true)
  })

  // ==============
  // Test for noes.
  // ==============

  it('has correct nodes', function () {
    expect(nodes.length).toBe(7)
  })
})
