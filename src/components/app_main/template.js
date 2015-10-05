// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Select drop-down.
import Select from '../form_select/template'

// Define class.
class Main extends React.Component {
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
        <h1>
          {this.props.main}
        </h1>
        <hr />
        <p>
          <Select />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    )
  }
}

// Validation.
Main.propTypes = {
  main: React.PropTypes.string
}

// Export.
export default Main
