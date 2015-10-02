// Dependencies.
import React from 'react'
import { Component } from 'react'

// UI components.
import Header from '../app_header/template'
import Sidebar from '../app_sidebar/template'
import Main from '../app_main/template'
import Footer from '../app_footer/template'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
export default class App extends Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Call the kickoff method.
    this.kickoff()
  }

  kickoff () {
    var year = new Date().getFullYear()

    this.state = {
      header: 'Header Here',
      sidebar: 'Sidebar Here',
      main: 'Main Here',
      footer: 'TandemSeven',
      year: year
    }
  }

  // Automatically called after `render`.
  componentDidMount () {
    // Fallback site title.
    const suffix = 'T7 Interactive Style Guide'

    // Get object hash of potential titles.
    const titles = this.props.route.titles

    // Grab pathname from `props.location`.
    const pathname = this.props.location.pathname.split('/')[1]

    // Used in conditional.
    var title

    // Does a title exist?
    if (titles[pathname]) {
      title = titles[pathname] + ' | ' + suffix
    }
    else {
      title = suffix
    }

    // Set title.
    document.title = title
  }

  // Render method.
  render () {
    return (
      <div className={style['t7-app']}>
        <Header header={this.state.header} callback={this.headerCallback} />
        <Main main={this.state.main} />
        <Sidebar sidebar={this.state.sidebar} />
        <Footer footer={this.state.footer} year={this.state.year} />
      </div>
    )
  }

// END: export.
}
