// Dependencies.
import React from 'react'
import { Component } from 'react'

// UI components.
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import Footer from '../components/footer'

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
  }

  // Render method.
  render () {
    return (
      <div className='t7-app-wrapper'>
        <Header header={that.state.header} />
        <Sidebar sidebar={that.state.sidebar} />
        <Main main={that.state.main} />
        <Footer footer={that.state.footer} year={that.state.year} />
      </div>
    )
  }

// END: export.
}
