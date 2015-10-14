import React from 'react'

class Shell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const markup = this.props.markup
    const root = this.props.root
    const style = root + this.props.style

    var script = this.props.script

    if (script) {
      script = root + script
      script = <script src={script}></script>
    }

    return (
      <html lang='en'>
      <head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
      />
      <link rel='stylesheet' href={style} />
      <title>Interactive Style Guide</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: markup}} />
        <script src='https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en'></script>
        {script}
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

Shell.defaultProps = {
  root: '/style_guide/',
  style: 'style.css',
  script: '',
  markup: ''
}

export default Shell
