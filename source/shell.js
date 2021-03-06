import React from 'react'

class Shell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <html lang='en'>
      <head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
      />
      <link rel='stylesheet' href='./build.css' />
      <title></title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src='./build.js' />
      </body>
      </html>
    )
  }
}

// Validation.
Shell.propTypes = {
  children: React.PropTypes.node,
  markup: React.PropTypes.string
}

export default Shell
