// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// UI Components.
import Markdown from '../markdown/container'

// Define class.
class Main extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <main className={style['t7-app__main']} role='main'>

        <Markdown file='doc_intro' />

      </main>
    )
  }
}

// Export.
export default Main
