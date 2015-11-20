// Dependencies.
import React from 'react'
import accounting from 'accounting'
import moment from 'moment'

// CSS.
import './t7-data-table.css'

// Utility methods.
import utils from '../../utils'

// Money formatting.
accounting.settings.currency.format = {
  pos: '%s%v',
  neg: '(%s%v)'
}

// Define class.
class DataTableCell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const index = this.props.index
    const type = this.props.type

    const isCurrency = type === 'currency'
    const isDate = type === 'date'

    var value = this.props.value
    const isNegative = value < 0

    // Used in conditional.
    var className = [
      't7-data-table__td'
    ]

    // Currency value?
    if (isCurrency) {
      className.push('t7-data-table__td--currency')

      // Negative?
      if (isNegative) {
        className.push('t7-data-table__td--negative')
      }

      value = accounting.formatMoney(value)

    // Date value?
    } else if (isDate) {
      value = moment(value).format('MMM D, YYYY')
    }

    // Convert `className` to string.
    className = className.join(' ')

    // Expose `<td>`.
    return (
      <td key={index} className={className} role='gridcell'>
        {value}
      </td>
    )
  }
}

// Validation.
DataTableCell.propTypes = {
  index: React.PropTypes.number,
  type: React.PropTypes.string,
  value: utils.alphanumeric
}

// Export.
export default DataTableCell
