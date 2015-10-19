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

// Get raw JS.
import raw_prism_js from 'raw!./browser_includes/raw_prism_js.txt'
import raw_prism_css from 'raw!./browser_includes/raw_prism_css.txt'
import raw_button_toggle_js from 'raw!./browser_includes/raw_button_toggle_js.txt'

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
      script = <script src={script}></script>
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
      <style dangerouslySetInnerHTML={{__html: raw_prism_css}} />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
      <link rel='stylesheet' href={root + 'style.css'}/>
      {style}
      <title>{title}</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html: markup}} />
        <script dangerouslySetInnerHTML={{__html: raw_prism_js}} />
        <script dangerouslySetInnerHTML={{__html: raw_button_toggle_js}} />
        <script src='https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en'></script>
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
