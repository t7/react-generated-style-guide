// Dependencies.
import React from 'react'
import { Component } from 'react'

require('./style.css')

// Shared scope
var that

// Define class.
export default class Main extends Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to `this`.
    that = this
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
  }

  // Render method.
  render () {
    return (
      <main className='t7-main' role='main'>
        {that.props.main}
      </main>
    )
  }

// END: export.
}
