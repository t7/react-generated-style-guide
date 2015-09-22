import React, { Component } from 'react'

export default class App extends Component {
  // Example event.
  foobar () {
    window.alert('test')
  }

  // Render method.
  render () {
    return (
      <div>
        Hello World
        &mdash; <a href='#' onClick={this.foobar}>Click Me</a>
      </div>
    )
  }

// END: export
}
