// Dependencies.
import React from 'react'
import { Component } from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Event cancel.
import utils from '../../utils'

// Define class.
export default class Header extends Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
  }

  // Example event.
  linkClick (e) {
    utils.stop(e)

    // TODO.
    window.alert('This link is... ' + e.target.href)
  }

  // Render method.
  render () {
    return (
      <header className={style['t7-app__header']} role='banner'>
        {this.props.header}
        {' '}
        &mdash;
        {' '}
        <a href='http://google.com/' onClick={this.linkClick}>
          Click Me!
        </a>
      </header>
    )
  }

// END: export.
}
