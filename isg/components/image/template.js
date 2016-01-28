// Dependencies.
import React from 'react'

// Define class.
class Image extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Click handler.
  handleClick (e) {
    const keyPress = e.keyCode
    const keyEnter = keyPress === 13

    // Exit, if not "Enter" key.
    if (keyPress && !keyEnter) {
      return
    }

    // Parent component's click handler.
    const handleClick = this.props.handleClick

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e)
  }

  // Render method.
  render () {
    const alt = this.props.alt
    const href = this.props.href
    const target = this.props.target

    var height = this.props.height
    var width = this.props.width

    const numericWidth = parseFloat(width)
    const numericHeight = parseFloat(height)
    const isPercentWidth = !!(numericWidth && width.match('%'))
    const isPercentHeight = !!(numericHeight && height.match('%'))

    // Click event.
    const handleClick = this.props.handleClick

    // Is there a border?
    var border = this.props.border

    if (border) {
      border = {
        border: '1px solid ' + border
      }
    }

    // Used for placeholders.
    var text = ''
    var textPercent = '?text=PLACEHOLDER'

    // Is there alt text?
    if (alt) {
      text = '?text=' + alt
      textPercent = text
    }

    // Check for mixed types.
    const mixedTypes =
      isPercentWidth && numericHeight ||
      numericWidth && isPercentHeight

    // Used if mixed types.
    const errorType = 'Placeholder <Image /> must use the same unit (%/px) for width and height.'

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
        img = (
          <img
            alt={alt}
            src={src}
            width={width}
            height={height}
            style={border}
          />
        )

      // Only width?
      } else if (width) {
        img = (
          <img
            src={src}
            alt={alt}
            width={width}
            style={border}
          />
        )

      // Only height?
      } else if (height) {
        img = (
          <img
            src={src}
            alt={alt}
            height={height}
            style={border}
          />
        )

      // Neither width nor height.
      } else {
        img = (
          <img
            src={src}
            alt={alt}
            style={border}
          />
        )
      }

    // No source?
    } else {
      // Percent width, percent height?
      if (isPercentWidth && isPercentHeight) {
        let X = 1000 * (numericWidth / 100)
        let Y = X * (numericHeight / numericWidth)

        src = 'http://placehold.it/' + X + 'x' + Y + textPercent

        img = (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={border}
          />
        )

      // Mixed types?
      } else if (mixedTypes) {
        throw new Error(errorType)

      // Pixel width, pixel height?
      } else if (numericWidth && numericHeight) {
        src = 'http://placehold.it/' + width + 'x' + height + text

        img = (
          <img
            src={src}
            alt={alt}
            style={border}
          />
        )

      // Only pixel width?
      } else if (!isPercentWidth && numericWidth) {
        src = 'http://placehold.it/' + width + 'x' + width + text

        img = (
          <img
            src={src}
            alt={alt}
            style={border}
          />
        )

      // Only pixel height?
      } else if (!isPercentHeight && numericHeight) {
        src = 'http://placehold.it/' + height + 'x' + height + text

        img = (
          <img
            src={src}
            alt={alt}
            style={border}
          />
        )

      // Dummy value fallback.
      } else {
        src = 'http://placehold.it/' + 200 + 'x' + 100 + text

        img = <img
          src={src}
          alt={alt}
          style={border}
        />
      }
    }

    // Click event?
    if (handleClick || href) {
      img = (
        <a
          href={href}
          target={target}

          tabIndex={handleClick && !href ? '0' : null}

          onClick={handleClick}
          onKeyDown={handleClick}
        >
          {img}
        </a>
      )
    }

    return img
  }
}

// Validation.
Image.propTypes = {
  alt: React.PropTypes.string,
  border: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  href: React.PropTypes.string,
  src: React.PropTypes.string,
  target: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
}

// Defaults.
Image.defaultProps = {
  alt: ''
}

// Export.
export default Image
