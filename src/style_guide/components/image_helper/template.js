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
    const width = parseFloat(this.props.width)
    const height = parseFloat(this.props.height)

    var src = this.props.src

    // Used in conditional.
    var img

    // Is there a source?
    if (src) {
      // Width & Height?
      if (width && height) {
        // TODO.
        console.log('1')

        // Use both.
        img = <img src={src} alt={alt} width={width} height={height} />

      // Only width?
      } else if (width) {
        // TODO.
        console.log('2')

        // Use width.
        img = <img src={src} alt={alt} width={width} />

      // Only height?
      } else if (height) {
        // TODO.
        console.log('3')

        // Use height.
        img = <img src={src} alt={alt} height={height} />

      // Neither width nor height.
      } else {
        // Minimal image tag.
        img = <img src={src} alt={alt} />
      }

    // No source?
    } else {
      // Width & Height?
      if (width && height) {
        // Specific source.
        src = 'http://placehold.it/' + width + 'x' + height

      // Only width?
      } else if (width) {
        // Specific source.
        src = 'http://placehold.it/' + width + 'x' + width

      // Use dummy values.
      } else {
        // Alternate source.
        src = 'http://placehold.it/' + 200 + 'x' + 150
      }

      // Minimal image tag.
      img = <img src={src} alt={alt} />
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
