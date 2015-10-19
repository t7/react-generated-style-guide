// Dependencies.
import React from 'react'

// CSS.
import style from './isg-app.css'

// Define class.
class Footer extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const year = new Date().getFullYear()

    return (
      <footer className={style['isg-app__footer']} role='contentinfo'>
        &copy; {year} <a href='http://www.tandemseven.com/' target='_blank'>TandemSeven</a> &mdash; <a href='http://github.com/' target='_blank'>View on GitHub</a>
      </footer>
    )
  }
}

// Export.
export default Footer
