// Dependencies.
import React from 'react'

// CSS.
import './isg-color-list.css'

// Define class.
class ColorItem extends React.Component {
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
      <li className='isg-color-list__item'>

        <div className='isg-color-list__section'>

          <div
            className='isg-color-list__sample'
            style={inlineStyle}
          >
            <div className='isg-color-list__value'>
              <code>{value}</code>
            </div>
          </div>

          <div className='isg-color-list__title'>
            {title}
          </div>

          <div className='isg-color-list__description'>
            {description}
          </div>

        </div>

      </li>
    )
  }
}

// Validation.
ColorItem.propTypes = {
  title: React.PropTypes.string,
  value: React.PropTypes.string,
  description: React.PropTypes.string
}

// Export.
export default ColorItem
