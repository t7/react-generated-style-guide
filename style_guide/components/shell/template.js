import React from 'react'

class Shell extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (

      <html lang='en'>
      <head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
      />
      <link rel='stylesheet' href='./style.css' />
      <title></title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{__html:this.props.componentHTML}} />
        <script src='./index.js'></script>
      </body>
      </html>

    )
  }
}

Shell.defaultProps = {
  children: React.PropTypes.node
}

export default Shell
