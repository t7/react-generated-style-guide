/*global
describe
expect
it
jest
*/

jest.dontMock('../source/components/accordion/template')

// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

// UI components.
import Accordion from '../source/components/accordion/template'

describe('exists', function () {
  it('is there', function () {
    const selected = {
      0: true
    }

    const component = TestUtils.renderIntoDocument(
      <Accordion selected={selected} />
    )

    // TODO: Write tests here.
  })
})
