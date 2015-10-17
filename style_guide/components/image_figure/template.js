// Dependencies.
import React from 'react'

// UI components.
import Image from '../image/template'

// CSS.
import style from './t7-figure.css'

// Define class.
class ImageFigure extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const alt = this.props.alt
    const border = this.props.border
    const caption = this.props.caption
    const captionTop = this.props.captionTop
    const href = this.props.href
    const src = this.props.src
    const target = this.props.target

    var width = this.props.width
    var height = this.props.height

    if (!src && !width) {
      width = '1000'
    }

    if (!src && !height) {
      height = '300'
    }

    // Markup for caption.
    const figcaption = (
      <figcaption>
        {caption}
      </figcaption>
    )

    // Used in conditional.
    var figcaptionTop
    var figcaptionBottom

    // Determine caption position.
    if (captionTop) {
      figcaptionTop = figcaption
    } else {
      figcaptionBottom = figcaption
    }

    // Assume no link.
    var figure = (
      <figure className={style['t7-figure']}>
        {figcaptionTop}
        <Image
          alt={alt}
          border={border}
          src={src}
          width={width}
          height={height}
        />
        {figcaptionBottom}
      </figure>
    )

    // Is there a link?
    if (href) {
      figure = (
        <figure className={style['t7-figure']}>
          {figcaptionTop}
          <a href={href} target={target}>
            <Image
              alt={alt}
              border={border}
              src={src}
              width={width}
              height={height}
            />
          </a>
          {figcaptionBottom}
        </figure>
      )
    }

    return figure
  }
}

// Validation.
ImageFigure.propTypes = {
  alt: React.PropTypes.string,
  border: React.PropTypes.string,
  caption: React.PropTypes.string,
  captionTop: React.PropTypes.bool,
  href: React.PropTypes.string,
  src: React.PropTypes.string,
  target: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

// Defaults.
ImageFigure.defaultProps = {
  alt: '',
  caption: 'Image Caption Here'
}

// Export.
export default ImageFigure
