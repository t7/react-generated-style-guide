// Dependencies.
import React from 'react'


// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {

    var patterns = this.props.json.map(function(pattern){
      return (
        <div>
          <h3>{pattern.name}</h3>
          <div id={pattern.id}></div>
          <pre><code>{pattern.markup}</code></pre>
        </div>
      )
    })

    return (
      <div>{patterns}</div>
    )
  }
}

// Validation.
Page.propTypes = {
}

// Export.
export default Page
