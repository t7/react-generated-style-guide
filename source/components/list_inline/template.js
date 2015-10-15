// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'

// CSS.
import style from './t7-list--inline.css'

// Define class.
class ListInline extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <ul className={style['t7-list--inline']}>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ListInline.propTypes = {
  children: React.PropTypes.node
}

// Defaults.
ListInline.defaultProps = {
  children: fake.list()
}

// Export.
export default ListInline
