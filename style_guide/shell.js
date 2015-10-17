// Dependencies.
import React from 'react'

// Layout.
import './layouts/isg-app.css'

// Grid.
import './components_misc/unsemantic/grid.css'

// Style guide CSS.
import './css/reset.css'
import './css/global.css'
import './css/isg-section.css'

// Pilfered from "source".
import './css/t7-form.css'

// Component level CSS.
import './components/color_list/isg-color-list.css'

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

    var style = this.props.style
    var script = this.props.script

    if (script) {
      script = root + script
      script = <script src={script}></script>
    }

    if (style) {
      style = root + style
      style = <link rel='stylesheet' href={style} />
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
      <link rel='stylesheet' href='/style_guide/style.css' />
      {style}
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
  style: '',
  script: '',
  markup: ''
}

export default Shell
