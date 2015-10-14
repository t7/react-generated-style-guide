// Dependencies.
import React from 'react'

// UI components.
import Image from '../image/template'

// CSS.
import style from '../../css/t7-image.css'

// Define class.
class ImageFigure extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const alt = this.props.alt
    const caption = this.props.caption
    const src = this.props.src
    const width = this.props.width
    const height = this.props.height

    return (
      <figure className={style['t7-figure']}>
        <Image alt={alt} src={src} width={width} height={height} />
        <figcaption>
          {caption}
        </figcaption>
      </figure>
    )
  }
}

// Validation.
ImageFigure.propTypes = {
  alt: React.PropTypes.string,
  caption: React.PropTypes.string,
  src: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

// Defaults.
ImageFigure.defaultProps = {
  alt: '',
  caption: 'Image Caption Here',
  src: '',
  width: '1000',
  height: '300'
}

// Export.
export default ImageFigure
