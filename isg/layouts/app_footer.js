// Dependencies.
import React from 'react'
import { FormattedDate } from 'react-intl'

// CSS.
import './isg-app.css'
import '../css/isg-helper.css'

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
      'isg-tablet-float-left',
      'isg-desktop-float-left'
    ].join(' ')

    const floatRight = [
      'isg-tablet-float-right',
      'isg-desktop-float-right'
    ].join(' ')

    return (
      <footer className='isg-app__footer' role='contentinfo'>
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
