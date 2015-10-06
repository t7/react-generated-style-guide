// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-app.css'

// Utility methods.
import utils from '../../utils'

// UI components.
import Select from '../form_select/template'

// Define class.
class Header extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Automatically called after `render`.
  componentDidMount () {
    utils.log('Component Mounted: "/app_header/template"')
  }

  onChange (e, value) {
    // TODO.
    utils.log(e, value)
  }

  // Render method.
  render () {
    // Config for <select>.
    const options = [
      {
        value: '',
        name: 'Contents...'
      },
      {
        value: 'intro',
        name: '- Intro'
      },
      {
        value: 'branding',
        name: '- Branding'
      },
      {
        value: 'patterns',
        name: '- Patterns'
      },
      {
        value: 'templates',
        name: '- Templates'
      },
      {
        value: 'requirements',
        name: '- Requirements'
      }
    ]

    return (
      <header className={style['t7-app__header']} role='banner'>
        <b className={style['t7-app__header__title']}>
          {this.props.header}
        </b>

        {' '}
        &nbsp;
        {' '}

        <Select options={options} onChange={this.onChange} />

        <span className={style['t7-app__header__logo']}>
          TandemSeven
        </span>
      </header>
    )
  }
}

// Validation.
Header.propTypes = {
  header: React.PropTypes.string
}

// Export.
export default Header
