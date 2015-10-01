
// Dependencies.
import React from 'react'
import { Component } from 'react'

require('./style.css')

// Shared scope
var that

// Define class.
export default class Footer extends Component {
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
      <footer className='t7-footer' role='contentinfo'>
        &copy;
        {' '}
        {that.props.footer}
        {' '}
        {that.props.year}
      </footer>
    )
  }

// END: export.
}
