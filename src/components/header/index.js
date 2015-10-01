// Dependencies.
import React from 'react'
import { Component } from 'react'

require('./style.css')

// Shared scope
var that

// Define class.
export default class Header extends Component {
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

  // Stop event.
  stop (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  // Example event.
  linkClick (e) {
    that.stop(e)

    // TODO.
    window.alert('This link is... ' + e.target.href)
  }

  // Render method.
  render () {
    // TODO.
    console.log('called... render')

    /*
      TODO:

      `*.props` made available via constructor/super.
    */
    console.log(that.props)

    return (
      <header className='t7-header' role='banner'>
        <span>
          {that.props.header}
        </span>
        {' '}
        &mdash;
        {' '}
        <a href='http://google.com/' onClick={that.linkClick}>
          Click Me!
        </a>
      </header>
    )
  }

// END: export.
}
