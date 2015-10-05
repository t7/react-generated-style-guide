// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Define class.
class Footer extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    // TODO.
  }

  // Render method.
  render () {
    return (
      <footer className={style['t7-app__footer']} role='contentinfo'>
        &copy;
        {' '}
        {this.props.footer}
        {' '}
        {this.props.year}
      </footer>
    )
  }
}

// Validation.
Footer.propTypes = {
  footer: React.PropTypes.string,
  year: React.PropTypes.number
}

// Export.
export default Footer
