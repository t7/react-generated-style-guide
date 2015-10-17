// Dependencies.
import React from 'react'

// CSS.
import style from './isg-app.css'

// UI components.
import Select from '../components/form_select/template'

// Define class.
class Header extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Trigger when `<select>` changes.
  handleChange (e) {
    // TODO: Make this change to static pages.
    // const path = e.target.value
  }

  // Render method.
  render () {
    // Options for `<select>`.
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
      <header className={style['isg-app__header']} role='banner'>

        <b className={style['isg-app__header__title']}>
          Interactive Style Guide
        </b>

        <Select id='isg_header_select' options={options} width='auto' />

        <span className={style['isg-app__header__logo']}>
          TandemSeven
        </span>

      </header>
    )
  }
}

// Export.
export default Header
