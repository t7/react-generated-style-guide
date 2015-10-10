// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-tabs.css'

// Define class.
class Tab extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Click handler.
  handleClick (e) {
    const handleClick = this.props.handleClick
    const index = this.props.index

    if (typeof handleClick !== 'function') {
      return
    }

    handleClick(e, index)
  }

  // Render method.
  render () {
    const handleClick = this.handleClick.bind(this)

    const index = this.props.index
    const label = this.props.label
    const selected = this.props.selected

    var className = style['t7-tab']

    if (selected === index) {
      className = style['t7-tab--selected']
    }

    return (
      <li key={index} className={className}>
        <a onClick={handleClick}>
          {label}
        </a>
      </li>
    )
  }
}

// Validation.
Tab.propTypes = {
  handleClick: React.PropTypes.func,
  index: React.PropTypes.number,
  label: React.PropTypes.string,
  selected: React.PropTypes.number
}

// Defaults.
Tab.defaultProps = {
  selected: 0
}

// Export.
export default Tab
