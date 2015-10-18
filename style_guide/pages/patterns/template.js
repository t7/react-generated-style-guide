// Dependencies.
import React from 'react'

// Layout components.
import App from '../../layouts/app'
import Main from '../../layouts/app_main'
import Sidebar from '../../layouts/app_sidebar'

// CSS.
import style from '../../css/isg-section.css'

// UI components.
import Button from '../../components/form_button/template'
import ListInline from '../../components/list_inline/template'

// Get raw JS.
import raw_button_toggle from 'raw!./raw_button_toggle'

// Highlight.js CSS
import highlight_css_raw from 'raw!./highlight.txt'

// Define class.
class Page extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const main = []
    const sidebar = []

    this.props.data.map(function (item, i) {
      const id = item.id
      const href = '#' + id
      const jsx = item.jsx
      const markup = item.markup
      const name = item.name

      // Hide code example.
      const displayNone = {
        display: 'none'
      }

      // Build main markup.
      main.push(
        <section id={id} key={i} className={style['isg-section']}>

          <header className={style['isg-section__header--title-case']}>
            {name}
          </header>

          <div
            className={style['isg-section__example']}
            data-component={id}
          />

          <hr />

          <p>
            <b>
              Example code:
            </b>
          </p>

          <ListInline>
            <li data-trigger-jsx={id}>
              <Button text='JSX' size='small' />
            </li>
            <li data-trigger-html={id}>
              <Button text='HTML' size='small' />
            </li>
          </ListInline>

          <pre data-example-jsx={id} style={displayNone}>
            <code className='hljs' dangerouslySetInnerHTML={{__html: jsx}} />
          </pre>

          <pre data-example-html={id} style={displayNone}>
            <code className='hljs' dangerouslySetInnerHTML={{__html: markup}} />
          </pre>

        </section>
      )

      // Build sidebar markup.
      sidebar.push(
        <li key={i}>
          <a href={href}>
            {name}
          </a>
        </li>
      )
    })

    return (
      <App>

        <Sidebar>
          <ul>
            {sidebar}
          </ul>
        </Sidebar>

        <Main>
          <h1>
            Patterns
          </h1>

          {main}
        </Main>

        <style dangerouslySetInnerHTML={{__html: highlight_css_raw}} />
        <script dangerouslySetInnerHTML={{__html: raw_button_toggle}} />

      </App>
    )
  }
}

// Validation.
Page.propTypes = {
  data: React.PropTypes.array
}

// Export.
export default Page
