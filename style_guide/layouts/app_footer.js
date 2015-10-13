// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'

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
      <footer className={style['t7-app__footer']} role='contentinfo'>
        &copy;
        {' '}
        {year}
        {' '}
        TandemSeven
      </footer>
    )
  }
}

// Export.
export default Footer
