// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'

// UI Components.
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
      <div className={style['t7-app']}>
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
