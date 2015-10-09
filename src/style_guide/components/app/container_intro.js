// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Utility methods.
import utils from '../../utils'

// UI Components.
import Header from '../app_header/template'
import Sidebar from '../app_sidebar/template'
import Main from '../app_main/template_intro'
import Footer from '../app_footer/template'

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

    return (
      <div className={style['t7-app']}>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

// Validation.
App.propTypes = {
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

// Export.
export default App
