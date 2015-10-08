// Dependencies.
import React from 'react'

// CSS.
import style from '../../css/_t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// Shared scope.
var that

// Define class.
class DataTableHeader extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)

    // Alias to parent class.
    that = this
  }

  onClick (e) {
    const onClick = that.props.onClick

    // Exit, if no callback.
    if (typeof onClick !== 'function') {
      return
    }

    onClick(e)
  }

  // Render method.
  render () {
    const index = this.props.index
    const label = this.props.label
    const sortable = this.props.sortable
    const sort_direction = this.props.sort_direction
    const onClick = sortable ? this.props.onClick : null

    var className = style['t7-data-table__th']

    if (sortable) {
      className = style['t7-data-table__th--sortable']
    }

    return (
      <th
        data-index={index}
        data-sort-direction={sort_direction}
        className={className}
        onClick={onClick}
      >
        {label}
      </th>
    )
  }
}

// Validation.
DataTableHeader.propTypes = {
  index: React.PropTypes.number,
  label: React.PropTypes.string,
  sort: React.PropTypes.bool,
  sort_direction: React.PropTypes.string,
  sortable: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

// Defaults.
DataTableHeader.defaultProps = {
  onClick: function (e) {
    utils.log(e)
  }
}

// Export.
export default DataTableHeader
