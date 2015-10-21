// Dependencies.
import React from 'react'

// Utility methods.
import utils from '../../utils'

// Define class.
class Code extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <div
        dangerouslySetInnerHTML={
          utils.markdown(
            '```\n' +
            require(
              'raw!../../docs_code/' +
              this.props.file.split('.')[0] +
              '.md'
            ) +
            '\n```'
          )
        }
      />
    )
  }
}

// Validation.
Code.propTypes = {
  file: React.PropTypes.string
}

// Export.
export default Code
