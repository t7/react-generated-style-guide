// Dependencies.
import React from 'react'
import { Component } from 'react'

// UI components.
import Header from '../app_header/template'
import Sidebar from '../app_sidebar/template'
import Main from '../app_main/template'
import Footer from '../app_footer/template'

// Shared scope
var that

// Define class.
export default class App extends Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to `this`.
    that = this

    // Call the kickoff method.
    that.kickoff()
  }

  kickoff () {
    var year = new Date().getFullYear()

    that.state = {
      header: 'Header Here',
      sidebar: 'Sidebar Here',
      main: 'Main Here',
      footer: 'TandemSeven',
      year: year
    }
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
    console.log('Component Mounted: "/containers/app"')
  }

  // Render method.
  render () {
    return (
      <div className='t7-app'>
        <Header header={that.state.header} />
        <Main main={that.state.main} />
        <Sidebar sidebar={that.state.sidebar} />
        <Footer footer={that.state.footer} year={that.state.year} />
      </div>
    )
  }

// END: export.
}
