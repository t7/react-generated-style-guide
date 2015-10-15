// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// Layout.
import './layouts/isg-app.css'

// Grid.
import './components_misc/unsemantic/grid.css'

// Style guide CSS.
import './css/reset.css'
import './css/global.css'
import './css/isg-section.css'

// Pilfered from "source".
import './css/t7-form.css'

// Component level CSS.
import './components/color_list/isg-color-list.css'

// For the ISG header drop-down.
import HeaderSelect from './components/form_select/template'

// START: Closure.
;(function () {
  function handleChange (e) {
    const el = e.target
    const url = '/style_guide/' + el.value
    window.location.pathname = url
  }

  // Get current page.
  const arr = window.location.pathname.split('/')
  const len = arr.length
  const value = arr[len - 1] || arr[len - 2]

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

  const props = {
    options: options,
    value: value,
    width: 'auto',

    // Events.
    handleChange: handleChange
  }

  const element = React.createElement(HeaderSelect, props)
  const str = '[data-component="isg_header_select"]'
  const el = document.querySelector(str)

  ReactDOM.render(element, el)

// END: Closure.
})()

/*
  The following comment must be left in place,
  because Node uses it as a way to dynamically
  generate a loop that creates client-side JS.
*/

/*
{_DYNAMIC_INSERTION_POINT_}
*/
