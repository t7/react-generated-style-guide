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
      <link rel='stylesheet' href={this.props.root + this.props.style} />
      <title>Style Guide Yo</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src='https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en'></script>
        <script src={this.props.root + this.props.script}></script>
      </body>
      </html>
    )
  }
}

// Validation.
Shell.propTypes = {
  root: React.PropTypes.string,
  script: React.PropTypes.string,
  style: React.PropTypes.string,
  markup: React.PropTypes.string
}

export default Shell
