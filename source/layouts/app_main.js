// Dependencies.
import React from 'react'

// CSS.
import './t7-app.css'

// Define class.
class Main extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <main role='main' className='t7-app__main'>
        {this.props.children}
      </main>
    )
  }
}

// Validation.
Main.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default Main
