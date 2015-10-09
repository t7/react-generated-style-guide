// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

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

        <h1>
          Requirements
        </h1>

        <hr />

        <p>
          "Requirements" content here, yo.
        </p>

      </main>
    )
  }
}

// Export.
export default Main
