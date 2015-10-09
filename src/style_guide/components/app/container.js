// Dependencies.
import React from 'react'

// UI components.
import Header from '../app_header/template'
import Sidebar from '../app_sidebar/template'
import Main from '../app_main/template'
import Footer from '../app_footer/template'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
class App extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Called within `render`.
  setPageTitle () {
    // Fallback site title.
    const suffix = 'T7 Interactive Style Guide'

    // Get object hash of potential titles.
    const titles = this.props.route.titles

    // Grab pathname from `props.location`.
    const pathname = this.props.location.pathname.split('/')[1]

    // Used in conditional.
    var title

    // Is there a pathname?
    if (pathname) {
      // Does a title exist?
      if (titles[pathname]) {
        title = titles[pathname] + ' | ' + suffix

      // If no title exists, 404.
      } else {
        title = titles['404'] + ' | ' + suffix
      }

    // If no path name.
    } else {
      title = suffix
    }

    // Set title.
    document.title = title
  }

  // Render method.
  render () {
    // Set page title.
    this.setPageTitle()

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
