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
    return (
      <header className={style['isg-app__header']} role='banner'>
        <b className={style['isg-app__header__title']}>
          Interactive Style Guide
        </b>
        <span data-component='isg_header_select'></span>
        <span className={style['isg-app__header__logo']}>
          TandemSeven
        </span>
      </header>
    )
  }
}

// Export.
export default Header
