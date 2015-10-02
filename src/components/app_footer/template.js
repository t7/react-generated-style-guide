// Dependencies.
import React from 'react'
import { Component } from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
export default class Footer extends Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
  }

  // Render method.
  render () {
    return (
      <footer className={style['t7-app__footer']} role='contentinfo'>
        &copy;
        {' '}
        {this.props.footer}
        {' '}
        {this.props.year}
      </footer>
    )
  }

// END: export.
}
