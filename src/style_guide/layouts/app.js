// Dependencies.
import React from 'react'

// CSS.
import style from '../css/_t7-app.css'

// Utility methods.
import utils from '../utils'

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
    // Set page title.
    utils.title(this.props)

    // Grab the URL "/#path".
    const path = this.props.path

    return (
      <div className={style['t7-app']}>
        <Header path={path} />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

// Validation.
App.propTypes = {
  children: React.PropTypes.node,
  path: React.PropTypes.string
}

// Export.
export default App
