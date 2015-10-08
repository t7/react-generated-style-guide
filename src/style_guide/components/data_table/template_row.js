import React from 'react'

// UI components.
import DataTableCell from './template_cell'

// Define class.
class DataTableRow extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const data = this.props.data

    return (
      <tr>
        {
          data.map(function ({type, value}, i) {
            return (
              <DataTableCell key={i} type={type} value={value} />
            )
          })
        }
      </tr>
    )
  }
}

// Validation.
DataTableRow.propTypes = {
  data: React.PropTypes.array
}

// Export.
export default DataTableRow
