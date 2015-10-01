// Dependencies.
import React from 'react'
import { Component } from 'react'

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
    console.log('Component Mounted: "/components/footer"')
  }

  // Render method.
  render () {
    return (
      <footer className='t7-app__footer' role='contentinfo'>
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
