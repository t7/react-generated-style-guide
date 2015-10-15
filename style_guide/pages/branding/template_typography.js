// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/isg-section.css'

// Define class.
class Typography extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const fontFamily = this.props.fontFamily
    const link = this.props.link
    const title = this.props.title

    const inlineStyle = {
      fontFamily: fontFamily
    }

    var sectionFooter

    if (link) {
      sectionFooter = (
        <footer className={style['isg-section__footer']}>
          Read more&hellip;
          <a href={link} target='_blank'>{link}</a>
        </footer>
      )
    }

    return (
      <section className={style['isg-section']}>

        <header className={style['isg-section__header']}>
          {title}
        </header>

        <div className={style['isg-section__example']} style={inlineStyle}>

          <h1>
            Grumpy wizards make toxic brew for the evil Queen and Jack.
          </h1>

          <h2>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </h2>

          <p>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>

          <p>
            abcdefghijklmnopqrstuvwxyz
          </p>

          <p>
            0123456789 (!@#$%.,?:;)
          </p>

        </div>

        {sectionFooter}

      </section>
    )
  }
}

// Validation.
Typography.propTypes = {
  fontFamily: React.PropTypes.string,
  link: React.PropTypes.string,
  title: React.PropTypes.string
}

// Export.
export default Typography
