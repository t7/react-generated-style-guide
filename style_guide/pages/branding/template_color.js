// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/isg-branding.css'

// Misc components.
import Grid from '../../components_misc/unsemantic/grid_unit'

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
      <Grid desktop='20' tablet='25' mobile='50'>

        <div className={style['isg-branding__color']}>
          <div
            className={style['isg-branding__color__sample']}
            style={inlineStyle}
          ></div>
          <div className={style['isg-branding__color__value']}>
            <code>{value}</code>
          </div>
          <div className={style['isg-branding__color__title']}>
            {title}
          </div>
          <div className={style['isg-branding__color__description']}>
            {description}
          </div>
        </div>

      </Grid>
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
