// Dependencies.
import React from 'react'
import { Component } from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
export default class Main extends Component {
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
      <main className={style['t7-app__main']} role='main'>
        {this.props.main}
      </main>
    )
  }

// END: export.
}
