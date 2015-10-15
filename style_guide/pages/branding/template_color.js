// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/isg-branding.css'

// Define class.
class Color extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const description = this.props.description
    const title = this.props.title
    const value = this.props.value

    const inlineStyle = {
      background: value
    }

    return (
      <div className={style['isg-branding__color']}>
        <div
          className={style['isg-branding__color-sample']}
          style={inlineStyle}
        ></div>
        <div className={style['isg-branding__color-title']}>
          {title}
          <br />
          {value}
        </div>
        <div className={style['isg-branding__color-description']}>
          {description}
        </div>
      </div>
    )
  }
}

// Validation.
Color.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.string,
  description: React.PropTypes.string
}

// Export.
export default Color
