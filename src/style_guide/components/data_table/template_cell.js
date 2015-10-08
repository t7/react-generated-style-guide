// Dependencies.
import React from 'react'
import { FormattedDate, FormattedNumber } from 'react-intl'

// CSS.
import style from '../../css/_t7-data-table.css'

// Define class.
class DataTableCell extends React.Component {
  constructor (props) {
    // Pass `props` into scope.
    super(props)
  }

  // Render method.
  render () {
    const key = this.props.key
    const type = this.props.type

    const isCurrency = type === 'currency'
    const isDate = type === 'date'

    var value = this.props.value
    const isNegative = value < 0

    // Used in conditional.
    var className = style['t7-data-table__td']

    // Currency value?
    if (isCurrency) {
      className = style['t7-data-table__td--currency']

      // Negative?
      if (isNegative) {
        className = style['t7-data-table__td--negative']
        value = value * -1
      }

      value = (
        <FormattedNumber
          value={value}
          style='currency'
          currency='USD'
        />
      )

    // Date value?
    } else if (isDate) {
      value = (
        <FormattedDate
          value={value}
          day='numeric'
          month='long'
          year='numeric'
        />
      )
    }

    // Used in conditional.
    var td

    // If value is negative.
    if (isCurrency && isNegative) {
      // Wrap in parenthesis.
      td = (
        <td key={key} className={className}>
          ({value})
        </td>
      )

    // Otherwise, leave value as-is.
    } else {
      td = (
        <td key={key} className={className}>
          {value}
        </td>
      )
    }

    // Expose `<td>`.
    return td
  }
}

// Validation.
DataTableCell.propTypes = {
  key: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.node
}

// Export.
export default DataTableCell
