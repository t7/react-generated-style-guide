// Dependencies.
import React from 'react'

// UI components.
import DataTableCell from './template_td'

// Define class.
class DataTableRow extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const columns = this.props.columns
    const data = this.props.data

    return (
      <tr role='row'>
        {
          data.map(function (value, i) {
            return (
              <DataTableCell key={i} index={i} type={columns[i].type} value={value} />
            )
          })
        }
      </tr>
    )
  }
}

// Validation.
DataTableRow.propTypes = {
  columns: React.PropTypes.array,
  data: React.PropTypes.array
}

// Export.
export default DataTableRow
