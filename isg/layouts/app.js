// Dependencies.
import React from 'react'

// CSS.
import './isg-app.css'

// UI components.
import Header from './app_header'
import Footer from './app_footer'

// Define class.
class App extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <div className='isg-app'>
        <Header />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node
}

// Export.
export default App
