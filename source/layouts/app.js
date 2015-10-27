// Dependencies.
import React from 'react'

// CSS.
import './t7-app.css'

// App Components.
import Wrapper from './app_wrapper'
import Header from './app_header'
import Main from './app_main'
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
      <div data-test='foo' className='t7-app'>
        <Wrapper>
          <Header />
          <Main>
            {this.props.children}
          </Main>
        </Wrapper>
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
