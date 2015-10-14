// Dependencies.
import React from 'react'

// CSS.
import style from './t7-app.css'


// UI components.
import Select from '../../source/components/form_select/template'

// Define class.
class Header extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Trigger when `<select>` changes.
  handleChange (e) {
    const path = e.target.value

    // TODO: Make this change to static pages.
  }

  // Render method.
  render () {
    const path = this.props.path
    const handleChange = this.handleChange.bind(this)

    // Config for <select>.
    const options = [
      {
        value: '',
        name: 'Contents...'
      },
      {
        value: '/',
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
        value: 'requirements',
        name: '- Requirements'
      },
      {
        value: 'screens',
        name: '- Screens'
      }
    ]

    return (
      <header className={style['t7-app__header']} role='banner'>
        <b className={style['t7-app__header__title']}>
          Interactive Style Guide
        </b>
        <Select value={path} options={options} handleChange={handleChange} width='auto' />
        <span className={style['t7-app__header__logo']}>
          TandemSeven
        </span>
      </header>
    )
  }
}

// Validation.
Header.propTypes = {
  path: React.PropTypes.string
}

// Export.
export default Header
