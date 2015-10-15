// Dependencies.
import React from 'react'

// Utility methods.
import fake from '../../fake'

// CSS.
import style from './t7-list--clean.css'

// Define class.
class ListClean extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    return (
      <ul className={style['t7-list--clean']}>
        {this.props.children}
      </ul>
    )
  }
}

// Validation.
ListClean.propTypes = {
  children: React.PropTypes.node
}

// Defaults.
ListClean.defaultProps = {
  children: fake.list()
}

// Export.
export default ListClean
