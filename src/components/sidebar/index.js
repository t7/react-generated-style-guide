// Dependencies.
import React from 'react'
import { Component } from 'react'

require('./style.css')

// Shared scope
var that

// Define class.
export default class Sidebar extends Component {
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
      <aside className='t7-sidebar'>
        {that.props.sidebar}
      </aside>
    )
  }

// END: export.
}
