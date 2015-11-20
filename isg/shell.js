// Dependencies.
import React from 'react'

// Define class.
class Shell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const markup = this.props.markup
    const root = this.props.root

    const suffix = 'Interactive Style Guide'
    var title = this.props.title

    if (title) {
      title = title + ' | ' + suffix
    } else {
      title = suffix
    }

    var style = this.props.style
    var script = this.props.script

    if (script) {
      script = (
        <script src={script} />
      )
    }

    if (style) {
      style = (
        <link rel='stylesheet' href={style} />
      )
    }

    return (
      <html lang='en'>
      <head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
      />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
      <link rel='stylesheet' href={root + 'style.css'} />
      {style}
      <title>{title}</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: markup}} />
        <script src={root + 'static/js/prism.js'} />
        <script src={root + 'static/js/button_toggle.js'} />
        {script}
      </body>
      </html>
    )
  }
}

// Validation.
Shell.propTypes = {
  markup: React.PropTypes.string,
  root: React.PropTypes.string,
  script: React.PropTypes.string,
  style: React.PropTypes.string,
  title: React.PropTypes.string
}

Shell.defaultProps = {
  root: '../',
  style: '',
  script: '',
  markup: ''
}

export default Shell
