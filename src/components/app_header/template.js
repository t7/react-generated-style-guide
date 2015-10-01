// Dependencies.
import React from 'react'
import { Component } from 'react'

// CSS.
import style from '../../css/_t7-app.css'

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
    console.log('Component Mounted: "/components/app_header/template"')
  }

  // Stop event.
  stop (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  // Example event.
  linkClick (e) {
    that.stop(e)
    that.linkClickHandler(e.target.href)

    if (typeof that.props.callback === 'function') {
      that.props.callback(e)
    }
  }

  linkClickHandler (link) {
    // TODO.
    window.alert('This link is... ' + link)
  }

  // Render method.
  render () {
    return (
      <header className={style['t7-app__header']} role='banner'>
        {that.props.header}
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
