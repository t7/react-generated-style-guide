// Dependencies.
import React from 'react'

// Define class.
class Image extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const alt = this.props.alt

    var height = this.props.height
    var width = this.props.width

    const numericWidth = parseFloat(width)
    const numericHeight = parseFloat(height)
    const isPercentWidth = !!(width.match('%') && numericWidth)
    const isPercentHeight = !!(height.match('%') && numericHeight)

    // Used for % placeholder image.
    const text = '?text=Placeholder+Image'

    // Check for mixed types.
    const mixedTypes =
      isPercentWidth && numericHeight ||
      numericWidth && isPercentHeight

    // Used if mixed types.
    const error = 'Placeholder <Image /> must use the same unit (%/px) for width and height.'

    if (!isPercentWidth) {
      width = numericWidth
    }

    if (!isPercentHeight) {
      height = numericHeight
    }

    // Used in conditional.
    var src = this.props.src
    var img

    // Is there a source?
    if (src) {
      // Width & Height?
      if (width && height) {
        img = <img alt={alt} src={src} width={width} height={height} />

      // Only width?
      } else if (width) {
        img = <img src={src} alt={alt} width={width} />

      // Only height?
      } else if (height) {
        img = <img src={src} alt={alt} height={height} />

      // Neither width nor height.
      } else {
        img = <img src={src} alt={alt} />
      }

    // No source?
    } else {
      // Percent width, percent height?
      if (isPercentWidth && isPercentHeight) {
        let X = 1000 * (numericWidth / 100)
        let Y = X * (numericHeight / numericWidth)

        src = 'http://placehold.it/' + X + 'x' + Y + text
        img = <img src={src} alt={alt} width={width} height={height} />

      // Mixed types?
      } else if (mixedTypes) {
        throw new Error(error)

      // Pixel width, pixel height?
      } else if (numericWidth && numericHeight) {
        src = 'http://placehold.it/' + width + 'x' + height
        img = <img src={src} alt={alt} />

      // Only pixel width?
      } else if (!isPercentWidth && numericWidth) {
        src = 'http://placehold.it/' + width + 'x' + width
        img = <img src={src} alt={alt} />

      // Only pixel height?
      } else if (!isPercentHeight && numericHeight) {
        src = 'http://placehold.it/' + height + 'x' + height
        img = <img src={src} alt={alt} />

        // TODO.
        console.log(3)

      // Dummy value fallback.
      } else {
        src = 'http://placehold.it/' + 200 + 'x' + 150
        img = <img src={src} alt={alt} />
      }
    }

    return img
  }
}

// Validation.
Image.propTypes = {
  alt: React.PropTypes.string,
  src: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

// Defaults.
Image.defaultProps = {
  alt: '',
  src: '',
  width: '',
  height: ''
}

// Export.
export default Image
