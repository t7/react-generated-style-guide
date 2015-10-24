// Dependencies.
import React from 'react'
import { FormattedDate } from 'react-intl'

// CSS.
import style from './isg-app.css'
import helper from '../css/t7-helper.css'

// Define class.
class Footer extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const now = new Date()
    const year = now.getFullYear()

    const timestamp = (
      <FormattedDate
        value={now}
        day='numeric'
        month='short'
        year='numeric'
      />
    )

    const floatLeft = [
      helper['t7-tablet-float-left'],
      helper['t7-desktop-float-left']
    ].join(' ')

    const floatRight = [
      helper['t7-tablet-float-right'],
      helper['t7-desktop-float-right']
    ].join(' ')

    return (
      <footer className={style['isg-app__footer']} role='contentinfo'>
        <p className={floatLeft}>
          <a href='https://github.com/t7/style-guide-example' target='_blank'>View on GitHub</a> &mdash; Last build: {timestamp}
        </p>
        <p className={floatRight}>
          &copy; {year} <a href='http://www.tandemseven.com/' target='_blank'>TandemSeven</a>
        </p>
      </footer>
    )
  }
}

// Export.
export default Footer
