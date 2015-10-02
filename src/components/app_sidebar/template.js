// Dependencies.
import React from 'react'
import { Component } from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
export default class Sidebar extends Component {
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
      <aside className={style['t7-app__sidebar']}>
        {this.props.sidebar}
      </aside>
    )
  }

// END: export.
}
