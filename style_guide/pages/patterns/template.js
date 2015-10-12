import React from 'react'


// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <App>
        <PatternsList />
      </App>
    )
  }
}

// Validation.
Page.propTypes = {

}

// Export.
export default Page
